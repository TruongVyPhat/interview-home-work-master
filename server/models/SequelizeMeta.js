/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SequelizeMeta', {
    'name': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null",
      primaryKey: true
    }
  }, {
    tableName: 'SequelizeMeta'
  });
};
