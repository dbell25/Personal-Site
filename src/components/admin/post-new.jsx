/**
 * @fileoverview Displays the new blog post tab.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import NavAdmin from './navadmin';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';

import { convertToHTML } from 'draft-convert';
import renderHTML from 'react-render-html';

import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

import 'draft-js/dist/Draft.css'
import '../../_common/assets/css/general.css';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
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
            thumbnail: '',
            images: [],
            editorState: EditorState.createEmpty(),
            inProgress: false,
            showPost: ''
        }
    }

    onEditorStateChange = (editorState) => {
        this.setState({ editorState: editorState });
    };

    /**
     * Adds the newly constucted blog post to the database.
     */
    handlePublish = () => {
        // creates the blog post
        const post = {
            title: this.state.postTitle,
            heading: this.state.postHeading,
            thumbnail: this.state.thumbnail,
            content: convertToHTML(this.state.editorState.getCurrentContent()),
            createdAt: new Date().valueOf()
        }
        // saves to db
        this.exampleDB = post;
        console.log(this.exampleDB);
        this.setState({ inProgress: true });
    }

    /**
     * TEST METHOD - shows the newly created blog post
     */
    handleShow = () => {
        const post = this.exampleDB; // load form db
        this.setState({
            showPost:
                <div className='article-container'>
                    {renderHTML(post.content)}
                </div>
        });
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
                        <Editor
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            editorState={this.state.editorState}
                            onEditorStateChange={this.onEditorStateChange}
                        />
                    </form>
                    <br />
                    <div className="btn-controls">
                        <button className="btn btn-secondary btn-control" onClick={() => this.handlePublish()}>Publish</button>
                        <button className="btn btn-secondary btn-control" disabled={!this.state.inProgress} onClick={() => this.handleShow()}>Show Saved</button>
                    </div>
                </div>
                <div>
                    {this.state.showPost}
                </div>
            </div>
        );
    }
}