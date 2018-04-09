import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Portfolio from './Portfolio';
import Review from './Review';
import Journal from './Journal';
import ShowJournal from './ShowJournal';
import ToDo from './ToDoList/ToDo';
import Playground from './Playground';

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
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/todo" component={ToDo} />
          <Route exact path="/journal" component={Journal} />
          <Route exact path="/journal/:uid" component={ShowJournal} />
          <Route exact path="/playground" component={Playground} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
