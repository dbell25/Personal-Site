/**
 * @fileoverview Displays the central navigation bar.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import '../_common/assets/css/navigation.css';
import HomeIcon from '@material-ui/icons/Home';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="/"><HomeIcon /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Sign In</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}