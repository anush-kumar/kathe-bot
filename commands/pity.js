module.exports = {
    commands: ['pity'],
    description: "Fun Commands #4",
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        let reply = 'unakulaa satti kuduthadhey thappu idhula pity kaekriya nee'
        message.channel.send(reply)
    },
  }