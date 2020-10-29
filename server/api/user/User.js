/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    'id': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      primaryKey: true
    },
    'name': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'password': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'avatar': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'access_token': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'refres_token': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'User'
  });
};
