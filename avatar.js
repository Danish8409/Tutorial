const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let user;
  
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }
  
  let avatar = user.displayAvatarURL({size: 2048, dynamic: true});
  
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${user.username} Avatar`)
  .setDescription(`[Link avatar](${avatar})`)
  .setColor("RANDOM")
  .setImage(avatar)
  
  return message.channel.send(embed);
}

module.exports.config = {
  name: 'avatar',
  aliases: ['ava', 'pp', 'profile']
}
