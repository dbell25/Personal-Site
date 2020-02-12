/**
 * @fileoverview Displays the 404 data missing tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ErrorIcon from '@material-ui/icons/Error';
import '../assets/css/general.css';

export default class Missing extends Component {
    render() {
        return (
            <div className="error-404">
                <h2 className="error-404-title">Error 404<br /><ErrorIcon id="error-404-icon" /></h2>
                <p className="error-404-text">The page you are trying to access cannot be found.<br />Please click the button below to return to the home screen</p>
                <Link to="/" type="button" className="btn btn-outline-light error-404-button">Home</Link>
            </div>
        );
    }
}