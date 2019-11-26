/**
 * @fileoverview Displays the edit blog post tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import NavAdmin from './navadmin';
import '../../_common/assets/css/general.css';

export default class PostEdit extends Component {
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
                    <h2>Edit Post</h2>
                    {this.state.view}
                </div>
            </div>
        );
    }
}