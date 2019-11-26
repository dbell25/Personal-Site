/**
 * @fileoverview Displays the banner at the top of each page.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import '../_common/assets/css/navigation.css';

export default class Banner extends Component {
    render() {
        return (
            <div>
                <div className="banner">
                    <h2>Daniel J. Bell</h2>
                    <p className="subheading">Software, Photography, Etc.</p>
                </div>
            </div>
        );
    }
}