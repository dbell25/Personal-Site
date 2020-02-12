/**
 * @fileoverview Displays the about tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../assets/css/contact.css';
import '../assets/css/toolbar.css';

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.resume = require('../assets/doc/resume.pdf');
    }

    render() {
        return (
            <div>
                <div className="toolbar">
                    <ul className="toolbar-items">
                        <Link to='/' className="toolbar-link">Home</Link>
                        <Link to='/about' className="toolbar-link">About</Link>
                        <a href={this.resume} className="toolbar-link" target="_blank" rel="noopener noreferrer">Resume</a>
                        <Link to='/contact' className="toolbar-link">Contact</Link>
                    </ul>
                </div>
                <div className="contact-brand">
                    <h2 className="contact-heading">Contact Me</h2>
                    <div className="contact-bar">
                        <a href="https://www.facebook.com/profile.php?id=100009419505147" target="_blank" rel="noopener noreferrer"><FacebookIcon id="contact-icon" /></a>
                        <a href="https://github.com/dbell25" target="_blank" rel="noopener noreferrer"><GitHubIcon id="contact-icon" /></a>
                        <a href="https://www.linkedin.com/in/daniel-bell-479483141/" target="_blank" rel="noopener noreferrer"><LinkedInIcon id="contact-icon" /></a>
                    </div>
                    <div className="contact-line">
                        <h4 className="contact-item">Phone: +1 (913)-212-8335</h4>
                        <h4 className="contact-item">Email: djbell216@gmail.com</h4>
                    </div>
                </div>
            </div>
        );
    }
}