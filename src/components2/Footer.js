import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';
import MailLink from './MailLink';

const Footer = () => {
    return (
      <div className="site-footer">
        <Contact />
      </div>
    );
}

export default Footer;