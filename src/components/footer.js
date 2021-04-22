import React from 'react';
import vanihlaLogo from "../assets/footer-logo.png";
import vanihlaLogoDark from "../assets/vanihla_dark.png";

const Footer = () => {
 
  return (
    <div>
       <div className="footer-top">
      <div className="container">
        <div className="footer-reserve">
          <div className="footer-reserve-logo">
             <img src={vanihlaLogo} />
          </div>
          <div className="footer-reserve-input">
            <input placeholder="Enter your email address"></input>
            <button>Reserve seat</button>
          </div>
        </div>
      </div>
    </div>
     <div className="footer-vanihla">
     <p>An iniative by</p>
     <img src={vanihlaLogoDark} />
    </div>
    </div>
  )
}

export default Footer;