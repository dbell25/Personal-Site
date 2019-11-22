/**
 * @fileoverview Guard that checks for standard valid credentia;s.
 * @author Daniel Bell
 */
import AuthService from '../services/auth';
const jwt = require('jsonwebtoken');

class UserAuthGuard {
    shouldRoute() {
        return new Promise((resolve, reject) => {
            AuthService.readCookie()
                .then((token) => {
                    jwt.verify(token, process.env.REACT_APP_SECRET, function (err, data) {
                        if (!err && data.user.accesslevel === '1') {
                            resolve(true);
                        }
                        reject(false);
                    });
                })
                .catch((err) => {
                    console.log(err);
                    reject(false);
                });
        });
    }
}

export default new UserAuthGuard();