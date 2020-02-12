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
                            I am a software developer, photographer, and avid outdoorsman from the Kansas City area.
                            In May of 2019, I recieved my bachelors degree in Computer Science from Kansas State
                            University. My educational background is primarily in creating C# based apps for Windows.
                            That said, my best work is in creating custom, mobile-friendly websites from the ground up.
                            For most things, I use React and HTML5 to create a clean and lightning fast user experience. 
                            When building APIs and backend servers, I prefer JavaScript/NodeJS. I excel in using Linux environments 
                            but Windows and Mac are no problem. Whether it be a simple homepage, or fully immersive online 
                            experience, I'm here to help your company reach new heights. Sound interesting? I'm available to chat anytime.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}