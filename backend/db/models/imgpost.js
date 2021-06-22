'use strict';
module.exports = (sequelize, DataTypes) => {
  const Imgpost = sequelize.define('Imgpost', {
     userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    }, 
    img: {
      type: DataTypes.TEXT
    }  
  }, {});
  Imgpost.associate = function(models) {
    Imgpost.belongsTo(models.User, {foreignKey: 'userId'})
    Imgpost.hasMany(models.Imgcomment, {foreignKey: 'imgPostId'})
  };
  return Imgpost;
};