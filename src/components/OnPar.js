import React from 'react';

const OnPar = () => {
  return (
    <div className="app white">
      <div className="container">
        <h1 className="title">On Par</h1>
        <div className="row">
          <div className="column">
            <p>On Par is a mobile application that uses state to track your score (by proximity to par, not total) when playing disc golf (or golf). The "Quick Start" button will take the user directly to the score card where they can push plus and minus buttons to track their score. The setup button will allow the user to add names to keep their friend's score as well as their own in a scrollable page.</p>
            <h3 className="title">Technology:</h3>
            <p>On Par was built with Expo using the React Native library. Each screen and reusable component is custom built and styled. It uses react-navigation to navigate between pages and header styling. Simplicity is the name fo the game with On Par, only using state for data-management, leaving plenty of room for expansion.</p>
          </div>
          <div className="column">
            <img alt="On Par home screen" className="display" src="https://i.imgur.com/QpwVAqT.jpg?1" />
          </div>
        </div>
        <img alt="Node logo" className="use smaller" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
        <img alt="React logo" className="use" src="http://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png" />
        <img alt="React native logo" className="use" src="https://cdn-images-1.medium.com/max/1371/1*safAvjgR68qpQCreDTOcYA.png" style={{ marginRight: '10px' }}/>
        <img alt="Expo logo" className="use" src="https://cdn-images-1.medium.com/max/1920/1*EKXYhntirnqHjXdTGmLXyw.png" />
        <br /><br />
        <a className="button" href="https://exp-shell-app-assets.s3-us-west-1.amazonaws.com/android%2F%40drkgrntt%2FOnPar-b58a273b-3937-11e8-81f9-0a580a7823af-signed.apk">Download the .apk</a>
        <br /><br />
        <a className="button" href="https://github.com/drkgrntt/OnPar">View the source code</a>
        <br /><br />
      </div>
    </div>
  );
}

export default OnPar;
