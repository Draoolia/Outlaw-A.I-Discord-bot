# 🎮 Gaming Outlaws Bot - Guide d'installation complet (v1.10.0)

Ce bot est **prêt à l'emploi**. Tu n'as pas besoin de savoir coder.

---

## 🌍 Language / Langue

<details>
<summary><b>🇫🇷 Cliquez ici pour la Version Française</b></summary>

### 📋 Ce que le bot sait faire

#### 🔒 Réservé aux Admins / Modérateurs
- **Intelligence Artificielle** ➔ `/annonce` (générer des annonces structurées par l'IA)
- **Niveaux & XP** ➔ `/setup-levels` (configurer le salon, la couleur et le fond des cartes d'XP)
- **Compteur** ➔ `/setup-counting` (configurer le salon de comptage automatisé)
- **Jeux Gratuits** ➔ `/freegames setup` (configurer les alertes automatiques GamerPower)
- **Rôles par réactions** ➔ `/reactionrole` (créer des boutons ou emojis uniques/multiples)
- **Notifications YouTube** ➔ `/youtube` (ajouter le suivi automatique d'une chaîne)
- **Giveaways** ➔ `/giveaway` (créer, lister, relancer ou finir un tirage au sort)
- **Modération** ➔ `/mod` (gérer les avertissements, mutes, exclusions et bannissements)

#### 👥 Pour tous les membres
- **IA Interactive** ➔ Mentionne le bot `@Bot ta question` pour lui parler (Gemini/Groq)
- **Niveaux & Progression** ➔ `/rank` (carte graphique canvacard) et `/level` (XP actuelle)
- **Tickets d'aide** ➔ Système complet avec boutons et transcripts de sauvegarde au format HTML
- **Jeux intégrés** ➔ `/snake`, `/slots`, `/findemoji`, `/rps`, `/connect4`, `/tictactoe`, `/akinator`
- **Divertissement** ➔ `/embed` (créateur avancé), `/welcome` (bienvenue multilingue), `/meme`, `/joke`, `/birthday`

---

### 🚀 INSTALLATION ÉTAPE PAR ÉTAPE

#### Étape 1 : Créer le bot sur Discord
1. Va sur **https://discord.com**
2. Clique sur **New Application** et donne un nom (ex: `Outlaw AI`)
3. Va dans l'onglet **Bot** à gauche et clique sur **Reset Token** ➔ **Copy** (garde-le précieusement)
4. Active ces 3 options (Privileged Gateway Intents) :
   - **Presence Intent**
   - **Server Members Intent**
   - **Message Content Intent**
5. Va dans **OAuth2 ➔ URL Generator**, coche **bot** + **applications.commands**
6. Dans *Bot Permissions*, coche : *Manage Roles, Moderate Members, Ban Members, Manage Messages, Send Messages, Embed Links, Attach Files, Read Message History, Add Reactions, Use External Emojis*.
7. Copie le lien généré en bas et ouvre-le pour inviter le bot sur ton serveur.

#### Étape 2 : Récupérer les IDs
1. Dans Discord ➔ Paramètres utilisateur ➔ Avancés ➔ Active le **Mode développeur**.
2. Clic droit sur l'icône de ton serveur ➔ **Copier l'identifiant du serveur** (c'est ton `GUILD_ID`).
3. Sur le Discord Developer Portal ➔ Ton application ➔ Copie l'**Application ID** (c'est ton `CLIENT_ID`).

#### Étape 3 : Obtenir une clé API IA
1. Va sur **https://google.com** et crée une clé gratuite (**Gemini**).
2. *(Optionnel)* Prends une clé sur Groq si tu préfères utiliser leur modèle.

#### Étape 4 : Configurer les fichiers
1. Clone le dépôt : `git clone https://github.com`
2. Renomme le fichier `.env.example` en `.env` à la racine et remplis-le :
```text
DISCORD_TOKEN=ton_token_ici
CLIENT_ID=ton_application_id_ici
GUILD_ID=ton_id_serveur_ici
GEMINI_API_KEY=ta_cle_gemini_ici
```

#### Étape 5 : Hébergement (ex: bot-hosting.net)
1. Crée un serveur **Node.js** sur ton hébergeur et téléverse tous les fichiers.
2. Ajoute les mêmes variables d'environnement (`DISCORD_TOKEN`, etc.) sur le panel de l'hébergeur.
3. Dans la console, installe les dépendances : `npm install`
4. Enregistre les commandes slash : `node deploy-commands.js`
5. Démarre le bot : `node index.js` (ou clique sur **Start**).

</details>
<details>
<summary><b>🇬🇧 Click here for the English Version</b></summary>

### 📋 What the Bot Can Do
* **Admin & Moderation:** Tools for `/annonce` (AI posts), `/setup-levels`, `/setup-counting`, `/freegames setup`, `/reactionrole`, `/youtube` alerts, `/giveaway`, and `/mod` actions.
* **Member Features:** AI chat via mentions (`@Bot`), `/rank` & `/level`, support ticket system with HTML logs, mini-games (`/snake`, `/slots`, `/tictactoe`, etc.), and `/welcome` or `/embed` tools.

### 🚀 STEP-BY-STEP SETUP GUIDE
1. **Discord Application:** Create an app at the [Discord Developer Portal](https://discord.com), copy your Bot Token, enable the 3 *Privileged Gateway Intents* (Presence, Server Members, Message Content), and invite the bot using generated OAuth2 scopes/permissions.
2. **Server & Client IDs:** Enable Developer Mode in Discord to copy your `GUILD_ID` and the `CLIENT_ID` from the Developer Portal.
3. **AI API Key:** Generate a free Gemini key at [Google AI Studio](https://google.com).
4. **Workspace Config:** Clone the repository (`git clone https://github.com`), rename `.env.example` to `.env`, and fill in your `DISCORD_TOKEN`, `CLIENT_ID`, `GUILD_ID`, and `GEMINI_API_KEY`.
5. **Hosting & Boot:** Install dependencies with `npm install`, deploy slash commands via `node deploy-commands.js`, and start the bot with `node index.js`.

</details>

---

## ⚙️ Configuration importante sur ton serveur / Server Requirements
1. **Rôles de langues :** Créez les rôles `FR`, `EN`, `BR`, `ES`, `RU`.
2. **Rôles Staff :** Créez vos rôles modérateurs (`Admin`, `Administrateur`, `Moderator`, `Modérateur`, `Mod`).
3. **Hiérarchie :** Placez le rôle du bot tout en haut de la liste de vos rôles.

---

## ❗ Problèmes courants / Troubleshooting

| Problème / Issue | Solution |
| :--- | :--- |
| Les commandes n’apparaissent pas | Relancez `node deploy-commands.js` |
| Le bot ne répond pas aux mentions | Vérifiez que l'*Message Content Intent* est actif sur le portail |
| Erreur `better-sqlite3` | Exécutez `npm install better-sqlite3 --build-from-source` |
| Le bot ne peut pas mute/ban | Remontez le rôle du bot au-dessus de la cible |

---

## 📁 Structure des fichiers / Project Tree
```text
bot/
├── index.js              ➔ Point d'entrée principal / Core entry point
├── deploy-commands.js    ➔ Enregistrement des commandes slash
├── config.js             ➔ Paramètres globaux
├── package.json          ➔ Dépendances du projet
├── .env                  ➔ Clés privées (configuration)
├── commands/             ➔ Modules de commandes (admin, public, games)
├── events/               ➔ Gestionnaires d'événements Discord
├── utils/                ➔ Outils (SQLite, IA, traducteurs)
data/                 ➔ Base de données SQLite locale
```

---
*Developed for the **Gaming Outlaws Discord** community.*
