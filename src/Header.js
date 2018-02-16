import React from 'react';

const Header = () => {
  return (
    <div id="header">
      <div class="container">
        <h1 class="header">Derek Garnett</h1>
        <img 
          class="header" 
          src="https://odesk-prod-portraits.s3.amazonaws.com/Users:drkgrntt:PortraitUrl_100?AWSAccessKeyId=AKIAIKIUKM3HBSWUGCNQ&Expires=2147483647&Signature=qAEptJhP55TQc9Ak6TqpDgAApYQ%3D&DPEwB" 
        />
        <div id="contact">
          <p class="header webdev">Full Stack JavaScript Developer</p>
          <p class="header contact"><a href="mailto:drkgrntt@gmail.com">drkgrntt@gmail.com</a> || <a href="https://github.com/drkgrntt">GitHub</a></p>
        </div>
      </div>
    </div>
  );
}

export default Header;
