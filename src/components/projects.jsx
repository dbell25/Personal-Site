/**
 * @fileoverview Displays projects tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import Navbar from './navbar';

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
                <Navbar />
                <div className="component">
                    <h1>Projects</h1>
                    {this.state.view}
                </div>
            </div>
        );
    }
}