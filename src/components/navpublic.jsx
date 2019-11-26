/**
 * @fileoverview Displays the central navigation bar and handles user login.
 * @author Daniel Bell
 */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import authService from '../_common/services/auth';
import '../_common/assets/css/navigation.css';
import '../_common/assets/css/general.css';

export default class NavPublic extends Component {
    constructor(props) {
        super(props)
        this.jwt = require('jsonwebtoken');
        this.statusMessages = React.createRef();
        this.userAccess = 1;
        this.state = {
            email: '',
            password: '',
            redirectPath: '',
            redirect: false,
            hidden: true
        }
    }
    /**
     * Processes the submitted user credentials and verifies identity.
     */
    handleSignIn = () => {
        authService.login(this.state.email, this.state.password)
            .then((response) => {
                this.jwt.verify(response.body.message, process.env.REACT_APP_SECRET, (err, data) => {
                    if (!err) {
                        // writes verified user credentials to a cookie
                        this.setCookie("token", response.body.message, 2);
                        // determines which user portal to redirect to
                        let path = '/';
                        this.userAccess = data.user.accesslevel;
                        switch (data.user.accesslevel) {
                            case '1': path = '/user'; break;
                            case '2': path = '/admin'; break;
                            default:
                                this.statusMessages.current.showError('Something went wrong. Please try again');
                                return;
                        }
                        // updates the user view
                        this.setState({
                            redirectPath: path,
                            redirect: true
                        });
                    }
                    else alert('Invalid Credentials. Please try again');
                });
            }).catch(() => alert('Something went wrong. Please try again'));
    }
    /**
     * Writes authenticated user date to a cookie.
     */
    setCookie(key, value, hours) {
        let date = new Date();
        let expires = date.setTime(date + (hours * 3600000));
        window.document.cookie = key + "=" + value + ";" + expires + ";path=/";
    }
    /**
     * Handles switching between the login and account request pages.
     */
    handleSwitch = () => {
        this.setState({
            redirect: true,
            redirectPath: '/register'
        });
    }

    render() {
        return (
            <div>
                {(this.state.redirectPath !== '') ? <Redirect to={this.state.redirectPath} /> : null}
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
                                <button className="nav-link" data-toggle="modal" data-target="#exampleModalCenter">Sign In</button>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* Sign In Modal */}
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Sign In</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Please enter your credentials below.</p>
                                <div className="login-fields">
                                    <div className="input-group mb-3">
                                        <input
                                            required
                                            type="email"
                                            className="form-control"
                                            placeholder="Email Address"
                                            aria-label="Email"
                                            aria-describedby="basic-addon1"
                                            value={this.state.email || ''}
                                            onChange={(e) => this.setState({ email: e.target.value })}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input
                                            required
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            aria-label="Password"
                                            aria-describedby="basic-addon1"
                                            value={this.state.password || ''}
                                            onChange={(e) => this.setState({ password: e.target.value })} />
                                    </div>
                                    <p hidden={this.state.hidden}>Need an account? Click <button className="redirect" data-dismiss="modal" onClick={() => { this.handleSwitch() }}>here</button>!</p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary btn-modal" data-dismiss="modal" onClick={() => { this.handleSignIn() }}>Sign In</button>
                                <button type="button" className="btn btn-secondary btn-modal" data-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}