/**
 * @fileoverview Displays the public home tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavPublic from './navpublic';
import '../_common/assets/css/general.css';
import '../_common/assets/css/home.css';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.profile = require('../_common/assets/img/profile.jpeg');
        this.resume = require('../_common/assets/doc/resume.pdf');
    }

    render() {
        return (
            <div className="main">
                <NavPublic />
                <div className="home">
                    <div className="jumbotron">
                        <div className="heading">
                            <img className="profile" src={this.profile} alt="404" />
                            <div className="contact">
                                <h2 className="job-title">Full Stack Developer</h2>
                                <hr className="divide" />
                                <ul className="contact-list">
                                    <li className="contact-point"><b>Email</b>: djbell216@gmail.com</li>
                                    <li className="contact-point"><b>Phone</b>: +1 (913) 212-8335</li>
                                    <li className="contact-point"><b>Github</b>: <a href="https://github.com/dbell25" target="_blank" rel="noopener noreferrer">Click Here!</a></li>
                                    <li className="contact-point"><b>LinkedIn</b>: <a href="https://www.linkedin.com/in/daniel-bell-479483141/" target="_blank" rel="noopener noreferrer">Click Here!</a></li>
                                    <li className="contact-point"><b>Resume</b>: <a href={this.resume} target="_blank" rel="noopener noreferrer">Click Here!</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr className="divide" />
                        <div className="gallery">
                            <Link to="/about" className="btn btn-primary btn-lg" role="button">About Me</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}