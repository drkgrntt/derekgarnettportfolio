import React from 'react';
import '../../flexbox.css';
import LockedDiv from '../customcomps/LockedDiv';
import Flexbox from './Flexbox';

const Playground = () => {
  return (
    <LockedDiv className="container" accessCode="password">
      <h2>Playground</h2>
      <hr />
      <Flexbox />
    </LockedDiv>
  );
}

export default Playground;
