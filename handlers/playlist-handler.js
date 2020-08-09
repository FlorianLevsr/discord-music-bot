const { MessageEmbed } = require('discord.js');
const { playlistMaxSlotsAuthorized } = require('../config.json');

module.exports= {

    slot: [],

    showPlaylist: function (message) {

        if (this.slot.length === 0) {
            message.channel.send('> Playlist vide!');
            return;
        }

        const responseEmbed = new MessageEmbed()
            .setColor('#e3322a')
            .setTitle('Playlist')
            .setTitle(`Il y a actuellement **${this.slot.length}** vidéo(s) dans la playlist! (${playlistMaxSlotsAuthorized} morceaux max)`)
            .setDescription(this.slot);

        message.channel.send(responseEmbed);

    },

    flushPlaylist: function (message) {

        if (this.slot.length === 0) {
            message.channel.send('> Playlist vide!');
            return;
        }

        this.slot = [];
        message.channel.send('> Playlist nettoyée!');

    },

    deleteLastSlot: function (message) {

        if (this.slot.length === 0) {
            message.channel.send('> Playlist vide!');
            return;
        }
        
        this.slot.pop();
        message.channel.send('> Dernier morceau de la playlist supprimé');
    }


};