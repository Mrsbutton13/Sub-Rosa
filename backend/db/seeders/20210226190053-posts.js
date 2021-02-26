'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
        textTitle: 'So this happened last night',
        textBody: 'Last night I was going to the kitchen as a saw a little girl sitting under our dinning room table.',
        userId: 1,
        blogId: 1,
        dashboardId:1
      },
      {
        link: 'https://en.wikipedia.org/wiki/Scary_Stories_to_Tell_in_the_Dark',
        linkText: 'Here is a link for scary stories to tell in the dark if anyone likes to read them',
        userId: 1,
        blogId: 1,
        dashboardId: 1
      },
  
      
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts')
  }
};
