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
    // associations can be defined here
  };
  return Post;
};