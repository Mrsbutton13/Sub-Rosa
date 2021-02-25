'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(30)
      },
      description: {
        type: Sequelize.TEXT
      },
      backgroundImage: {
        type: Sequelize.STRING
      },
      profileImage: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Users'},
      },
      dashboardId: {
        type: Sequelize.INTEGER,
        references: {model: 'Dashboards'},
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Blogs');
  }
};