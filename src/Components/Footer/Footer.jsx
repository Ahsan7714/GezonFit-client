import React from 'react';
import './Footer.css';
import logo from "../../assets/footer.png";

const Footer = () => {
  return (
    <div className='footer -mb-6'>
      <div className='top-footer py-7'>
            <div className='left-footer'>
              <img src={logo} alt='logo' />
            </div>
             <div className='right-footer'>
               <ul>
                 <li><a href="/">About US</a></li>
                 <li><a href="/about">Contact Us</a></li>
                 <li><a href="/contact">Privacy Policy</a></li>
               </ul>
             </div>
      </div>
      <div className='bottom-footer'>
              <p>Copyright © Gezondfit50+ 2024</p>
      </div>
    </div>
  );
};

export default Footer;

