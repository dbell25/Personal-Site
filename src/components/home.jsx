/**
 * @fileoverview Displays the home tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/home.css';
import '../assets/css/toolbar.css';

export default class Home extends Component {
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
                <div className="home-brand">
                    <h1 className="home-heading">Daniel J. Bell</h1>
                    <h5 className="home-subheading">Web Designer & <br/>Full Stack Software Engineer</h5>
                </div>
                <div className="home-footer">
                    Photo Location: Death Valley NP, USA
                </div>
            </div>
        );
    }
}