const Post = require('./Post');
const db = require('../../models/index');
const sequelize = db.sequelize;
const { QueryTypes } = require('sequelize');
const CONSTANTS = require('../../helpers/constants');

exports.get_all_posts = (page) => {
    let sql = `select p.*, us.name, us.avatar, count(cm.id) as num from public."Post" p join public."User" us on us.id = p.created_by
                left join public."Comment" cm on cm.post_id = p.id group by p.id, us.name, us.avatar order by created_at desc`;
    if (page){
        const offset = (page - 1) * CONSTANTS.page_limit;
        sql += ` LIMIT ${CONSTANTS.page_limit} OFFSET ${offset}`;
    }
    return sequelize.query(sql, { 
        type: QueryTypes.SELECT
    });
}

exports.get_post = (id) => {
    const sql = `select p.*, us.name, us.avatar, count(cm.id) as num from public."Post" p join public."User" us on us.id = p.created_by left join public."Comment" cm on
                cm.post_id = p.id where p.id = ? group by p.id, us.name, us.avatar`;
    return sequelize.query(sql, {
        replacements: [id],
        type: QueryTypes.SELECT
    });
}

exports.get_all_title = () => {
    const sql = `select id, title from public."Post"`;
    return sequelize.query(sql, {
        type: QueryTypes.SELECT
    });
}

exports.get_posts_by_keyword = (keyword) => {
    const sql = `select p.*, us.name from public."Post" p join public."User" us on us.id = p.created_by LOWER(replace((select convertTVkdau(title)),' ','')) like ?`;
    return sequelize.query(sql, {
        replacements: [keyword],
        type: QueryTypes.SELECT
    });
}

exports.create_post = (keyword) => {
    const sql = `INSERT`;
    return sequelize.query(sql, {
        replacements: [keyword],
        type: QueryTypes.INSERT
    });
}