import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err);
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (!serializedState) return undefined;
    else return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedStore = loadState();
const store = createStore(rootReducer, persistedStore, applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
