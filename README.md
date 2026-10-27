# Outlaw A.I Bot (v2.1)

<p align="center">
  <img src="[https://www.rishabhsoft.com/wp-content/uploads/2025/11/AI-Chatbot-Development.jpg]" alt="Outlaw AI Logo" width="100"/>
</p>

A powerful, multilingual, and AI-driven Discord bot built for community management, engagement, and advanced automation. Originally tailored for the **Gaming Outlaws** community.

Un bot Discord puissant, multilingue et propulsé par l'IA, conçu pour la gestion de communauté, l'engagement et l'automatisation avancée. Initialement développé pour la communauté **Gaming Outlaws**.

---

## 🌍 Language / Langue
- [Français](#-version-française)
- [English](#-english-version)

---

## 🇫🇷 Version Française

### 🚀 Fonctionnalités
* **Intelligence Artificielle (Gemini) :** Intégration avancée de l'IA de Google pour interagir directement avec les membres (via mention).
* **Annonces IA (`/annonce`) :** Permet à l'IA de générer et poster un message structuré dans le salon de votre choix.
* **Formulaires Graphiques :** Création intuitive d'embeds personnalisés (`/embed`) et de rôles-réactions (`/reactionrole`) via des interfaces natives Discord.
* **Système Multilingue :** Gestion automatique des messages de bienvenue en plusieurs langues (FR/EN/ES/BR/RU) basée sur les rôles des utilisateurs.
* **Commandes Dynamiques (`/help`) :** Aide contextuelle qui s'adapte automatiquement à la langue et aux permissions (Admin/Modérateur vs Membre) de l'utilisateur.
* **Notifications YouTube :** Suivi multi-chaînes automatique avec formatage optimisé.
* **Utilitaires et Engagement :** Modules intégrés pour les anniversaires, les giveaways, la modération et les mini-jeux.

### 🛠️ Installation et Déploiement

#### Prérequis
* [Node.js](https://nodejs.org) (v16.x ou supérieure)
* Un jeton de bot Discord (Discord Bot Token)
* Une clé API Google Gemini

#### Configuration Locale
1. Clonez le dépôt (une fois configuré en privé) :
   ```bash
   git clone https://github.com
   cd Outlaw-A.I-bot-beta-
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Configurez vos variables d'environnement. Créez un fichier `.env` à la racine du projet (copiez le modèle de `.env.example`) :
   ```env
   DISCORD_TOKEN=votre_token_discord
   GEMINI_API_KEY=votre_cle_gemini
   ```
4. Lancez le bot :
   ```bash
   node index.js
   ```

#### Déploiement Cloud (Hébergement type bot-hosting.net)
1. Téléversez l'ensemble des fichiers du projet sur votre hébergeur.
2. Définissez la variable de démarrage : `STARTUP_FILE=index.js`.
3. Ajoutez vos clés secrètes (`DISCORD_TOKEN`, etc.) directement dans le panneau des variables d'environnement de votre hébergeur.

---

## 🇬🇧 English Version

### 🚀 Features
* **Artificial Intelligence (Gemini):** Advanced integration with Google AI allowing real-time chat interactions with users via bot mentions.
* **AI Announcements (`/annonce`):** Uses AI logic to generate and publish tailored text posts into a specific channel.
* **Interactive UI Forms:** Intuitive graphic setups for custom embeds (`/embed`) and interactive reaction roles (`/reactionrole`) utilizing Discord's modal forms.
* **Multilingual Welcomer:** Automated welcome system supporting multiple languages (FR/EN/ES/BR/RU) assigned according to user language roles.
* **Dynamic Help Menu (`/help`):** Context-aware help command altering its display dynamically based on the user's role permissions (Admin/Mod vs Regular Member) and language.
* **YouTube Notifications:** Multi-channel automated tracking with optimized English feed delivery.
* **Community Systems:** Built-in anniversary tracking, giveaways, moderation utilities, and mini-games.

### 🛠️ Setup & Deployment

#### Prerequisites
* [Node.js](https://nodejs.org) (v16.x or higher)
* A Discord Bot Token
* A Google Gemini API Key

#### Local Installation
1. Clone the repository:
   ```bash
   git clone https://github.com
   cd Outlaw-A.I-bot-beta-
   ```
2. Install the required Node packages:
   ```bash
   npm install
   ```
3. Set up environment variables. Create a `.env` file in the root directory (refer to `.env.example`):
   ```env
   DISCORD_TOKEN=your_discord_token_here
   GEMINI_API_KEY=your_gemini_key_here
   ```
4. Run the application:
   ```bash
   node index.js
   ```

#### Cloud Deployment (e.g., bot-hosting.net)
1. Upload all project files to your hosting provider.
2. Configure your startup command variable: `STARTUP_FILE=index.js`.
3. Fill your secret credentials (`DISCORD_TOKEN`, etc.) securely via your host's environment settings dashboard.

---

## 📈 Changelog (v2.1)
* Added modal interactive forms for both `/embed` and `/reactionrole`.
* Forced YouTube alert streams into English formatting.
* Reworked global welcome workflow to automatically inherit role-based language filters.
* Optimized `/help` sorting tree based on localization tags and permission tiers.
* Built-in `/annonce` module leveraging Gemini AI content generations.
* Enforced full application command synchronizations on startup.

---
*Developed for the **Gaming Outlaws Discord** community.*

https://discord.gg/W5eJqyukqn
