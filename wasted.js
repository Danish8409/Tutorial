const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const Data = await Random.Wasted({ Image: Member.user.displayAvatarURL({ format: "png" }), Color: Color });

    return message.channel.send(Data);
  
};
module.exports.config = {
  name: 'wasted', 
  aliases: ['wtd']
}
