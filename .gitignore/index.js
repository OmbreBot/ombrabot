const Discord = require("discord.js");

var bot= new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Se faire Coder le Cul");
    console.log("Le bot à bien été connecté");
});

bot.login("NTUzMDM2MTMzNDI5NDExODUw.D2LvOg.BXJywINYa5Y0A9zn1ur5tL1xGNA");

