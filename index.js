const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ('*')

bot.on('ready', function() {
    bot.user.setActivity ("*help");
    console.log('Connected');
});

bot.login("NTIyNDEwNDgzNzAyMzAwNjcy.DvKkxg.XrhzKVOe_VjAYitBwBVV0btiTpo");

bot.on('message', message => {
    if (message.content === prefix + "lotery"){
        var embed = new Discord.RichEmbed()
        .setTitle("**Le gagnant de la lotery est :**")
        .setDescription(`${VARIABLE}`)
        .addField("Bien joué  toi !")
        .setColor("#00FF00")
        .setFooter("Bot certifié de GIVE NO RAID ✅.")
    message.channel.send(embed);
        console.log("Commande (*lotery) effectuée.");
    }

    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes :\n *help \n *lotery");
        console.log("Commande (*help) effectuée.");
    }

    if (message.content === prefix + "stalkloteryinfo"){
        var embed = new Discord.RichEmbed()
        .setTitle("Information du Bot :")
        .setDescription("Ce bot à été créer à usage unique sur ce discord.")
        .addField("Créé par", "WaynStalker™")
        .addField("Commandes", "_Commandes privé._")
        .addField("Certifications du bot", "Ce bot à été créer, et validé par WaynStalker™ ✅.")
        .addField("Crée le", "12 décembre 2018.")
        .setColor("#FF0000")
        .setFooter("Bot certifié de GIVE NO RAID ✅.")
    message.channel.send(embed)
        console.log("Commande (*stalkloteryinfo) effectuée.");
    }})
