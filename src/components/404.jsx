/**
 * @fileoverview Displays the 404 data missing tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ErrorIcon from '@material-ui/icons/Error';
import NavPublic from './navpublic';
import '../_common/assets/css/general.css';

export default class Missing extends Component {
    render() {
        return (
            <div className="bad-url">
                <NavPublic />
                <div className="component">
                    <h2 className="not-found">Error 404<br /><ErrorIcon id="not-found-icon"/></h2>
                    <p id="not-found-text">The page you are trying to access cannot be found.<br />Please click the button below to return to the home screen</p>
                    <Link to="/" type="button" className="btn btn-primary">Home</Link>
                </div>
            </div>
        );
    }
}