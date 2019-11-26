/**
 * @fileoverview Displays the administrator navigation bar.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import authService from '../../_common/services/auth';
import '../../_common/assets/css/navigation.css';

export default class NavAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: true
        }
    }
    /**
     * Logs the user out and deletes the user's token from the list of cookies.
     */
    handleLogout = () => {
        authService.deleteCookie("token");
        this.setState({ loggedIn: false });
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    {(!this.state.loggedIn) ? <Redirect to='/' /> : null}
                    <a className="navbar-brand" href="/admin"><HomeIcon /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Users</button>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/users-new">New User</a>
                                    <a className="dropdown-item" href="/users-view">View All</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Projects</button>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/project-new">New Project</a>
                                    <a className="dropdown-item" href="/project-edit">Edit Project</a>
                                    <a className="dropdown-item" href="/project-view">View All</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</button>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/post-new">New Post</a>
                                    <a className="dropdown-item" href="/post-edit">Edit Post</a>
                                    <a className="dropdown-item" href="/post-view">View All</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/edit-about">Edit About</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item" data-toggle="modal" data-target="#logoutModal">
                                <button className="nav-link">Log Out</button>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Logout</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to logout?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary btn-modal" data-dismiss="modal" onClick={() => this.handleLogout()}>Logout</button>
                                <button type="button" className="btn btn-secondary btn-modal" data-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}