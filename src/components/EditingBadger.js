import React from 'react';

const EditingBadger = () => {
  return (
    <div className="app white">
      <div className="container">
        <h1 className="title">Honeybadger Editing Services</h1>
        <div className="row">
          <div className="column">
            <p>This is a website designed to display info about Honeybadger Editing Services. It includes imbedded Facebook and Twitter timelines, a list of services offered, customer reviews, and a website blog. The website operator has a dashboard to be able to control each of these features as well.</p>
            <h3 className="title">Technology:</h3>
            <p>This React/Redux website pairs with Firebase for hosting and database management. All customer reviews, blog posts, and even products are managed with Firebase's database. All styling is handled with the Semantic UI library paired with custom CSS.</p>
          </div>
          <div className="column">
            <img className="display" src="https://i.imgur.com/zr9CI6B.png?1" />
          </div>
        </div>
        <img className="use smaller" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
        <img className="use" src="http://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png" />
        <img className="use" src="https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67" />
        <img className="use" src="https://1.bp.blogspot.com/-YIfQT6q8ZM4/Vzyq5z1B8HI/AAAAAAAAAAc/UmWSSMLKtKgtH7CACElUp12zXkrPK5UoACLcB/s1600/image00.png" />
        <img className="use smaller" src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/04/1461315888semantic.png" />
        <br /><br />
        <a className="button" href="https://editingbadger.com">Check it Out</a>
      </div>
    </div>
  );
}

export default EditingBadger;
