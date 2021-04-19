const fetch = require('node-fetch')
const dc = require('discord.js')
module.exports.run = async(client, message,args) => {
	
let useio = message.mentions.users.first() || message.author
    let imgo = useio.displayAvatarURL({size: 2048, format: 'jpg'})
    console.log(imgo)
    message.channel.send('🕑 Wait for few seconds 🕑')
    
	fetch(`https://nekobot.xyz/api/imagegen?type=magik&image=${imgo}&intensity=2`) .then(res => res.json())
   .then(data => {
    
   let emb = new dc.MessageEmbed()
     .setColor("RANDOM")
     .setImage(data.message) /**Getting the Magik image link from we*/
     .setFooter(`${message.author.tag} Magiked hehe`)
     message.channel.send(emb)
   }) 	
   	
}
module.exports.config = {
	name: 'magik',
  aliases: ['magic,curse']
}
