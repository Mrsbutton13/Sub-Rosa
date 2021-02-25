'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    textTitle: DataTypes.STRING,
    textBody: DataTypes.TEXT,
    video: DataTypes.STRING,
    videoText: DataTypes.STRING,
    link: DataTypes.STRING,
    linkText: DataTypes.TEXT,
    imgSrc: DataTypes.STRING,
    imgText: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    blogId: DataTypes.INTEGER,
    dashboardId: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.Dashboard, {foreignKey: 'dashboardId'})
    Post.belongsTo(models.Blog, {foreignKey: 'blogId'})
    Post.belongsTo(models.User, {foreignKey: 'userId'})
    Post.hasMany(models.Comment, {foreignKey: 'postId'})
  };
  return Post;
};