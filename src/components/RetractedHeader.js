import React from 'react';
import { Link } from 'react-router-dom';

const RetractedHeader = (props) => {
  return (
    <div style={{ height: '19px' }} className="head">
      <div className="container">
        <Link style={{ float: 'left' }} to="/">
          <h4 className="header">Derek Garnett</h4>
        </Link>
        <a 
          onClick={props.onClick} 
          style={{ float: 'right', cursor: 'pointer' }}
        >
          Expand
        </a>
      </div>
    </div>
  );
}

export default RetractedHeader;
