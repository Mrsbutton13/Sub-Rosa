'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Dashboards', [
      {
        userId: 1,
      },
      {
        userId: 2,
      },
      {
        userId: 3,
      },
      {
        userId: 4,
      },
      {
        userId: 5,
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Dashboards')
  }
};
