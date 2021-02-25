'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Blogs', [
      {
        title: 'This is my blog',
        description: 'Just a blog about my stories.',
        userId: 1,
        dashboardId: 1,
      },
       {
        title: 'Blogging is fun!',
        description: 'I love blogging.',
        userId: 2,
        dashboardId: 2,
      }, 
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Blogs', {
    })
  }
};