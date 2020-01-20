/**
 * @fileoverview Displays the about tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import NavAdmin from './navadmin';

export default class EditAbout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: <p>Nothing to Display Yet</p>
        }
    }

    render() {
        return (
            <div className="main">
                <NavAdmin />
                <div className="component">
                    <h2>Edit About</h2>
                    {this.state.view}
                </div>
            </div>
        );
    }
}