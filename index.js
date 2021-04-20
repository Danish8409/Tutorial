const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', () => {
 console.log(`Bot ready to use`);
});

client.on('message', async message => {
  if(message.content === "Hello") {
    message.reply(`Hello too`);
  }
  if(message.content === "Hi") {
    message.channel.send(`Hi too`)
  }
});
client.login(process.env.token)
