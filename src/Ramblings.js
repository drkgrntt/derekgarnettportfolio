import React from 'react';

const Ramblings = () => {
  return (
    <div class="app white">
      <div class="container">
        <h1 class="title">Ramblings</h1>
        <p>Ramblings is a blogging website I created for my wife. It is designed to display a more compact list of the blog posts, while having a more open view of each one readily available. Any user can log in, comment on posts, reply to comments, and subscribe for email notifications of new posts. The operator (my wife, in this case) has admin access and is able to create, edit, and delete new blog posts, as well as being able to do the same for any comments and replies.</p>
        <h3 class="title">Technology:</h3>
        <p>Ramblings uses Semantic UI for its layout. On the backend, an Express/Node JS app runs from Heroku, includes authentication and nested routes for user interaction, and stores everything into a Mongo database.</p>
        <img class="use smaller" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
        <img class="use" src="https://blog.phusion.nl/content/images/2016/07/Heroku.png" />
        <img class="use smaller" src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/04/1461315888semantic.png" />
        <img class="use" src="http://www.vikaskbh.com/wp-content/uploads/2014/01/jquery_logo.png" />
        <img class="use" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png" />
        <br /><br />
        <a class="button" href="https://ramblings.herokuapp.com">Visit the Blog</a>
      </div>
    </div>
  );
}

export default Ramblings;
