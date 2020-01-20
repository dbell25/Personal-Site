/**
 * @fileoverview Displays the view project tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import NavAdmin from './navadmin';
import '../../_common/assets/css/general.css';

export default class ProjectView extends Component {
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
                    <h2>View All Projects</h2>
                    {this.state.view}
                </div>
            </div>
        );
    }
}