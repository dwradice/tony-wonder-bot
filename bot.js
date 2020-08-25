const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/config.env` });

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag} has logged on`);
});

client.on('message', message => {
  try {
    const gifs = [
      'https://i.pinimg.com/originals/8c/c5/40/8cc5401d447bd7c5485e3e709a7c7e22.gif',
      'https://y.yarn.co/574e1b36-1f10-4d7d-bdf7-20aa2f367da6_text_hi.gif',
      'https://i.imgur.com/5yMlrFZ.gif',
    ];

    if (message.content.match(/wonder/i) && !message.author.bot) {
      message.channel.send('Did somebody say "Wonder?"', {
        files: [
          {
            attachment: gifs[Math.floor(Math.random() * gifs.length)],
            name: 'tony-wonder.gif',
          },
        ],
      });
    }
  } catch (err) {
    console.log('Error');
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
