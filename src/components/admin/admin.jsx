/**
 * @fileoverview Displays the admin dashboard.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import NavAdmin from './navadmin';

export default class Admin extends Component {
    constructor(props) {
        super(props)
        this.statusMessages = React.createRef();
        this.currentUser = this.props.location.state;
        this.key = 0;
        this.state = {
            loggedIn: true
        }
    }

    render() {
        return (
            <div>
                <NavAdmin />
                <div className="component">
                    <div className="jumbotron">
                        <h1 className="display-4">Admin Dash</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    </div>
                </div>
            </div>
        );
    }
}