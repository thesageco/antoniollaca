import React from 'react';
import './index.scss';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import instagram from '../../assets/icons/instagram.svg';

export default function Footer() {
  return (
    <div className="footer">
      <footer className="footer-content">
        <a href="https://twitter.com/antonioconduct" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="twitter logo" />
        </a>
        <a href="https://www.facebook.com/antonioconducts" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="facebook logo" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="instagram logo" />
        </a>
      </footer>
    </div>
  );
};

