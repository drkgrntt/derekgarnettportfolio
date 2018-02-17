import React, { Component } from 'react';
import firebase from 'firebase';
import Header from './Header';
import ArtGallery from './ArtGallery';
import AuthorWebpage from './AuthorWebpage';
import Ramblings from './Ramblings';
import Tools from './Tools';
import Contact from './Contact';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCKWWmpZE1wL_-26_bR7FzIyQ5Sagmj6RQ",
      authDomain: "derekgarnettportfolio.firebaseapp.com",
      databaseURL: "https://derekgarnettportfolio.firebaseio.com",
      projectId: "derekgarnettportfolio",
      storageBucket: "derekgarnettportfolio.appspot.com",
      messagingSenderId: "917609079638"
    };
    
    firebase.initializeApp(config);    
  }

  render() {
    return (
      <div>
        <Header />
        <ArtGallery />
        <AuthorWebpage />
        <Ramblings />
        <Tools />
        <Contact />
      </div>
    );
  }
}

export default App;
