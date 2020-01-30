/**
 * @fileoverview Displays the public about tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import NavPublic from './navpublic';
import '../_common/assets/css/about.css'

export default class About extends Component {
    constructor(props) {
        super(props)
        this.profile = require('../_common/assets/img/profile2.jpg');
        this.state = {
            view: <p>Nothing to Display Yet</p>
        }
    }

    render() {
        return (
            <div className="main">
                <NavPublic />
                <div className="component">
                    <div className="about">
                        <div className="profile-container">
                            <img className="profile-image" src={this.profile} alt="404" />
                            <h2 className="greeting">About Me</h2>
                            <hr className="about-divide" />
                            <p className="about-body">
                                Hello World!
                                My name is Daniel Bell. In 2019, I received my bachelors degree in Computer Science from Kansas State University. Ever since,
                                I have been working as a Software Engineer in the renewable energy sector in addition to being a freelance developer.
                            </p>
                            <p className="about-body">
                                My educational
                                background is primariliy in creating C# based applications for Windows. That said, my best work is in creating simple, clean,
                                and reliable websites from the ground up. This includes, database development, server administration, web hosting, UI and UX
                                development, and cyber security. Most of the applications I've built use one or more of the following tools, languages, and
                                frameworks: React, NodeJs, HTML5/CSS, JavaScript, SQL/mySQL, C/C++/C#, and Amazon AWS.
                            </p>
                            <p className="about-body">
                                I'm here to help provide you and your company the quality online experience that your customers want. Interested? Contact me any
                                time using the button below.
                            </p>
                        </div>
                        <Link to='/' className="btn btn-primary btn-lg" role="button">Contact Info</Link>
                    </div>
                </div >
            </div >
        );
    }
}