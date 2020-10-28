/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Comment', {
    'id': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      primaryKey: true
    },
    'content': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'created_at': {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "null"
    },
    'created_by': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null"
    },
    'post_id': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'Comment'
  });
};
