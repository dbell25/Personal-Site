/**
 * @fileoverview Displays the new project tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import NavAdmin from './navadmin';

import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

import '../../_common/assets/css/general.css';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

/**
 * Registers plugins for FilePond
 */
registerPlugin(FilePondPluginImagePreview);

export default class ProjectNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: <p>Nothing to Display Yet</p>,
            projectTitle: '',
            projectHeading: '',
            projectText: '',
            upload: []
        }
    }

    render() {
        return (
            <div>
                <NavAdmin />
                <div className="component">
                    <h2>Create Project</h2>
                    <form>
                        <div className="input-group mb-3">
                            <input
                                required
                                type="text"
                                className="form-control"
                                placeholder="Project Title"
                                aria-label="Title"
                                aria-describedby="basic-addon1"
                                value={this.state.projectTitle || ''}
                                onChange={(e) => this.setState({ projectTitle: e.target.value })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Project Heading"
                                aria-label="Heading"
                                aria-describedby="basic-addon1"
                                value={this.state.projectHeading || ''}
                                onChange={(e) => this.setState({ projectHeading: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                required
                                className="form-control"
                                placeholder="Project Description" 
                                id="exampleFormControlTextarea1" 
                                rows="3"
                                value={this.state.projectText || ''}
                                onChange={(e) => this.setState({ projectText: e.target.value })}
                            />
                        </div>
                        <div>
                            <FilePond
                                allowMultiple={true}
                                maxFiles={3}
                                onupdatefiles={(files) => {
                                    this.setState({ upload: files.map(files => files.file) });
                                }} />
                        </div>
                    </form>
                    <button className="btn btn-secondary btn-lg btn-block" onClick={() => console.log('FILES: ', this.state.upload)}>Submit</button>
                </div>
            </div>
        );
    }
}