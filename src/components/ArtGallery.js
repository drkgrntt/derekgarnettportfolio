import React from 'react';

const ArtGallery = () => {
  return (
    <div className="app white">
      <div className="container">
        <h1 className="title">Art Gallery</h1>
        <div className="row">
          <div className="column">
            <p>Art Gallery is just that; an art gallery for an elementary school Art Club. It allows users (parents and students) to go to the gallery, login with google for commenting, and expand different galleries and individual pieces of art. The operator has admin access to be able to upload, post, edit, and delete parent-level galleries and child-level pieces of artwork and their info. User features include being able to comment on pictures and edit or delete those comments.</p>
            <h3 className="title">Technology:</h3>
            <p>Art Gallery is a React/Redux app that uses Materialize CSS for its styling. On the backend, an Express/Node JS app runs from Heroku, uses Google Oauth for authentication, and stores information into a Mongo database. Images are uploaded to Cloudinary with the help of Multer.</p>
          </div>
          <div className="column">
            <img alt="Art Gallery Home Page" className="display" src="https://i.imgur.com/TKhAgad.png?1" />
          </div>
        </div>
        <img alt="Node logo" className="use smaller" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
        <img alt="Heroku logo" className="use" src="https://blog.phusion.nl/content/images/2016/07/Heroku.png" />
        <img alt="React logo" className="use" src="http://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png" />
        <img alt="Redux logo" className="use" src="https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67" />
        <img alt="Mongo DB logo" className="use" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png" />
        <img alt="Materialize CSS logo" className="use" src="https://s-media-cache-ak0.pinimg.com/originals/11/32/de/1132de743af11b94448b08e4e69e7bdf.jpg" />
        <br /><br />
        <a href="https://luffartclub.herokuapp.com">
          <button className="button">Browse the Gallery</button>
        </a>
      </div>
    </div>
  );
}

export default ArtGallery;
