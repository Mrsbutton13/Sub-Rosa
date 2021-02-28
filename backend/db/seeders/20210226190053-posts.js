'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
        body: 'Last night I was going to the kitchen as a saw a little girl sitting under our dinning room table.',
        userId: 1,
      },
      {
        body: `Don't you hate the feeling that you are being watch?`,
        userId: 4,
      },
      {
        body: `Ok so here is my story.... I remember when I was younger, we lived in a tiny house. Alot of crazy things happend in that house. 
        Like really crazy, I used to see people following me in the middle of the night. We would here chains dragging outside, and we lived out in the boonies,
        our closes neighbor was like half a mile away.`,
        userId: 5,
      },
      {
        body: `Just watched paranormal activity, I swear I heard something fall in the bathroom.`,
        userId: 3,
      },
      {
        body: `What is your wierd phobia? Mine? Catapillars, they make my legs like jello.`,
        userId: 2,
      },
      {
        body: `So last night I was playing video games, I saw someone standing in the hallway out of the corner of my eye.
        I looked over to see who it was and gone, nobody there. I always see this person and they are wearing the same white shirt.
        Sometimes I see them walking in the kitchen. freaks me out. `,
        userId: 2,
      },
      
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts')
  }
};
