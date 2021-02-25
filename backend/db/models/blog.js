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
    const columnMapping = {
      through: 'Follow',
      otherKey: 'userId',
      foreignKey: 'blogId'
    }
 
    Blog.belongsToMany(models.User, columnMapping)
    Blog.belongsTo(models.Dashboard, {foreignKey: 'dashboardId'})
    Blog.hasMany(models.Post, {foreignKey: 'blogId'})
  };
  return Blog;
};