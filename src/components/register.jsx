/**
 * @fileoverview displays a user registration form.
 * @author Daniel Bell
 */
import React, { Component } from 'react';
import Navbar from './navbar';

export default class Register extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="component">
                    <h2>New Account</h2>
                    <p><b>Please fill out the information below.</b></p>
                </div>
            </div>
        )
    }
}