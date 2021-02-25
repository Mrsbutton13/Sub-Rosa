'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dashboard = sequelize.define('Dashboard', {
    userId: DataTypes.INTEGER
  }, {});
  Dashboard.associate = function(models) {
    Dashboard.belongsTo(models.User, {foreignKey: 'userId'})
    Dashboard.hasMany(models.Blog, {foreignKey: 'dashboardId'})
    Dashboard.hasMany(models.Post, {foreignKey: 'dashboardId'})
  };
  return Dashboard;
};