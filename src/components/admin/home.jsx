/**
 * @fileoverview Displays home tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import NavAdmin from './navadmin';

export default class EditHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: <p>Nothing to Display Yet</p>
        }
    }

    render() {
        return (
            <div>
                <NavAdmin />
                <div className="component">
                    <h1>Edit Home</h1>
                    {this.state.view}
                </div>
            </div>
        );
    }
}