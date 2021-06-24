'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    followId: {
      type: DataTypes.INTEGER,
      allowNull: false
    } 
  }, {});
  Follow.associate = function(models) {
    Follow.belongsTo(models.User, {foreignKey: 'followId'})
    Follow.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Follow;
};