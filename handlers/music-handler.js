const fetch = require("node-fetch");
const ytdl = require('ytdl-core');
const input = require('./input-handler');
const playlist = require('./playlist-handler');

const { apiKey, playlistMaxSlotsAuthorized } = require('../config.json');

module.exports = {

    searchMusic: async (message, command) => {

        if (playlist.slot.length < playlistMaxSlotsAuthorized) {

            // récupération de la recherche saisie par l'utilisateur
            const search = input.search(message, command);

            // appel à l'API youtube pour effectuer la recherche
            const pull = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=${apiKey}`);

            // conversion de la réponse
            const result = await pull.json(response => response.json());

            // si la recherche ne donne rien
            if (!result.items[0]) {
                message.channel.send(`> Aucun résultat pour cette recherche!`);
                return;
            }

            // récupération du résultat de la recherche (id de la vidéo)
            const firstResult = result.items[0].id.videoId;

            // construction du lien avec l'id récupéré
            const videoUrl = `https://www.youtube.com/watch?v=${firstResult}`;

            // on push l'url construite dans l'array playlist (pour pouvoir la réutiliser ultérieurement)
            playlist.slot.push(videoUrl);

            message.channel.send(`> ${videoUrl} - Morceau ajouté à la playlist! Il y a actuellement **${playlist.slot.length}** vidéo(s) dans la playlist!`);

        } else {
            message.channel.send(`> Playliste pleine! (${playlistMaxSlotsAuthorized} morceaux max)`);
            return;
        }

    },

    startPlaying: function (message) {

        // fin d'éxécution si l'utilisateur n'est pas connecté à un salon vocal
        if (!message.member.voice.channel) {
            message.channel.send('> Veuillez vous connecter à un salon vocal pour commencer la lecture.');
            return;
        };

        // fin d'éxécution si la playlist est vide
        if (playlist.slot.length === 0) {
            message.channel.send('> La playlist est vide!')
            this.stopPlaying(message);
            return;
        };

        // récupération de l'identifiant du salon vocal sur lequel l'utilisateur est connecté
        const voiceChannel = message.member.voice.channel;

        // connexion au salon vocal
        voiceChannel.join().then(connection => {

            // récupère les liens stockés en playlist et lance le flux audio
            const stream = ytdl(playlist.slot[0], { filter: 'audioonly' });

            const dispatcher = connection.play(stream);

            dispatcher.on('finish', () => {

                // suppression du morceau joué dans la playlist
                playlist.slot.splice(0, 1);

                // relance de la méthode tant que la playlist contient des morceaux
                this.startPlaying(message);

            });

        });

    },

    stopPlaying: (message) => {

        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
            message.channel.send('> Je quitte le salon vocal!');
            return;
        }

        voiceChannel.leave();
        message.channel.send('> Je quitte le salon vocal!');

    }

};