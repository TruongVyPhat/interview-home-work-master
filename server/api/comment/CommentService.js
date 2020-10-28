const Comment = require('./Comment');
const db = require('../../models/index');
const CONSTANTS = require('../../helpers/constants');
const sequelize = db.sequelize;
const { QueryTypes } = require('sequelize');

exports.get_all_comments = (post_id, page) => {
    let sql = `select cm.*, us.name from public."Post" p join public."Comment" cm on cm.post_id = p.id join public."User" us 
                on us.id = cm.created_by where post_id = ${post_id} order by created_at DESC`;
    if (page){
        const offset = CONSTANTS.default_offset_comment;
        sql += ` LIMIT ${CONSTANTS.page_limit} OFFSET ${offset}`;
    }
    return sequelize.query(sql, { 
        type: QueryTypes.SELECT
    });
}