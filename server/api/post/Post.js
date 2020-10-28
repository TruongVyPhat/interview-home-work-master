/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Post', {
    'id': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      primaryKey: true
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
    'content': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'title': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'Post'
  });
};
