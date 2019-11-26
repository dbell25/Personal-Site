/**
 * @fileoverview Displays projects tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import NavPublic from './navpublic';

export default class Projects extends Component {
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
                    <h1>Projects</h1>
                    {this.state.view}
                </div>
            </div>
        );
    }
}