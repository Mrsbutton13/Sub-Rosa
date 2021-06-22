'use strict';
module.exports = (sequelize, DataTypes) => {
  const Textpost = sequelize.define('Textpost', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {});
  Textpost.associate = function(models) {
    Textpost.belongsTo(models.User, {foreignKey: 'userId'})
    Textpost.hasMany(models.Textcomment, {foreignKey: 'textPostId'})
  };
  return Textpost;
};