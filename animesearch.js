module.exports.run = async(client, message, args) => {


const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`; //Color Name In CAPS - RANDOM For Random
const Scraper = require("mal-scraper"); //npm i mal-scraper

//By SansTopia

        //Start

        let Text = args.join(" ");

        if (!Text) return message.channel.send(`Please Give Something!`);

        if (Text.length > 200) return message.channel.send(`Text Limit - 200`);

        let Msg = await message.channel.send(`**Searching It For You ðŸ”®**`);

        let Replaced = Text.replace(/ +/g, " ");

        await Msg.delete();

        let Anime;

        let Embed;

        try {

        Anime = await Scraper.getInfoFromName(Replaced);

        if (!Anime.genres[0] || Anime.genres[0] === null) Anime.genres[0] = "None";

        Embed = new MessageEmbed()
        .setColor("RANDOM")
        .setURL(Anime.url)
        .setTitle(Anime.title)
        .setDescription(Anime.synopsis)
        .addField(`Type`, Anime.type, true)
        .addField(`Status`, Anime.status, true)
        .addField(`Premiered`, Anime.premiered, true)
        .addField(`Episodes`, Anime.episodes, true)
        .addField(`Duration`, Anime.duration, true)
        .addField(`Popularity`, Anime.popularity, true)
        .addField(`Gneres`, Anime.genres.join(", "))
        .setThumbnail(Anime.picture)
        .setFooter(`Score - ${Anime.score}`)
        .setTimestamp();

        } catch (error) {
          return message.channel.send(`No Anime Found!`);
        };

        return message.channel.send(Embed);

    }
module.exports.config = {
    name: 'animesearch',
    aliases: ['asearch'],
}
