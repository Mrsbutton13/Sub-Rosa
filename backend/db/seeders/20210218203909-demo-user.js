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
        profileImgUrl: 'https://mysubrosa.s3.amazonaws.com/1614135914592.png',
      },
      {
        email: faker.internet.email(),
        username: 'Spiderman',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImgUrl: 'https://mysubrosa.s3.amazonaws.com/1614135914592.png'
      },
      {
        email: faker.internet.email(),
        username: 'Deadpool',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImgUrl: 'https://mysubrosa.s3.amazonaws.com/1614135914592.png'
      },
      {
        email: faker.internet.email(),
        username: 'Venom',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImgUrl: 'https://mysubrosa.s3.amazonaws.com/1614135914592.png'
      },
      {
        email: faker.internet.email(),
        username: 'Carnage',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImgUrl: 'https://mysubrosa.s3.amazonaws.com/1614135914592.png'
      },
      {
        email: faker.internet.email(),
        username: 'Scarlet Witch',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImgUrl: 'https://mysubrosa.s3.amazonaws.com/1614135914592.png'
      },
      {
        email: faker.internet.email(),
        username: 'Agatha Harkness',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImgUrl: 'https://mysubrosa.s3.amazonaws.com/1614135914592.png'
      },
      {
        email: faker.internet.email(),
        username: 'Vision',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImgUrl: 'https://mysubrosa.s3.amazonaws.com/1614135914592.png'
      },
      {
        email: faker.internet.email(),
        username: 'Dr. Strange',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImgUrl: 'https://mysubrosa.s3.amazonaws.com/1614135914592.png'
      },
      {
        email: faker.internet.email(),
        username: 'Jane Foster',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImgUrl: 'https://mysubrosa.s3.amazonaws.com/1614135914592.png'
      },
      {
        email: faker.internet.email(),
        username: 'Black Panther',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImgUrl: 'https://mysubrosa.s3.amazonaws.com/1614135914592.png'
      },
      {
        email: faker.internet.email(),
        username: 'Wolverine',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImgUrl: 'https://mysubrosa.s3.amazonaws.com/1614135914592.png'
      },
      {
        email: faker.internet.email(),
        username: 'Captain Marvel',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImgUrl: 'https://mysubrosa.s3.amazonaws.com/1614135914592.png'
      },
      {
        email: faker.internet.email(),
        username: 'Ant-Man',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImgUrl: 'https://mysubrosa.s3.amazonaws.com/1614135914592.png'
      },
      {
        email: faker.internet.email(),
        username: 'Punisher',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImgUrl: 'https://mysubrosa.s3.amazonaws.com/1614135914592.png'
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
