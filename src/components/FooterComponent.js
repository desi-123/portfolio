import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="portfolio-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/education'>Education</Link></li>
                            <li><Link to='/resume'>Resume</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                            
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-github" href="http://github.com/"><i className="fa fa-github" /></a>{' '}
                        <a className="btn btn-social-icon btn-linkedin" href="http://linkedin.com/"><i className="fa fa-linkedin" /></a>{' '}
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+18058199999"><i className="fa fa-phone" /> 1-805-819-9999</a><br />
                        <a role="button" className="btn btn-link" href="mailto:itIsreal@gmail.com"><i className="fa fa-envelope-o" /> desi21@developer.co</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
