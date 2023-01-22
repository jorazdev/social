<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  <a href="https://vuejs.org/" target="blank"><img src="https://vuejs.org/images/logo.png" width="200" alt="Nest Logo" /></a>
  <a href="https://www.postgresql.org" target="blank"><img src="https://www.postgresql.org/media/img/about/press/elephant.png" width="200" alt="Nest Logo" /></a>
  <a href="https://caddyserver.com" target="blank"><img src="https://caddyserver.com/resources/images/caddy-logo.svg" width="200" alt="Nest Logo" /></a>
  
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Une application web fait avec Nestjs framework nodejs et Vuejs 3 pour le front end. <br/>
Le template utilisé vient du développeur loicfarel disponible sur https://github.com/loicfarel/social et https://foscio.vercel.app/ <br/><br/>

L'objectif, c'est de montrer l'utilisation de Nestjs avec le mode Server Static en plaçant Vuejs 3 comme son front par défaut ainsi que<br/>
l'utilisation de Vuejs 3 avec la composition API, le composable et la transformation de chaque division html en composant component vuejs <br/><br/>

La base de données utilisée est le postgresSql en utilisant le container docker.


## Installation

```bash
# Ajouter le domaine social.com dans le fichier hosts
$ cd /etc/hosts => 127.0.0.1 social.com

#Extraire les fichiers dans le dossier cert.zip et les coller dans:
$ docker/caddy/social.com+4.pem
$ docker/caddy/social.com+4-key.pem

# Installer les packages Nestjs et Vuejs 3
$ npm install
```

## Running the app

```bash
# Lancer les containers docker
$ docker-compose up ou docker-compose up -d

# development
$ docker-compose exec web /bin/sh => yarn watch


```

## View the app on development
```bash
https://social.com:444
```

## View the app on production
```bash
https://social.jorazdev.com
```

## Contact

```bash
# Email
$ jorazdev@gmail.com

# Site web portfolio
$ https://jorazdev.com

# Tél
$ +261 32 97 740 62
```

