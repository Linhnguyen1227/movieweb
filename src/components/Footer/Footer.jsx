import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

function Footer() {
    return (
        <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
            <div className="footer_content container">
                <div className="footer_content_logo">
                    <img src={logo} alt="#" />
                    <Link to="/"> tMovies</Link>
                </div>
                <div className="footer_content_menus">
                    <div className="footer_content_menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Term of service</Link>
                        <Link to="/">About us</Link>
                    </div>
                    <div className="footer_content_menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Term of service</Link>
                        <Link to="/">About us</Link>
                    </div>
                    <div className="footer_content_menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Term of service</Link>
                        <Link to="/">About us</Link>
                    </div>
                    <div className="footer_content_menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Term of service</Link>
                        <Link to="/">About us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
