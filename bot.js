const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("651072738911322113")
setInterval(function() {
channel.send(`Spaming_for_toto`);
}, 30)
})

client.login(process.env.BOT_TOKEN);