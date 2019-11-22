/**
 * @fileoverview Guard for checking valid admin level credentials.
 * @author Daniel Bell
 */
import AuthService from '../services/auth';
const jwt = require('jsonwebtoken');

class AdminAuthGuard {
    shouldRoute() {
        return new Promise((resolve, reject) => {
            AuthService.readCookie()
                .then((token) => {
                    jwt.verify(token, process.env.REACT_APP_SECRET, function (err, data) {
                        if (!err && data.user.accesslevel === "2") {
                            resolve(true);
                        }
                        reject(false);
                    });
                })
                .catch(() => reject(false));
        });
    }
}

export default new AdminAuthGuard();