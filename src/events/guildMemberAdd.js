const Discord = require('discord.js')
const config = require('../../config.json');


module.exports = async (client, member) => {
  const id = member.user.id
  const guild = client.guilds.cache.get(config.iddoservidor);
  const membros = guild.memberCount;


            const embedlog = new Discord.MessageEmbed()
            
            .setTitle(`Um usuário Entrou! 🥳`)
            .setDescription(`O usuário <@${id}> entrou em nosso **Discord!**
            🏡 Seja muito **Bem-Vindo** ao nosso **Discord**, Aproveite **Muito!**

            > **Membros** no **Servidor:** **\`${membros}\`** 
            <@${id}>`)


            .setColor(config.cordaembed)
            .setThumbnail(config.imagemdoservidor)
            .setFooter({ text: `${config.nomedoservidor} © Todos os Direitos Reservados`, iconURL: config.imagemdoservidor })

            const channelLog = client.channels.cache.get(config.configchannel.idcanalbemvindo)
            channelLog.send({ embeds: [embedlog] });




            // MENSAGEM NA DM (OPCIONAL)
         // const embed = new Discord.MessageEmbed()

         // .setTitle("Seja muito bem vindo!")
         // .setDescription(`**Espero **que **goste **muito de **nosso **Servidor;
         // > Nós da **Huawei External** estamos **dispostos **a trazer ~~**confiança**~~ e ~~**lealdade**~~ a vocês **futuros clientes**!
         // > 
         // - Não se **esqueça** de ver **nossos** produtos, **MELHORES PREÇOS DO MERCADO!**
         // 
         // - <#1286375412682981390>
         // - <#1286375413882290322>
         // - <#1287833888550424637>`)
         // .setThumbnail(config.imagemdoservidor)
         // .setColor("2C2F33")

         // member.send({embeds: [embed] })
          }
          


