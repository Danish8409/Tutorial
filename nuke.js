const { MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args) => {
        
if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("You do not have the perms to use this cmd!")
        }
        let reason = args.join(" ") || "No Reason"
        if(!message.channel.deletable) {
            return message.reply("This channel cannot be nuked!")
        }
        let newchannel = await message.channel.clone()
        await message.channel.delete()
        let embed = new MessageEmbed()
        .setColor('RANDOM')     
        .setTitle("Channel Nuked")
        .setDescription(reason)
        await newchannel.send(embed)    
    }
module.exports.config = {
  name: 'nuke',
  aliases: []
    
}
