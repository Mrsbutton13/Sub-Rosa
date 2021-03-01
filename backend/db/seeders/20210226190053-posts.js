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
      {
        body: `Two summers ago before covid, I went to the Lock Ness lake. We didn't see anything but I wanna keep going. I know nessi is real!`,
        userId: 8,
      },
      {
        body: `Has anyone seen finding bigfoot? I really want to go on an expedition to see if we can find big foot. Who's with me?`,
        userId: 7,
      },
      {
        body: `Has anyone seen skinwalker ranch? Like passed by there? We used to live close to it and that place is creeeepy. Nobody is allowed to enter, but
        some buddies of mine and I went there when we were younger. Holy cow, we couldn't sleep. There were lights, and noises all night. One of my friends was going insane!!!
        He wanted to leave but we all wanted to stay. By like 3 in the morning he was rocking back and forth. Seriously guys that place is wack!`,
        userId: 9,
      },
      {
        body: `Ok so here is something only a few select people know.... A dark shadow follows me. Sometimes I wake up in the middle of the night and see it there standing staring me down
        It doesn't scare me, but it's weird.`,
        userId: 11,
      },
      {
        body: `I am deeply afraid of clowns, I just can't with clowns. Who has some scary clown stories?`,
        userId: 14,
      },
      {
        body: `Last weekend I went camping with a few friends, and up on a hill we saw a UFO. It was just hoovering one the hill, It was huge and
        no it wasn't a disk it was more like a very long oval shape. Then it just wooshed into the sky.`,
        userId: 15,
      },
      {
        body: `I had an aunt who we thought was possesed, (may she rest in peace). I inhereted a dinning table from her and that thing freaks me out. like there is something attatched to it.
        I swear I see little knomes dancing under it sometimes. I think I might get rid of it. `,
        userId: 12,
      },
      {
        body: `When I walk up the stairs in the middle of the night, I always get that feeling that someone is behind me. So one day I had a mirror. I was scared, but I did it. 
        So as I'm walking up the stairs, I slowly put my mirror up and I saw her. She had a white gown on, and dark black hair like something out of a movie. 
        She was slowly walking up behind me but looking down, when she looked up she saw that I saw her. Then she was gone.`,
        userId: 13,
      },
      {
        body: `We bought an old house, I don't dare go down to the basement. Or go up to the attic. I hear foot steps at night, then I hear something like furniture moving. 
        I guess I will never know whats in the attic or the basement. I don't wanna know. `,
        userId: 10,
      },
      {
        body: `We rented a cabin out in the middle of no where, and I saw a figure behind some trees. it looked like a 
        person standing there. I yelled out 'hey!' . I don't know what it was it was just the shadow I saw
        but it took off running. Someone knocked on the door. So I grabbed a chiminey stick and went to open the door. Nobody was there,
        I yelled out 'Who is out there!' I shut the door and again knock on the door, I saw a tail go behind a tree.
        So I stood there trying to get a better view. Then I heard it the most menacing laugh. I never opened the door again.`,
        userId: 6,
      },
      {
        body: `When I was younger my great grandmother passed. She raised my mom so naturaly my mom was torn. I was 4 when this happened but I remember it so clear. I didn't understand why 
        my mom was so torn up if gramy was here. She would play dolls with me. She looked alot younger I didn't recognize her, but she told me time reversed for her so that she could play with me.
        I spent hours in my room playing with gramy. Mom just thought i talked to my self. So I asked gramy why mom couldn't see her. Gramy said that she wasn't young enough. The subject of gramy recently came up 
        and I told mom about those times and mom said that she had passed.`,
        userId: 8,
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts')
  }
};
