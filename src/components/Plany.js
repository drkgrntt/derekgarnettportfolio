import React from 'react';

const Plany = () => {
  return (
    <div className="app white">
      <div className="container">
        <h1 className="title">Plany</h1>
        <div className="row">
          <div className="column">
            <p>Plany is a vacation budgeting tool. It is designed to allow a user to itemize and add planned expenses for an upcoming vaction. Plany will then total and categorize the expenses and itemizations and display them for you. Once everything is finished, the user can finalize the trip expenses for quick reference when beginning to plan the next vacation.</p>
            <h3 className="title">Technology:</h3>
            <p>Plany is a React/Redux app that uses some Materialize CSS along with custom styling. On the backend, an Express/Node JS app runs from Heroku, uses a local Passport.js strategy for authentication, and stores information into a Mongo database.</p>
          </div>
          <div className="column">
            <img alt="Plany Home Page" className="display" src="https://i.imgur.com/Yjkvdsn.png?1" />
          </div>
        </div>
        <img alt="Node logo" className="use smaller" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
        <img alt="Heroku logo" className="use" src="https://blog.phusion.nl/content/images/2016/07/Heroku.png" />
        <img alt="React logo" className="use" src="http://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png" />
        <img alt="Redux logo" className="use" src="https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67" />
        <img alt="Mongo DB logo" className="use" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png" />
        <img alt="Materialize CSS logo" className="use" src="https://s-media-cache-ak0.pinimg.com/originals/11/32/de/1132de743af11b94448b08e4e69e7bdf.jpg" />
        <br /><br />
        <a href="https://plany.herokuapp.com">
          <button className="button">Visit Plany</button>
        </a>
      </div>
    </div>
  );
}

export default Plany;
