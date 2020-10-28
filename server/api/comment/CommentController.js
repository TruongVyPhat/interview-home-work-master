const service = require('./CommentService');
const CONSTANT = require('../../helpers/constants');
const httpStatus = require('http-status-codes');
const responseJS = require('../../helpers/json-generator');
let status = httpStatus.INTERNAL_SERVER_ERROR;

exports.get_all_comments = (req, res) => {
    const post_id = req.query.post_id ? req.query.post_id : null;
    const page = req.query.page ? req.query.page : CONSTANT.default_page;

    if (!post_id) {
        status = httpStatus.BAD_REQUEST;
        res.status(status).json(responseJS.mess_Json(status));
        return;
    }

    service.get_all_comments(post_id, page)
    .then(comments => {       
        if (comments.length > 0){
            status = httpStatus.OK; 
            res.status(status).json(responseJS.Json(status, comments));
        } else {
            status = httpStatus.NOT_FOUND;
            res.status(status).json(responseJS.mess_Json(status));
        }
    }).catch(error => {
        res.status(status).json(error);
    });
}

exports.get_lasted = (req, res) => {
    const post_id = req.query.post_id ? req.query.post_id : null;

    if (!post_id) {
        status = httpStatus.BAD_REQUEST;
        res.status(status).json(responseJS.mess_Json(status));
        return;
    }

    service.get_lasted(post_id)
    .then(comments => {       
        if (comments.length > 0){
            status = httpStatus.OK; 
            res.status(status).json(responseJS.Json(status, comments));
        } else {
            status = httpStatus.NOT_FOUND;
            res.status(status).json(responseJS.mess_Json(status));
        }
    }).catch(error => {
        res.status(status).json(error);
    });
}