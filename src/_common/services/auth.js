/**
 * @fileoverview Service setting up HTTP requests for the API.
 * @author Daniel Bell
 */
import request from 'request';

class authService {
    constructor() {
        this.controllerUrl = process.env.REACT_APP_API_URL + '/auth';
    }
    /**
     * Reads the cookie stored in the browser session to identify the user.
     */
    readCookie() {
        return new Promise((resolve, reject) => {
            let cookie = decodeURIComponent(document.cookie);
            if (cookie !== undefined && cookie !== null) {
                let bits = cookie.split('=');
                resolve(bits[1]);
            }
            else reject("");
        });
    }
    /**
     * Deletes a specified cookie from the local browser session.
     */
    deleteCookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    /**
     * Calls the API and registers a new user object in the database.
     */
    register(firstName, lastName, email, password, confirmPassword, accessLevel) {
        return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                url: `${this.controllerUrl}/register`,
                headers: {},
                json: true,
                body: {
                    firstName: firstName,
                    lastName: lastName,
                    userName: userName,
                    email: email,
                    backupEmail: backupEmail,
                    phone: phone,
                    password: password,
                    confirmPassword: confirmPassword,
                    accessLevel: accessLevel
                }
            }
            request(options, (err, response) => {
                if (err || response.statusCode >= 500) return reject(err || response);
                resolve(response);
            });
        });
    }
    /**
     * Calls the API and registers a new object in the database.
     */
    login(email, password) {
        return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                url: `${this.controllerUrl}/login`,
                headers: {},
                json: true,
                body: {
                    email: email,
                    password: password
                }
            }
            request(options, (err, response) => {
                if (err || response.statusCode >= 500) return reject(err || response);
                resolve(response);
            });
        });
    }
}

export default new authService();