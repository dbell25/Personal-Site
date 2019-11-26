/**
 * @fileoverview Displays home tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react';
import NavAdmin from './navadmin';
import '../../_common/assets/css/general.css';

export default class EditProjects extends Component {
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
                    <h1>Edit Projects</h1>
                    {this.state.view}
                </div>
            </div>
        );
    }
}