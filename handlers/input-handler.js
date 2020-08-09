const { prefix } = require('../config.json');

module.exports = {

    messageIsFromBot: (message) => {

        // vérification que le message commence par le prefixe ou que l'auteur n'est pas le bot lui-même
        if (!message.content.startsWith(prefix) || message.author.bot) {
            return true;
        } else {
            return false;
        }

    },

    command: (message) => {

        // transformation de l'input (sans prefixe)
        const command = message.content.slice(prefix.length).split(' ').shift().toLowerCase();

        console.log(`input: ${message.content} - command: ${command}`);

        return command;
    },

    search: (message, command) => {

        // transformation de l'input (sans prefixe et sans commande)
        const search = message.content.slice(prefix.length + command.length + 1);

        console.log(`input: ${message.content} - search: ${search}`);
        
        return search;
    }

};