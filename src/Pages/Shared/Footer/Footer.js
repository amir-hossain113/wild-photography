import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className="text-center footer">
            <h2>Wild Photography</h2>
            <p>Amir Hossain || copyright©{year}</p>
            <p>Contact : 01601555830</p>
            <p>Email : amirhossain.cse@gmail.com</p>
        </div>
    );
};

export default Footer;