'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    body: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User, {foreignKey: 'userId'})
    Post.hasMany(models.Comment, {foreignKey: 'postId'})
  };
  return Post;
};