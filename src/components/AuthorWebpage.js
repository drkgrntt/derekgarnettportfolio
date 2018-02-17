import React from 'react';

const AuthorWebpage = () => {
  return (
    <div className="app grey">
      <div className="container">
        <h1 className="title">Author Webpage</h1>
        <p>This webpage is a place for my brother's writing. He recently wrote and published a book about a six-month teaching job in Honduras that he did several years ago. He also likes to write short stories and publish them to Facebook, so I created this website to show off his new book, <i>From Scattered Ashes</i>, and to publish and maintain his other writings. Right now, the website is still a work in progress.</p>
        <h3 className="title">Technology:</h3>
        <p>This author webpage is a React app that uses Redux to manage state. It uses Materialize CSS, along with a fair amount of custom styling. Firebase is the real brains of this backend. Firebase handles all of the database management and even hosts the website.</p>
        <img className="use smaller" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
        <img className="use" src="http://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png" />
        <img className="use" src="https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67" />
        <img className="use" src="https://1.bp.blogspot.com/-YIfQT6q8ZM4/Vzyq5z1B8HI/AAAAAAAAAAc/UmWSSMLKtKgtH7CACElUp12zXkrPK5UoACLcB/s1600/image00.png" />
        <img className="use" src="https://s-media-cache-ak0.pinimg.com/originals/11/32/de/1132de743af11b94448b08e4e69e7bdf.jpg" />
        <br /><br />
        <a className="button" href="https://markgarnettauthor.firebaseapp.com">Check it Out</a>
        <br /><br />
      </div>
    </div>
  );
}

export default AuthorWebpage;
