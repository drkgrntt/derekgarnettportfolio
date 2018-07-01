import React from 'react';
import Plany from './Plany';
import OnPar from './OnPar';
import EditingBadger from './EditingBadger';
import ArtGallery from './ArtGallery';
import AuthorWebpage from './AuthorWebpage';
import Ramblings from './Ramblings';
import Tools from './Tools';
import Contact from './Contact';

const Portfolio = () => {
  return (
    <div>
      <Plany />
      <OnPar />
      <EditingBadger />
      <AuthorWebpage />
      <ArtGallery />
      <Ramblings />
      <Tools />
      <Contact />
    </div>
  );
}

export default Portfolio;
