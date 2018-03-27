import React from 'react';

const AuthorWebpage = () => {
  return (
    <div className="app grey">
      <div className="container">
        <h1 className="title">Author Webpage</h1>
        <div className="row">
          <div className="column">
            <p>This is an author website. On the main landing page, you can preview the first chapter of the author's book, read short stories published by the author, and even contact him about his stories or writing work. The author has admin access to be able to create, edit, and delete short stories and chapters for longer stories, as well as being able to choose which story is the feature story for the front page.</p>
            <h3 className="title">Technology:</h3>
            <p>This author webpage is a React app that uses Redux to manage state. It uses Materialize CSS, along with a fair amount of custom styling. Firebase is the real brains of this backend. Firebase handles all of the database management, hosts the website, and uses Firebase functions to handle server-side funcitons.</p>
          </div>
          <div className="column">
            <img alt="Author Webpage home page" className="display" src="https://i.imgur.com/rMUUXyC.png?1" />
          </div>
        </div>
        <img alt="Node logo" className="use smaller" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
        <img alt="React logo" className="use" src="http://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png" />
        <img alt="Redux logo" className="use" src="https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67" />
        <img alt="Firebase logo" className="use" src="https://1.bp.blogspot.com/-YIfQT6q8ZM4/Vzyq5z1B8HI/AAAAAAAAAAc/UmWSSMLKtKgtH7CACElUp12zXkrPK5UoACLcB/s1600/image00.png" />
        <img alt="Matierialize CSS logo" className="use" src="https://s-media-cache-ak0.pinimg.com/originals/11/32/de/1132de743af11b94448b08e4e69e7bdf.jpg" />
        <br /><br />
        <a className="button" href="https://markgarnettauthor.firebaseapp.com">Check it Out</a>
        <br /><br />
      </div>
    </div>
  );
}

export default AuthorWebpage;
