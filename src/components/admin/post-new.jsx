/**
 * @fileoverview Displays the new blog post tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import NavAdmin from './navadmin';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import 'filepond/dist/filepond.min.css';
import '../../_common/assets/css/general.css';

/**
 * Registers plugins for FilePond
 */
registerPlugin(FilePondPluginImagePreview);

export default class PostNew extends Component {
    constructor(props) {
        super(props)
        this.exampleDB = {};
        this.state = {
            postTitle: '',
            postHeading: '',
            postText: '',
            thumbnail: '',
            images: []
        }
    }

    render() {
        return (
            <div>
                <NavAdmin />
                <div className="component">
                    <h2>Create Blog Post</h2>
                    <form className="editor">
                        <div className="form-group">
                            <input
                                required
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Title"
                                value={this.state.postTitle || ''}
                                onChange={(e) => this.setState({ postTitle: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <input
                                required
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Heading"
                                value={this.state.postHeading || ''}
                                onChange={(e) => this.setState({ postHeading: e.target.value })} />
                        </div>
                        <div>
                            <FilePond
                                labelIdle={'Drag & Drop a Thumbnail Image or <span class="filepond--label-action"> Browse </span>'}
                                onupdatefiles={(files) => {
                                    this.setState({ thumbnail: files.map(files => files.file) });
                                }} />
                        </div>
                        <div className="form-group">
                            <textarea
                                required
                                className="form-control"
                                placeholder="Project Description"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                value={this.state.postText || ''}
                                onChange={(e) => this.setState({ postText: e.target.value })}
                            />
                        </div>
                    </form>
                    <div className="btn-controls">
                        <button className="btn btn-secondary btn-control" onClick={() => this.handlePublish()}>Publish</button>
                    </div>
                </div>
            </div>
        );
    }
}