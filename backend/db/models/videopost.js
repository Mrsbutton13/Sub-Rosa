'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vidoepost = sequelize.define('Videopost', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    }, 
    video: {
      type: DataTypes.TEXT
    } 
  }, {});
  Vidoepost.associate = function(models) {
    Vidoepost.belongsTo(models.User, {foreignKey: 'userId'})
    Vidoepost.hasMany(models.Videocomment, {foreignKey: 'videoPostId'})
  };
  return Vidoepost;
};