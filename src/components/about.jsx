/**
 * @fileoverview Displays the about tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/toolbar.css';
import '../assets/css/about.css';

export default class About extends Component {
    constructor(props) {
        super(props)
        this.resume = require('../assets/doc/resume.pdf');
        this.profile = require('../assets/img/profile.jpeg');
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
                <div className="about-brand">
                    <h2 className="about-heading">About Me</h2>
                    <div className="about-card">
                        <img className="about-profile" src={this.profile} alt='' />
                        <p className="about-profile-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque 
                            ex a neque interdum, eget volutpat odio congue. Ut sed pellentesque ex. 
                            Suspendisse sollicitudin vehicula rutrum. Nullam interdum ut elit et maximus. 
                            Donec elementum ex mi, nec faucibus nisl blandit nec. Donec sapien nibh, molestie 
                            nec dapibus a, efficitur vel mi. Cras varius nibh scelerisque risus imperdiet, et 
                            ultricies eros finibus. In eleifend nulla a justo sagittis tempor. Donec ut erat 
                            a ante blandit elementum et vitae magna. Nulla consequat justo eget mauris congue, 
                            et sagittis ante placerat.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}