/**
 * @fileoverview Displays the admin dashboard.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import NavAdmin from './admin/navadmin';

export default class Admin extends Component {
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

    componentDidMount = () => {
        console.log(this.currentUser);
    }

    render() {
        return (
            <div>
                <NavAdmin />
                <div className="component">
                    <h2>Admin Dash</h2>
                    {this.state.view}
                </div>
            </div>
        );
    }
}