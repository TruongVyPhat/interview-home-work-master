const User = require('./User');
const db = require('../../models/index');
const sequelize = db.sequelize;
const { QueryTypes } = require('sequelize');

exports.get_all_posts = (page) => {
    let offset = null;
    let sql = 'Select us.*, ro.title as role from public.User us JOIN public.role ro on ro.id = us.role_id order by us.id';
    if (page){
        offset = (page - 1) * CONSTANTS.PAGE_SIZE;
        sql += ` LIMIT ${CONSTANTS.PAGE_SIZE} OFFSET ${offset}`;
    }
    return sequelize.query(sql, { 
        type: QueryTypes.SELECT
    });
}