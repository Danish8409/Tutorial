const discord = require('discord.js');
const client = new discord.Client();
const { keep_alive } = require('./keep.js');
const fs = require('fs');

client.commands = new discord.Collection();
client.aliases = new discord.Collection();
fs.readdir('./commands/', (err, files) => {
	if (err) console.log(err);

	let jsfile = files.filter(f => f.endsWith('.js'));
	if (jsfile.length <= 0) {
		return console.log("[LOGS] Couldn't Find Commands!");
	}

	jsfile.forEach((f, i) => {
		let pull = require(`./commands/${f}`);
		client.commands.set(pull.config.name, pull);
		pull.config.aliases.forEach(alias => {
			client.aliases.set(alias, pull.config.name);
		});
	});


client.on('ready', () => {
 console.log(`Bot ready to use`);
});
}); 
client.on('message', async message => {
  if(message.content === "Hello") {
    message.reply(`Hello!`
    );
  
  };
 
    let prefix = "your prefix here"

if(message.content.startsWith('2nd prefix')) prefix = '2nd prefix'

if(!message.content.startsWith(prefix)) return null;
	
	let args = message.content
		.slice(prefix.length)
		.trim()
		.split(' ');
	let cmd = args.shift().toLowerCase();
	let commandfile =
		client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
	if (commandfile) {
		commandfile.run(client, message, args)
}
		
	});

client.login(process.env.token);
