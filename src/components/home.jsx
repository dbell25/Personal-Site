/**
 * @fileoverview Displays the public home tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import NavPublic from './navpublic';

export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: <p>Nothing to Display Yet</p>
        }
    }

    render() {
        return (
            <div>
                <NavPublic />
                <div className="component">
                    <h2>Home</h2>
                    {this.state.view}
                </div>
            </div>
        );
    }
}