'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dashboard = sequelize.define('Dashboard', {
    userId: DataTypes.INTEGER
  }, {});
  Dashboard.associate = function(models) {
    // associations can be defined here
  };
  return Dashboard;
};