/**
 * @fileoverview Displays the new project tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import NavAdmin from './navadmin';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import projectService from '../../_common/services/project';
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
            title: '',
            heading: '',
            url: '',
            projectText: '',
            imgs: []
        }
    }
    /**
     * Passes the user input to the database for logging.
     */
    handlePublish = () => {
        projectService.createProject(this.state.title, this.state.heading, this.state.url, this.state.projectText, this.state.imgs)
            .then((data) => {
                console.log("SUCCESS: \n", data.body);
            })
            .catch((err) => {
                console.log(err);
            })
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
                                placeholder="Title"
                                aria-label="Title"
                                aria-describedby="basic-addon1"
                                value={this.state.title || ''}
                                onChange={(e) => this.setState({ title: e.target.value })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Heading"
                                aria-label="Heading"
                                aria-describedby="basic-addon1"
                                value={this.state.heading || ''}
                                onChange={(e) => this.setState({ heading: e.target.value })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Repository URL"
                                aria-label="Heading"
                                aria-describedby="basic-addon1"
                                value={this.state.url || ''}
                                onChange={(e) => this.setState({ url: e.target.value })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <textarea
                                required
                                className="form-control"
                                placeholder="Description"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                value={this.state.projectText || ''}
                                onChange={(e) => this.setState({ projectText: e.target.value })}
                            />
                        </div>
                        <div>
                            <FilePond
                                className="file-upload"
                                allowMultiple={true}
                                maxFiles={3}
                                onupdatefiles={(files) => {
                                    this.setState({ imgs: files.map(files => files.file) });
                                }} />
                        </div>
                    </form>
                    <button className="btn btn-secondary btn-lg btn-block" onClick={() => this.handlePublish()}>Submit</button>
                </div>
            </div>
        );
    }
}