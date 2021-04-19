const dc = require('discord.js')

module.exports.run = async (client, message, args) => {
  
  const emoji = message.client.emojis.cache.get('803766094220754954')
  
  const emo = message.client.emojis.cache.get('803842146695643166')
  
  const emoj = message.client.emojis.cache.get ('803840325940019211')
  
  const em = message.client.emojis.cache.get('804089878069116939')
  
  let y = new dc.MessageEmbed()
  .setTitle('Pertolongan Martin')
  .setColor('RANDOM')
  .addField(`:ferris_wheel: ┇Fun`,'`wasted`, `avatar`, `animesearch`, `calculate`, `afk`, `covid`, `info`, `snipe`,')
   .addField(`:detective: ┇ Moderation`, '`nuke`, `clear`,')
   .addField(`:key: ┇Prefix`,'`m!help` , `M!help`')
  
  message.channel.send(y)
}
module.exports.config = {
  name: 'help',
  aliases: ['help']
    
    }
