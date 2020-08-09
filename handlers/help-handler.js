const { MessageEmbed } = require('discord.js');

module.exports = {

    displayHelp: (message) => {

        const responseEmbed = new MessageEmbed()
            .setColor('#e3322a')
            .setTitle('Liste des commandes disponibles')
            .addFields(
                {name: '!music', value :'Pour rechercher une musique, ex: !music never gonna give you up'},
                {name: '!playlist', value :'Pour afficher la playlist'},
                {name: '!delete', value :'Pour supprimer la dernière entrée de la playlist'},
                {name: '!flush', value :'Pour nettoyer entièrement la playlist'},
                {name: '!play', value :'Pour jouer la playlist'},
                {name: '!stop', value :'Pour arrêter la diffusion en salon vocal'},
                {name: '!info', value :'Plus d\'informations sur le bot'},
            );

        message.channel.send(responseEmbed);
    },

    displayInfos: (message) => {

        const responseEmbed = new MessageEmbed()
            .setColor('#e3322a')
            .setTitle('Informations')
            .addFields(
                {name: 'Auteur', value :'Florian L.'},
                {name: 'D\'où vient la musique que j\'écoute?', value :'Celle-ci est fournie par l\'API Youtube: https://developers.google.com/youtube'},
                {name: 'Ce bot a été codé avec Discord.js', value :'https://discord.js.org/'},
                {name: 'Repository GitHub', value :'https://github.com/FlorianLevsr/discord-music-bot'},
            );

        message.channel.send(responseEmbed);
    },

    invalidCommand: (message) => {

        message.channel.send('> Cette commande n\'existe pas, tapez !help pour plus d\'informations');

    }


};