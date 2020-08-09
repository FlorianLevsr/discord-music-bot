const { Client } = require('discord.js');
const client = new Client();

const { token } = require('./config.json');

const input = require('./handlers/input-handler');
const help = require('./handlers/help-handler');
const music = require('./handlers/music-handler');
const playlist = require('./handlers/playlist-handler');




client.once('ready', () => {
    client.user.setActivity('music!');
    console.log('init!');
});


client.on('message', (message) => {

    

    // fin d'éxécution si le message reçu est du bot lui-même ou s'il ne commence pas par le préfixe
    if (input.messageIsFromBot(message)) {
        return;
    }

    // récupération de la commande saisie
    const command = input.command(message);


    switch (command) {


        case 'help':
            help.displayHelp(message);
            break;

        case 'info':
            help.displayInfos(message);
            break;

        case 'music':
            music.searchMusic(message, command);
            break;

        case 'delete':
            playlist.deleteLastSlot(message);
            break;

        case 'playlist':
            playlist.showPlaylist(message);
            break;

        case 'flush':
            playlist.flushPlaylist(message);
            break;

        case 'play':
            music.startPlaying(message);
            break;

        case 'stop':
            music.stopPlaying(message);
            break;

        default: 
            help.invalidCommand(message);
            break;
    }

});

client.login(token);







