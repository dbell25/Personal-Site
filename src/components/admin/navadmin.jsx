/**
 * @fileoverview Displays the administrator navigation bar.
 * @author Daniel Bell
 */
import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
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
                    <Link to="/admin" className="navbar-brand" ><HomeIcon /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Create</button>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link to="/users-new" className="dropdown-item" >New User</Link>
                                    <Link to="/project-new" className="dropdown-item" >New Project</Link>
                                    <Link to="/post-new" className="dropdown-item" >New Post</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Edit</button>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link to="/edit-home" className="dropdown-item" >Edit Home</Link>
                                    <Link to="/edit-about" className="dropdown-item" >Edit About</Link>
                                    <Link to="/project-edit" className="dropdown-item" >Edit Project</Link>
                                    <Link to="/post-edit" className="dropdown-item" >Edit Post</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">View</button>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link to="/users-view" className="dropdown-item" >View Users</Link>
                                    <Link to="/project-view" className="dropdown-item" >View Projects</Link>
                                    <Link to="/post-view" className="dropdown-item" >View Posts</Link>
                                </div>
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