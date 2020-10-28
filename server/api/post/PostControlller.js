const service = require('./PostService');
const CONSTANT = require('../../helpers/constants');
const httpStatus = require('http-status-codes');
const responseJS = require('../../helpers/json-generator');
let status = httpStatus.INTERNAL_SERVER_ERROR;

exports.get_all_posts = (req, res) => {
    const page = req.query.page ? req.query.page : null;
    service.get_all_posts(page)
    .then(posts => {       
        if (posts.length > 0){
            status = httpStatus.OK; 
            res.status(status).json(responseJS.Json(status, posts));
        } else {
            status = httpStatus.NOT_FOUND;
            res.status(status).json(responseJS.mess_Json(status));
        }
    }).catch(error => {
        res.status(status).json(error);
    });
}

exports.get_all_titles = (req, res) => {

    service.get_all_title()
    .then(posts => {       
        if (posts.length > 0){
            status = httpStatus.OK; 
            res.status(status).json(responseJS.Json(status, posts));
        } else {
            status = httpStatus.NOT_FOUND;
            res.status(status).json(responseJS.mess_Json(status));
        }
    }).catch(error => {
        res.status(status).json(error);
    });
}


exports.get_post = (req, res) => {
    const id = req.params.id ? req.params.id : null;

    if (!id) {
        status = httpStatus.BAD_REQUEST;
        res.status(status).json(responseJS.mess_Json(status));
        return;
    }

    service.get_post(id)
    .then(posts => {       
        if (posts.length > 0){
            status = httpStatus.OK; 
            res.status(status).json(responseJS.Json(status, posts[0]));
        } else {
            status = httpStatus.NOT_FOUND;
            res.status(status).json(responseJS.mess_Json(status));
        }
    }).catch(error => {
        res.status(status).json(error);
    });
}