import React from 'react';
import '../../flexbox.css';
import LockedDiv from '../customcomps/LockedDiv';
import Flexbox from './Flexbox';

const Playground = () => {
  return (
    <LockedDiv 
      className="container" 
      accessCode="password"
      buttonColor="rgb(80,0,80)"
      buttonTextColor="white"
    >
      <h2>Playground</h2>
      <hr />
      <Flexbox />
    </LockedDiv>
  );
}

export default Playground;
