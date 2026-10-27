# Gaming Outlaws Bot v2.1

Bot Discord pour la communauté Gaming Outlaws.

## Fonctionnalités

- Embeds graphiques (formulaire)
- Rôles-réaction graphiques (formulaire)
- Notifications YouTube multi-chaînes (posts en anglais)
- Messages de bienvenue multi-langues
(FR/EN/ES/BR/RU)
- Commande `/help` adaptée au rôle et à la langue
- IA Gemini (mention du bot)
- Annonces IA (`/annonce`)
permet a l'I.A de poster un message dans le
salon choisi
- Anniversaires
- Giveaways, modération, jeux, etc.

## Déploiement

1. `npm install`
2. Configure le fichier `.env` (voir `.env.example`)
3. `node index.js`

Sur bot-hosting.net : upload les fichiers, mets `STARTUP_FILE=index.js`, ajoute `DISCORD_TOKEN`.

## Changelog v2.1

- Ajout des formulaires graphiques pour `/embed` et `/reactionrole`
- Posts YouTube forcés en anglais
- Système de bienvenue selon le rôle de langue
- `/help` selon le rôle (admin/mod vs membre) et la langue
- Commande `/annonce` pour poster via l'IA
- Synchronisation forcée des commandes au démarrage
- Corrections diverses

---

Bot créé pour Gaming Outlaws Discord.
https://discord.gg/W5eJqyukqn
