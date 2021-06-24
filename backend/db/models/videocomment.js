'use strict';
module.exports = (sequelize, DataTypes) => {
  const Videocomment = sequelize.define('Videocomment', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    }, 
    videoPostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Videocomment.associate = function(models) {
    Videocomment.belongsTo(models.Videopost, {foreignKey: 'videoPostId'})
    Videocomment.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Videocomment;
};