/**
 * @fileoverview Displays the login screen and passes data to the api for verification.
 * @author Daniel Bell
 */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from './navbar';
import '../_common/assets/css/login.css';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            redirect: false
        }
    }
    /**
     * Processes the submitted user credentials and verifies identity.
     */
    handleSignIn = () => {
        console.log(this.state.email, this.state.password);
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="component">
                    {(this.state.redirect) ? <Redirect to='/register' /> : null}
                    <h2>User Login</h2>
                    <p>Please enter your credentials below.</p>
                    <div className="input-fields">
                        <div className="input-group mb-3">
                            <input
                                required
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                                aria-label="Username"
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
                        <p>Need an account? Click <button className="redirect" onClick={() => { this.setState({ redirect: true}) }}>here</button>!</p>
                    </div>
                    <button type="button" className="btn" onClick={this.handleSignIn}>Sign In</button>
                </div>
            </div>
        );
    }
}