import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';


const Footer = () => {

    return (
        <div className='footer'>
            <div className='container'></div>
            {/* Footer main */}
            <section className='ft-main'>
                <div className='ft-main-item'>
                    <h2 className='ft-title'>About</h2>
                    <ul>
                        <li><a href='/#'>Services</a></li>
                        <li><a href='/#'>Portfolio</a></li>
                        <li><a href='/#'>Pricing</a></li>
                        <li><a href='/#'>Customers</a></li>
                        <li><a href='/#'>Careers</a></li>
                    </ul>
                </div>
                <div className='ft-main-item'>
                    <h2 className='ft-title'>Resources</h2>
                    <ul>
                        <li><a href='/#'>Docs</a></li>
                        <li><a href='/#'>Blog</a></li>
                        <li><a href='/#'>eBooks</a></li>
                        <li><a href='/#'>Webinars</a></li>
                    </ul>
                </div>
                <div className='ft-main-item'>
                    <h2 className='ft-title'>Contact</h2>
                    <ul>
                        <li><a href='/#'>Help</a></li>
                        <li><a href='/#'>Sales</a></li>
                        <li><a href='/#'>Advertise</a></li>
                    </ul>
                </div>
                <div className='ft-main-item'>
                    <h2>Stay Updated</h2>
                    <p>Subscribe to our newsletter to get our latest news</p>
                    <form>
                        <input type='email' name='email' placeholder='Enter email address' />
                        <input type='submit' value='Subscribe' />
                     </form>
                </div>
            </section>

            {/* Footer Social */}
            <section className='ft-social'>
                <ul className='ft-social-list'>
                    <li><a href='/#'><FaFacebook/></a></li>
                    <li><a href='/#'><FaTwitter/></a></li>
                    <li><a href='/#'><FaInstagram/></a></li>
                    <li><a href='/#'><FaGithub/></a></li>
                    <li><a href='/#'><FaLinkedin/></a></li>
                    <li><a href='/#'><FaYoutube/></a></li>
                </ul>
            </section>

            {/* Footer Legal */}
            <section className='ft-legal'>
                <ul className='ft-legal-list'>
                    <li><a href='/#'>Terms &amp; Conditions</a></li>
                    <li><a href='/#'>Privacy Policy</a></li>
                    <li><a href='/#'>&copy; 2022 Copyright KachWanLan Ltd</a></li>
                </ul>
            </section>

            
            
       </div>
  )
}

export default Footer