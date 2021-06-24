'use strict';
const faker = require('faker')
const bcrypt = require('bcryptjs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        bio: 'I am a demolition',
        avatar: 'https://mysubrosa.s3.us-west-1.amazonaws.com/Screen+Shot+2021-06-19+at+5.32.20+PM.png',
        createdAt: new Date(),
        updatedAt: new Date(),  
      },
      {
        email: 'moralesMiles@marvel.com',
        username: 'Spiderman',
        hashedPassword: bcrypt.hashSync('password'),
        bio: 'Ghost spider believer.',
        avatar: 'https://mysubrosa.s3.us-west-1.amazonaws.com/spiderman.png',
        createdAt: new Date(),
        updatedAt: new Date(),  
      },
      {
        email:'wilsonWade@marvel.com',
        username: 'Deadpool',
        hashedPassword: bcrypt.hashSync('password'),
        bio: `I've seen the other side.`,
        avatar: 'https://mysubrosa.s3.us-west-1.amazonaws.com/deadpool.png',
        createdAt: new Date(),
        updatedAt: new Date(),  
      },
      {
        email: 'brockEddie@marvel.com',
        username: 'Venom',
        hashedPassword: bcrypt.hashSync('password'),
        bio: `species: symbiote`,
        avatar: 'https://mysubrosa.s3.us-west-1.amazonaws.com/venom.png',
        createdAt: new Date(),
        updatedAt: new Date(),  
      },
      {
        email: 'ihateEddie@marvel.com',
        username: 'Carnage',
        hashedPassword: bcrypt.hashSync('password'),
        bio: `Don't believe in aliens? Poor fool.`,
        avatar: 'https://mysubrosa.s3.us-west-1.amazonaws.com/carnage.png',
        createdAt: new Date(),
        updatedAt: new Date(),  
      },
      {
        email: 'ilovevision@marvel.com',
        username: 'Scarlet Witch',
        hashedPassword: bcrypt.hashSync('password'),
        bio: 'Everything is magic.',
        avatar: 'https://mysubrosa.s3.us-west-1.amazonaws.com/scarletwitch.png',
        createdAt: new Date(),
        updatedAt: new Date(),  
      },
      {
        email: 'betterthanher@marvel.com',
        username: 'Agatha Harkness',
        hashedPassword: bcrypt.hashSync('password'),
        bio: 'Enter the realm of Withcraft.',
        avatar: 'https://mysubrosa.s3.us-west-1.amazonaws.com/agatha.png',
        createdAt: new Date(),
        updatedAt: new Date(),  
      },
      {
        email: 'iknowmagic@marvel.com',
        username: 'Dr. Strange',
        hashedPassword: bcrypt.hashSync('password'),
        bio: `Let's travel into alternate universe.`,
        avatar: 'https://mysubrosa.s3.us-west-1.amazonaws.com/drstrange.png',
        createdAt: new Date(),
        updatedAt: new Date(),  
      },
      {
        email: 'unbeatable@marvel.com',
        username: 'Wolverine',
        hashedPassword: bcrypt.hashSync('password'),
        bio: `Ghost's don't scare me.`,
        avatar: 'https://mysubrosa.s3.us-west-1.amazonaws.com/wolverine.png',
        createdAt: new Date(),
        updatedAt: new Date(),  
      },
      {
        email: 'ishrink@marvel.com',
        username: 'Ant-Man',
        hashedPassword: bcrypt.hashSync('password'),
        bio: 'Ghost hunter over here!',
        avatar: 'https://mysubrosa.s3.us-west-1.amazonaws.com/antman.png',
        createdAt: new Date(),
        updatedAt: new Date(),  
      },
      

    ])
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'Spiderman', 'Deadpool', 'Carnage'] }
    })
  }
};