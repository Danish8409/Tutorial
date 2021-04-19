module.exports.run = async (client, message, args) => {
	
	if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("You do not have the perms to use this cmd!")
        }
	
	if (!args[0])
		return message.reply(
			'Please enter the amount of messages you want to clear!'
		);
	if (isNaN(args[0])) return message.reply('Please enter a real number!');

	if (args[0] > 500)
		return message.reply('You cannot delete more than 500 messages!');
	if (args[0] < 1)
		return message.reply('To delete messages please delete atleast 1 message.');

	await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
		message.channel.bulkDelete(messages);
	});
};
module.exports.config = {
	name: 'clear',
	aliases: ['purge' , 'clear']
};
