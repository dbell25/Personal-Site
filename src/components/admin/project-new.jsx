/**
 * @fileoverview Displays the new project tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import NavAdmin from './navadmin';
import '../../_common/assets/css/general.css';

export default class ProjectNew extends Component {
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
                    <h1>New Project</h1>
                    {this.state.view}
                </div>
            </div>
        );
    }
}