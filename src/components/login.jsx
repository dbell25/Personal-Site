/**
 * @fileoverview Displays the login screen and passes data to the api for verification.
 * @author Daniel Bell
 */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import StatusMessages from '../_common/components/status-messages/status-messages';
import Navbar from './navbar';
import authService from '../_common/services/auth';
import '../_common/assets/css/login.css';
import '../_common/assets/css/navigation.css';

const jwt = require('jsonwebtoken');

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.statusMessages = React.createRef();
        this.userAccess = 1;
        this.state = {
            email: '',
            password: '',
            redirect: false,
            loginRedirectPath: ''
        }
    }
    /**
     * Processes the submitted user credentials and verifies identity.
     */
    handleSignIn = () => {
        authService.login(this.state.email, this.state.password)
            .then((response) => {
                jwt.verify(response.body.message, process.env.REACT_APP_SECRET, (err, data) => {
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
                            loginRedirectPath: path,
                            redirect: true
                        });
                    }
                    else this.statusMessages.current.showError('Invalid Credentials. Please try again');
                });
            }).catch(() => this.statusMessages.current.showError('Something went wrong. Please try again'));
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
            loginRedirectPath: '/register'
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="component">
                    {(this.state.loginRedirectPath !== '') ? <Redirect to='/' /> : null}
                    <StatusMessages ref={this.statusMessages}></StatusMessages>
                    <h2>User Login</h2>
                    <p>Please enter your credentials below.</p>
                    <div className="input-fields">
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
                        <p>Need an account? Click <button className="redirect" onClick={() => { this.handleSwitch() }}>here</button>!</p>
                    </div>
                    <button className="btn" onClick={this.handleSignIn}>Sign In</button>
                    {(this.state.redirect) ? <Redirect to={{
                        pathname: this.state.loginRedirectPath,
                        state: {
                            access: this.userAccess,
                            email: this.state.email
                        }
                    }} /> : null}
                </div>
            </div>
        );
    }
}