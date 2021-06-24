'use strict';
module.exports = (sequelize, DataTypes) => {
  const Imgcomment = sequelize.define('Imgcomment', {
     userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    }, 
    imgPostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Imgcomment.associate = function(models) {
  Imgcomment.belongsTo(models.Imgpost, {foreignKey: 'imgPostId'})
  Imgcomment.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Imgcomment;
};