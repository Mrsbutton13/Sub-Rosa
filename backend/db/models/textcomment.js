'use strict';
module.exports = (sequelize, DataTypes) => {
  const Textcomment = sequelize.define('Textcomment', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    }, 
    textPostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Textcomment.associate = function(models) {
    Textcomment.belongsTo(models.Textpost, {foreignKey: 'textPostId'})
    Textcomment.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Textcomment;
};