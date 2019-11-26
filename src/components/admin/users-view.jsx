/**
 * @fileoverview Displays the tab for viewing all present users.
 * @author Daniel Bell
 */
import React, { Component } from 'react';
import { DeleteForever } from '@material-ui/icons';
import NavAdmin from './navadmin';
import authService from '../../_common/services/auth';
import '../../_common/assets/css/tables.css';

export default class UsersView extends Component {
    constructor(props) {
        super(props)
        this.types = ['User', 'Admin'];
        this.choppingBlock = '';
        this.allUsers = [];
        this.state = {
            view: null
        }
    }
    /**
     * Returns a JSON object of all active users.
     */
    componentDidMount = () => {
        authService.getAllUsers()
            .then((data) => {
                this.allUsers = data.body;
                this.buildTable();
            })
            .catch((err) => console.log(err));
    }
    /**
     * Handles the deletion of users from the database after being cleared by the modal.
     */
    handleDelete = () => {
        if(this.choppingBlock.Email !== "djbell216@gmail.com" || this.choppingBlock.UserID !== 1){
            authService.removeUser(this.choppingBlock)
            .then(() => {
                this.componentDidMount();
            })
            .catch(() => console.log("User Removal Error"));
        }
        else alert("Could Not Remove User");
    }
    /**
     * Constructs a table out of the parsed JSON data.
     */
    buildTable = () => {
        let users = [];
        this.allUsers.forEach((user, index) => {
            if (user.AccessLevel <= 3) {
                users.push(
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.FirstName}</td>
                        <td>{user.LastName}</td>
                        <td>{user.Email}</td>
                        <td>{this.types[user.AccessLevel - 1]}</td>
                        <td><DeleteForever data-toggle="modal" data-target="#confirmModal" onClick={() => this.choppingBlock = user} /></td>
                    </tr>
                );
            }
        });
        this.setState({
            view:
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Account Type</th>
                            <th scope="col">Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users}
                    </tbody>
                </table>
        });
    }

    render() {
        return (
            <div>
                <NavAdmin />
                <div className="table-responsive" id="users">
                    {this.state.view}
                </div>
                <div className="modal" id="confirmModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Deletion</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this user?<br />Once this account has been deleted it <b>cannot</b> be recovered.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.handleDelete()}>Delete</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}