const Discord = require('discord.js')
const roleClaim = require('./role-claim')
const client = new Discord.Client()
const loadCommands = require('./commands/load-commands')

const mongo = require('./mongo.js')
const { Mongoose } = require('mongoose')

const config = require('./config.json')
const welcome = require('./welcome')

//Client Check Log
client.on('ready', async () => {
  console.log('Kathe Chellam is Ready to work Checking with...')

  client.user.setActivity('In Development');

  loadCommands(client)
  roleClaim(client)
  welcome(client)
})

client.login(process.env.DJS_TOKEN)