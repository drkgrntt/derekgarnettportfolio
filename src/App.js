import React, { Component } from 'react';
import Header from './Header';
import ArtGallery from './ArtGallery';
import AuthorWebpage from './AuthorWebpage';
import Ramblings from './Ramblings';
import Tools from './Tools';
import Contact from './Contact';

class App extends Component {
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
