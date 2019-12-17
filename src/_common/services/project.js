/**
 * @fileoverview Service setting up HTTP requests for the API.
 * @author Daniel Bell
 */
import request from 'request';

class projectService {
    constructor() {
        this.controllerUrl = process.env.REACT_APP_API_URL + '/project';
    }
    /**
     * Calls the API and registers a new user object in the database.
     */
    createProject(firstName, lastName, email, password, confirmPassword, accesslevel) {
        return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                url: `${this.controllerUrl}/create`,
                headers: {},
                json: true,
                body: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword,
                    accesslevel: accesslevel
                }
            }
            request(options, (err, response) => {
                if (err || response.statusCode >= 500) return reject(err || response);
                resolve(response);
            });
        });
    }
}

export default new projectService();