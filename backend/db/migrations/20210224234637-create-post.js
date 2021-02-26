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
        type: Sequelize.STRING(200)
      },
      textBody: {
        type: Sequelize.TEXT
      },
      video: {
        type: Sequelize.STRING
      },
      videoText: {
        type: Sequelize.STRING(200)
      },
      link: {
        type: Sequelize.STRING
      },
      linkText: {
        type: Sequelize.TEXT(200)
      },
      imgSrc: {
        type: Sequelize.STRING
      },
      imgText: {
        type: Sequelize.TEXT
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Users'},
      },
      blogId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Blogs'},
      },
      dashboardId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Dashboards'},
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
    return queryInterface.dropTable('Posts');
  }
};