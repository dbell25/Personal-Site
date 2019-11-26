/**
 * @fileoverview Displays the new blog post tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import NavAdmin from './navadmin';
import Editor from '../editor';
import '../../_common/assets/css/general.css';

export default class PostNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: <Editor />
        }
    }

    render() {
        return (
            <div>
                <NavAdmin />
                <div className="component">
                    <h2>New Post</h2>
                    {this.state.view}
                </div>
            </div>
        );
    }
}