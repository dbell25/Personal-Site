/**
 * @fileoverview displays a user registration form.
 * @author Daniel Bell
 */
import React, { Component } from 'react';
import StatusMessages from '../_common/components/status-messages/status-messages';
import { Redirect } from 'react-router-dom';
import Navbar from './navbar';
import authService from '../_common/services/auth';
import '../_common/assets/css/navigation.css';

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.statusMessages = React.createRef();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            accesslevel: 1,
            redirect: false
        }
    }
    /**
     * Passes the user input to the API for verification and registration.
     */
    handleRegister = () => {
        authService.register(this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.confirmPassword, this.state.accesslevel)
            .then((response) => {
                if (response.statusCode === 201)
                    this.statusMessages.current.showSuccess("Registration Complete!");
                else
                    this.statusMessages.current.showError(response.body.message);
            })
            .catch(() => {
                this.statusMessages.current.showError('Something went wrong. Please try again.');
            });
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="component">
                    {(this.state.redirect) ? <Redirect to='/login' /> : null}
                    <StatusMessages ref={this.statusMessages}></StatusMessages>
                    <h2>New Account</h2>
                    <p><b>Please fill out the information below.</b></p>
                    <div className="input-fields">
                        <div className="input-group mb-3">
                            <input
                                required
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                                aria-label="FirstName"
                                aria-describedby="basic-addon1"
                                value={this.state.firstName || ''}
                                onChange={(e) => this.setState({ firstName: e.target.value })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                required
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                                aria-label="FirstName"
                                aria-describedby="basic-addon1"
                                value={this.state.lastName || ''}
                                onChange={(e) => this.setState({ lastName: e.target.value })}
                            />
                        </div>
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
                        <div className="input-group mb-3">
                            <input
                                required
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                aria-label="Password"
                                aria-describedby="basic-addon1"
                                value={this.state.confirmPassword || ''}
                                onChange={(e) => this.setState({ confirmPassword: e.target.value })} />
                        </div>
                    </div>
                    <p>Already have an account? Click <button className="redirect" onClick={() => { this.setState({ redirect: true }) }}>here</button>!</p>
                    <button type="button" className="btn" onClick={() => this.handleRegister()}>Register</button>
                </div>
            </div>
        )
    }
}