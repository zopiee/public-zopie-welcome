const Discord = require('discord.js')
const config = require('../../config.json');


module.exports = async (client, member) => {
  const id = member.user.id
  const guild = client.guilds.cache.get(config.iddoservidor);
  const membros = guild.memberCount;


            const embedlog = new Discord.MessageEmbed()
            
            .setAuthor(`📄 ${guild.name} | Um usuário saiu`, guild.iconURL({ dynamic: true }))
            .setDescription(`👥 O **usuário: <@${id}>** - \`${id}\` 
            🏃‍♂️ **Saiu** do Servidor, e o número de pessoas que há no servidor é **\`${membros}\`**`)
            .setColor(config.cordaembed)
            .setFooter({ text: `${config.nomedoservidor} © Todos os Direitos Reservados`, iconURL: config.imagemdoservidor })

            const channelLog = client.channels.cache.get(config.configchannel.idcanalsaiu)
            channelLog.send({ embeds: [embedlog] });
          }
