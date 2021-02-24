'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      textTitle: {
        type: Sequelize.STRING
      },
      textBody: {
        type: Sequelize.TEXT
      },
      video: {
        type: Sequelize.STRING
      },
      videoText: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      linkText: {
        type: Sequelize.TEXT
      },
      imgSrc: {
        type: Sequelize.STRING
      },
      imgText: {
        type: Sequelize.TEXT
      },
      userId: {
        type: Sequelize.INTEGER
      },
      blogId: {
        type: Sequelize.INTEGER
      },
      dashboardId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts');
  }
};