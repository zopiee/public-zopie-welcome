const Discord = require('discord.js')
const config = require('../../config.json')

/**
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 */

module.exports = async (client, message)  => {

    if (message.author.bot) return;
    if (message.channel.type == 'channel') return;

    if (!message.content.toLowerCase().startsWith(config.prefix)) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
    
    const args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g)

    const command = args.shift().toLowerCase();
    
    try {
        const commandFile = require(`../commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
        console.log(err)
    }
}
