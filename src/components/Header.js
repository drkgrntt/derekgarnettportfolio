import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RetractedHeader from './RetractedHeader';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { retracted: false };
  }

  changeHeader() {
    this.setState(state => ({ retracted: state.retracted ? false : true }));
  }

  render() {
    if (this.state.retracted) {
      return <RetractedHeader onClick={() => this.changeHeader()} />;
    }

    return (
      <div className="head">
        <div style={{ position: 'relative' }} className="container">
          <a 
            style={{ right: '0', position: 'absolute', cursor: 'pointer' }} 
            onClick={() => this.changeHeader()}
          >
            Contract Header
          </a>
          <Link to="/"><h1 className="header">Derek Garnett</h1></Link>
          <img 
            alt="Portrait of Derek"
            className="header" 
            src="https://odesk-prod-portraits.s3.amazonaws.com/Users:drkgrntt:PortraitUrl_100?AWSAccessKeyId=AKIAIKIUKM3HBSWUGCNQ&Expires=2147483647&Signature=qAEptJhP55TQc9Ak6TqpDgAApYQ%3D&DPEwB" 
          />
          <div className="center">
            <p className="header webdev">Full Stack JavaScript Developer</p>
            <p className="header contact"><a href="mailto:drkgrntt@gmail.com">drkgrntt@gmail.com</a> || <a href="https://github.com/drkgrntt">GitHub</a></p>
          </div>
        </div>
      </div>
    );    
  }
}

export default Header;
