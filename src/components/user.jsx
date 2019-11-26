/**
 * @fileoverview Displays user dashboard.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import NavPublic from './navpublic';

export default class User extends Component {
    constructor(props) {
        super(props)
        this.statusMessages = React.createRef();
        this.currentUser = this.props.location.state;
        this.key = 0;
        this.state = {
            view: <p>Nothing To Display Yet</p>,
            loggedIn: true
        }
    }

    render() {
        return (
            <div>
                <NavPublic />
                <div className="component">
                    <h2>User Dash</h2>
                    {this.state.view}
                </div>
            </div>
        );
    }
}