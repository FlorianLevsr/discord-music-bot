# discord-music-bot

Découverte de la librairie Discord.js - Création d'un petit bot pour lire des pistes audio et gérer une playlist.

## MusicBOT

- [Technologies utilisées]()
- [Initialisation]()
- [Mode d'emploi]()


### Technologies utilisées

+ NodeJS
+ DiscordJS

### Initialisation

1. Créez le fichier ```config.json```, nécessaire au bon fonctionnement du bot, en vous inspirant du fichier ```config_example.json``` disponible.
2. Installez la librairie Discord.js à l'aide la commande ```npm install discord.js```
3. Executez la commande ```npm run start``` pour lancer l'application. La commande ```npm run dev``` est également disponible mais il vous faudra dans ce cas avoir préalablement installé le package [nodemon](https://www.npmjs.com/package/nodemon).

*nb. Vous devez également avoir accès à l'API Youtube (en vous inscrivant [ici](https://developers.google.com/youtube/v3)) ainsi qu'au Discord Developer Portal (inscription et marche à suivre, [ici](https://discord.com/developers/applications)).*

### Mode d'emploi

#### Avant toute chose

```!help```

La commande !help est disponible et recense l'ensemble des commandes disponibles.

![!help](https://i.ibb.co/PZpd6x6/help.png)!

#### Rechercher une musique sur youtube

```!music <recherche>```

Le bot effectuera une recherche sur Youtube pour trouver une vidéo correspondant aux mot-clés saisis par l'utilisateur.

![!music](https://i.ibb.co/K54y5gC/music.png)

#### Jouer un titre

```!play```

Une fois un titre trouvé et ajouté à la playlist *(cette opération est automatique)*, utilisez la commande ci-dessus pour lancer le flux audio. Vous devez être connecté à un salon vocal, le bot vous y rejoindra. Dans le cas contraire, il vous demandera simplement de le faire.

A noter que tous les titres contenus dans la playlist seront diffusés, sans interruption.

Le bot quittera de lui-même le salon une fois la playlist vide. N'hésitez-pas à renflouer la playlist en cours de diffusion.

#### Consulter la playlist

```!playlist```

Cette commande affichera tous les titres sauvegardés dans la playlist.

![!playlist](https://i.ibb.co/khycrFY/playlist.png)

#### Stopper la lecture

```!stop```

Cette commande stoppera la diffusion en cours et déconnectera le bot du salon vocal dans lequel il se trouve.

#### Effacer un titre en playlist

```!delete```

Cette commande efface le dernier titre ajouté à la playlist.

![!delete](https://i.ibb.co/R9y91zN/delete.png)

#### Nettoyer la playlist

```!flush```

Cette commande efface tous les titres ajoutés à la playlist.

![!flush](https://i.ibb.co/yNLTP8g/flush.png)

#### Augmenter la capacité de la playlist (en nombre de titres)

Rendez-vous dans le fichier ```config.json``` et modifiez la valeur de la variable ```playlistMaxSlotsAuthorized``` *(3 titres de base)*.
