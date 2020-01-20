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
    createProject(title, heading, url, text, images) {
        // parses the image files into form data.
        let files = [];
        for(let i = 0; i < images.length; i++){
            let img = new FormData();
            img.append(`${title}-img-${i+1}`, images[i]);
            files.push(img);
        }

        // makes the request to the API.
        return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                url: `${this.controllerUrl}/create`,
                headers: {},
                json: true,
                body: {
                    title: title,
                    heading: heading,
                    url: url,
                    text: text,
                    images: files
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