'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    backgroundImage: DataTypes.STRING,
    profileImage: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    dashboardId: DataTypes.INTEGER
  }, {});
  Blog.associate = function(models) {
    // associations can be defined here
  };
  return Blog;
};