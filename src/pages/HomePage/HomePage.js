import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import 'style/pages.scss';

function HomePage() {
  return (
    <div className="right-content home-page">
      <img className="" src={require('../../images/drinks.jpg')} />
      <div className="content">
        <div className="circle-container">
          <div className="circle">
            <FontAwesomeIcon icon={['fas', 'utensils']} size="4x" />
          </div>
          <div className="circle">
            <FontAwesomeIcon icon={['fas', 'book-open']} size="4x" />
          </div>
          <div className="circle">
            <FontAwesomeIcon icon={['fas', 'cookie-bite']} size="4x" />
          </div>
          <div className="circle">
            <FontAwesomeIcon icon={['fas', 'carrot']} size="4x" />
          </div>
        </div>
        <div>
          This i an application made in React for finding recipes Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nunc congue metus sed lectus varius, quis sollicitudin lorem
          ornare. Integer sed nulla feugiat, laoreet neque eu, varius quam. Proin sit amet massa at
          metus lobortis aliquet. Nulla in enim nec odio vestibulum euismod a sodales lorem. Ut id
          interdum sem. Praesent rhoncus quis arcu sit amet vulputate. Ut elementum tortor lectus,
          id sollicitudin justo venenatis vitae. Mauris facilisis, velit ullamcorper placerat
          tincidunt, augue ligula imperdiet nibh, nec malesuada dolor lorem eget quam. Pellentesque
          justo lorem, laoreet vehicula elementum eget, aliquet sit amet augue. Fusce faucibus ipsum
          at velit cursus facilisis. Sed posuere risus non magna semper consequat. Phasellus
          scelerisque urna sed augue molestie euismod. Mauris eget malesuada metus. Fusce non
          pharetra arcu, egestas accumsan justo. Nullam urna justo, fermentum et tincidunt et,
          mattis non nibh. Donec pretium lorem nec sapien sollicitudin, in molestie lectus aliquet.
          Nullam faucibus malesuada varius. Nunc cursus metus vitae tortor viverra, a aliquam orci
          gravida. Sed at tellus a lorem sollicitudin rhoncus. Suspendisse laoreet urna sit amet
          ante porttitor fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Duis sed elementum augue. Morbi convallis ipsum at ex pharetra, tempus finibus nisi
          tempor. Nulla tincidunt lacinia massa sit amet tempus. Curabitur rhoncus lobortis ipsum ut
          condimentum. Maecenas dui tellus, mattis at consectetur ac, convallis ut tellus. Nunc a
          nisi et nibh porttitor interdum ac vel est. Maecenas dictum orci nunc, cursus rhoncus
          lectus bibendum id. In ut venenatis erat, id congue velit. Suspendisse ultrices ultrices
          dui vel lacinia. Ut et rutrum quam. Proin arcu lacus, varius vitae commodo ac, convallis
          sit amet quam. Ut id ultrices erat. Sed congue feugiat iaculis. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Vestibulum justo risus, consectetur sed suscipit in,
          varius sit amet purus. Nam nisl massa, faucibus sit amet ex at, accumsan sollicitudin
          urna. Nullam porta pretium mauris, id ullamcorper arcu tempus a. In molestie lectus eu
          dapibus lobortis. Maecenas eu mi commodo, pretium tellus id, blandit libero. Aenean
          blandit nisi ac lorem accumsan, sit amet fermentum metus porta. Nulla molestie lacinia
          felis vitae porta. Praesent at nisl id tellus auctor congue ac sit amet metus. Fusce lacus
          ligula, posuere hendrerit finibus nec, semper at massa. Vivamus in mattis lacus, at
          finibus eros. Integer lacinia nisi sit amet quam tempor, ac maximus velit condimentum.
          Morbi accumsan sagittis risus, laoreet aliquam enim tempor eu. Nulla tristique ut nulla
          sed convallis. Morbi tincidunt nisi nunc, non convallis ante ultrices at. Integer magna
          magna, tempor eget efficitur quis, laoreet non augue. Morbi arcu est, scelerisque eu
          tempus ultrices, sollicitudin in est. Etiam sollicitudin urna in justo consectetur, vel
          sollicitudin eros dapibus. Nulla non commodo turpis, quis congue nibh. Nullam ut rutrum
          sem. Cras tristique suscipit metus. Phasellus rutrum placerat quam, non facilisis est
          dapibus sed. Vestibulum in justo efficitur, efficitur sem ut, venenatis nibh. Nam sed
          dolor sit amet tellus euismod convallis. Nam vestibulum, mi nec fermentum sodales, orci
          ligula cursus ex, dictum hendrerit quam elit in augue.
        </div>
      </div>
    </div>
  );
}

export default HomePage;
