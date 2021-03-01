'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    text: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, {foreignKey: 'userId'})
    Comment.belongsTo(models.Post, {foreignKey: 'postId'})
  };
  return Comment;
};