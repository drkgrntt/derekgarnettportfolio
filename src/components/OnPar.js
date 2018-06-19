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
            <img alt="On Par home screen" className="display" src="https://i.imgur.com/5xOeU7g.png?1" />
          </div>
        </div>
        <img alt="Node logo" className="use smaller" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
        <img alt="React logo" className="use" src="http://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png" />
        <img alt="Redux logo" className="use" src="https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67" />
        <img alt="React native logo" className="use bigger" src="https://cdn-images-1.medium.com/max/1371/1*safAvjgR68qpQCreDTOcYA.png" style={{ marginRight: '10px' }}/>
        <img alt="Expo logo" className="use" src="https://cdn-images-1.medium.com/max/1920/1*EKXYhntirnqHjXdTGmLXyw.png" />
        <br /><br />
        <a href="https://exp-shell-app-assets.s3-us-west-1.amazonaws.com/android%2F%40drkgrntt%2FOnPar-9a5d2f39-7298-11e8-875a-0a580a78040b-signed.apk">
          <button className="button">Download the .apk</button>
        </a>
        <br /><br />
        <a href="https://github.com/drkgrntt/OnPar">
          <button className="button">View the source code</button>
        </a>
        <br /><br />
      </div>
    </div>
  );
}

export default OnPar;
