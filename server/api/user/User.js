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
    }
  }, {
    tableName: 'User'
  });
};
