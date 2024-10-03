const Discord = require('discord.js')
const fs = require('fs')
const path = require('path')
const colors = require('colors')
const config = require('./config.json')

const client = new Discord.Client({ intents: 32767 })
const discordModals = require('discord-modals'); // Define the discord-modals package!
discordModals(client);

fs.readdir('./src/commands', (err, files) => {
    if (err) return console.log(err)
    console.log(colors.green(" == COMANDOS == "))
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        let eventName = file.substring(0, file.indexOf('.js'))
        console.log(`${colors.green(" -> ")} ${colors.gray("COMANDO ") + colors.cyan(eventName) + colors.gray(" Carregado com sucesso")}`)
    })
})

fs.readdir('./src/events', (err, files) => {
    if (err) return console.error(err)
    console.log(colors.green(" == EVENTOS == "))
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        let eventName = file.substring(0, file.indexOf('.js'))
        let eventModule = require(path.join(__dirname, './src/events', eventName))
        client.on(eventName, eventModule.bind(null, client)) 
        console.log(`${colors.green(" -> ")} ${colors.gray("EVENTO ") + colors.cyan(eventName) + colors.gray(" Carregado com sucesso")}`)
    })
})

client.login(config.token)