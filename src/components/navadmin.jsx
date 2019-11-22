/**
 * @fileoverview Displays the central navigation bar.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import authService from '../_common/services/auth';
import '../_common/assets/css/navigation.css';

export default class NavAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: true
        }
    }
    /**
     * Logs the user out and deletes the user's token from the list of cookies.
     */
    handleLogout = () => {
        authService.deleteCookie("token");
        this.setState({ loggedIn: false });
    }
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                {(!this.state.loggedIn) ? <Redirect to='/login' /> : null}
                <a className="navbar-brand" href="/"><HomeIcon /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">Edit Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">Edit Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Edit About</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => this.handleLogout()}>Log Out</button>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}