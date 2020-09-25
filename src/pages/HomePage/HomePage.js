import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import 'style/pages.scss';

function HomePage() {
  return (
    <div className="right-content home-page">
      <div className="image-text-container">
        <img src={require('../../images/drinks.jpg')} />
        <p className="center-on-image">Cocktails & Drink Recipes</p>
      </div>

      <div className="content">
        <div className="homepage-section-1">
          <div className="circle-container">
            <div className="circle">
              <FontAwesomeIcon icon={['fas', 'glass-martini-alt']} size="4x" />
            </div>
            <div className="circle">
              <FontAwesomeIcon icon={['fas', 'heart']} size="4x" />
            </div>
            <div className="circle">
              <FontAwesomeIcon icon={['fas', 'glass-cheers']} size="4x" />
            </div>
            <div className="circle">
              <FontAwesomeIcon icon={['fas', 'wine-bottle']} size="4x" />
            </div>
          </div>
          <div className="m-5em">
            <h1>Drinks & Cocktails</h1>
            <p>
              A cocktail is a kind of mixed drink. Usually, it is made with alcoholic drinks such as
              vodka, gin or rum. Since such spirits do not have much taste of their own (at around
              40% alcohol), other ingredients are added. Common ingredients are fruits, fruit juice,
              sugar, crushed ice, and ice cubes. If the cocktail is served in a bar or nightclub, it
              often comes with a piece of fruit on top. For example, a gin and tonic could have a
              lemon, a Piña Colada could have a pineapple and a cherry. A popular cocktail in
              Cornwall UK is the McVey, 440ml of strongbow and 125ml of Malibu. Most cocktails were
              invented in the late 19th or early 20th centuries. People began drinking a lot of
              cocktails in the United States in the 1920s due to Prohibition. Around that time,
              cocktails from Cuba, such as the mojito, became popular around the world. Cocktails
              made without alcohol are also made. Because all the ingredients give their flavor to
              the finished drink, a cocktail is only as good as the worst ingredient.
            </p>
            <p>
              Fetched from wikipedia article:{' '}
              <a href="https://simple.wikipedia.org/wiki/Cocktail">
                https://simple.wikipedia.org/wiki/Cocktail
              </a>
            </p>
          </div>
        </div>

        <div className="homepage-section-2">
          <h1>About This Page</h1>
          <div>
            This i an application made in React for finding recipes of drinks. It is created as a
            demo project showcasing various techniques both visually and functional. The page
            simulates an application where you can{' '}
          </div>
        </div>
        <div className="homepage-section-3">
          <h1>CocktailDB</h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
