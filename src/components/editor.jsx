/**
 * @fileoverview Displays a text editor.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import '../_common/assets/css/editor.css';

export default class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: ''
        }
    }

    render() {
        return (
            <form className="editor">
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Title</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Subheading</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="subheading" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <div className="form-group">
                    <label>Thumnail Picture</label>
                    <input type="file" className="form-control-file" />
                </div>
                <button className="btn btn-primary">Publish</button>
            </form>
        );
    }
}



