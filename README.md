# Gaming Outlaws Bot (Outlaw A.I.)

Bot multifonction pour Discord — version 1.10.0

## 🌍 Language / Langue
🇫🇷 FRENCH
🇬🇧 ENGLISH 

## 🇫🇷 Version Française

### 🚀 Fonctionnalités

#### 🤖 Intelligence Artificielle & Annonces
- **Intégration Gemini / Groq :** IA avancée pour interagir directement avec les membres via mention du bot.
- **Annonces IA (`/annonce`) :** Génération automatique de messages structurés par l'IA dans le salon de ton choix.

#### 📈 Niveaux & XP
- **Cartes graphiques :** `/rank` affiche une carte graphique personnalisée (canvacard) et `/level` montre l'XP.
- **Configuration :** `/setup-levels` pour définir les salons d'annonce, les couleurs de fond et l'XP de base.
- **Administration :** `/xp set` pour modifier l'XP d'un membre et `/xp role` pour lier un rôle à un niveau.
- Gain d'XP automatique et fluide par message envoyé.

#### 🎫 Tickets & Formulaires
- **Tickets avancés :** Système complet avec génération automatique d'archives et de transcripts HTML.
- **Formulaires Graphiques :** `/embed` et `/reactionrole` pour créer des embeds et rôles-réactions via l'interface Discord.

#### 🎮 Jeux & Divertissement
- **Jeux intégrés :** `/snake`, `/slots`, `/findemoji`, `/rps`, `/connect4`, `/tictactoe` et `/akinator`.
- **Free Games :** `/freegames setup` pour configurer les alertes de jeux gratuits automatiques (via GamerPower).
- Commandes de gestion : `/freegames plateformes`, `/suivre`, `/retirer`, `/liste`, `/test`.

#### 🛠️ Modération & Utilitaires
- **Outils de modération :** `/mod` pour gérer facilement les avertissements (warn), mutes, exclusions ou bannissements.
- **Gestion de communauté :** `/welcome` (bienvenue multilingue), `/rules` ou `/reglement`, `/birthday` (anniversaires) et `/giveaway`.
- **Divertissement :** `/meme`, `/joke` et un menu `/help` dynamique et multilingue.

### 🛠️ Installation et Déploiement

#### Prérequis
- Node.js (v16.x ou supérieure)
- Un jeton de bot Discord (`DISCORD_TOKEN`)
- Une clé API Google Gemini (`GEMINI_API_KEY`) ou Groq (`GROQ_API_KEY`)

#### Configuration Locale
1. Clone le dépôt : `git clone https://github.com`
2. Installez les dépendances : `npm install`
3. Créez un fichier `.env` à la racine et ajoutez vos clés (`DISCORD_TOKEN`, `CLIENT_ID`, `GUILD_ID`, `GEMINI_API_KEY`).
4. Déploie les commandes : `node deploy-commands.js`
5. Lance le bot : `node index.js`

#### Déploiement Cloud (ex: bot-hosting.net)
1. Téléversez tous les fichiers du projet sur votre panel d'hébergement.
2. Définissez la variable de démarrage : `STARTUP_FILE=index.js`.
3. Ajoutez vos variables secrètes directement dans l'onglet "Environnement" de l'hébergeur.
## 🇬🇧 English Version

### 🚀 Features

#### 🤖 Artificial Intelligence & Announcements
- **Gemini / Groq Integration:** Advanced AI capabilities to chat with community members via bot mentions.
- **AI Announcements (`/annonce`):** Automatically generates and formats structured posts into any target channel using AI logic.

#### 📈 Levels & XP System
- **Graphical Display:** `/rank` showcases visual rank cards (canvacard) and `/level` tracks ongoing progress.
- **Custom Configuration:** `/setup-levels` configures announcement rooms, custom backgrounds, and standard XP algorithms.
- **Administration:** `/xp set` alters member metrics and `/xp role` links milestone roles directly to levels.

#### 🎫 Tickets & Interaction Forms
- **Advanced Tickets:** Built-in modular ticket system with automated HTML archive logging and transcripts.
- **Interactive UI Forms:** Graphic modal setups for customized embedding (`/embed`) and button reaction roles (`/reactionrole`).

#### 🎮 Games & Fun Modules
- **Built-in Games:** `/snake`, `/slots`, `/findemoji`, `/rps`, `/connect4`, `/tictactoe`, and `/akinator`.
- **Free Games Feed:** `/freegames setup` automated game deals distribution system pulling from the GamerPower engine.

#### 🛠️ Moderation & Utilities
- **Moderation Arsenal:** `/mod` handles system flags, formal warnings, timeouts, kicks, and global bans.
- **Engagement Systems:** Multilingual welcomer (`/welcome`), active birthday trackers (`/birthday`), rules delivery, and giveaways.

### 🛠️ Setup & Deployment

#### Prerequisites
- Node.js (v16.x or higher)
- A Discord Bot Token
- A Google Gemini API Key or Groq API Key

#### Cloud Deployment (e.g., bot-hosting.net)
1. Upload all workspace project files directly onto your host file manager.
2. Ensure your environmental startup variable is configured: `STARTUP_FILE=index.js`.
3. Save your private API keys securely within the dashboard environment variables.

---

## 📂 Structure & Architecture

```text
commands/
  admin/     → Outils de gestion administrateur / Admin management tools
  public/    → Commandes pour les membres / Regular user interaction endpoints
  games/     → Moteur des mini-jeux / Entertainment engine & mini-games
  utility/   → Système d'aide et traduction / Help maps & localization modules
events/      → Événements Discord (counting, salons, messages...) / System event streams
utils/       → Base de données SQLite et scripts / Core SQLite controllers
data/        → Fichiers de stockage SQLite locaux / Persistent local SQLite data stores
```

## 📦 Dépendances Principales / Main Dependencies

- **discord.js v14** — Interface principale avec l'API Discord / Main Discord API wrapper
- **better-sqlite3** — Gestion de base de données ultra-rapide / High-performance secure database framework
- **canvacard** — Génération d'images à la volée (profil/XP) / On-the-fly automated graphic creation system
- **discord-gamecord** — Pack de mini-jeux interactifs embarqués / Pre-built interactive mini-games
- **discord-html-transcripts** — Générateur d'archives de tickets HTML / Professional HTML transcript compilation engine

---
*Developed for the **Gaming Outlaws Discord** community.*


