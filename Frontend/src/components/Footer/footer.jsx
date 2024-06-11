import React from 'react';
import "./footer.css";
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
          <img className='footer-logo-img' src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum ad neque voluptatibus voluptas. Magni nemo dicta porro, quia eius suscipit nostrum magnam illo et? Delectus a eos sequi eius?</p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className='footer-content-mid'>
           <h2>COMPANY</h2>
           <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
           </ul>
        </div>
        <div className='footer-content-right'>
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>+91-244-657-7089</li>
                <li>contact@dadeesrestro.com</li>
             </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">
        Copyright 2024 &copy; DadeesRestro.com - All Right Reserved.
      </p>
    </div>

  );
};

export default Footer;
