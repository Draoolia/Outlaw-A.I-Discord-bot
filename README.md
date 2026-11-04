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


⌠䝡浩湧⁏畴污睳⁂潴 併瑬慷⁁⹉⸩ਊ䉯琠浵汴楦潮捴楯渠灯畲⁄楳捯牤⃢肔⁶敲獩潮‱⸱〮《ਣ⌠貍⁌慮杵慧攠⼠䱡湧略૰龇꯰龇뜠䙒䕎䍈૰龇곰龇꜠䕎䝌䥓䠠ਊ⌣⃰龇꯰龇뜠噥牳楯渠䙲慮쎧慩獥ਊ⌣⌠骀⁆潮捴楯湮慬楴쎩猊ਣ⌣⌠꒖⁉湴敬汩来湣攠䅲瑩晩捩敬汥…⁁湮潮捥猊ⴠ⨪䥮瓃ꥧ牡瑩潮⁇敭楮椠⼠䝲潱›⨪⁉䄠慶慮揃ꥥ⁰潵爠楮瑥牡杩爠摩牥捴敭敮琠慶散⁬敳⁭敭扲敳⁶楡⁭敮瑩潮⁤甠扯琮ਭ‪⩁湮潮捥猠䥁 怯慮湯湣敠⤠㨪⨠䟃ꥮ쎩牡瑩潮⁡畴潭慴楱略⁤攠浥獳慧敳⁳瑲畣瑵狃ꥳ⁰慲⁬❉䄠摡湳⁬攠獡汯渠摥⁴潮⁣桯楸⸊ਣ⌣⌠鎈⁎楶敡畸…⁘倊ⴠ⨪䍡牴敳⁧牡灨楱略猠㨪⨠怯牡湫怠慦晩捨攠畮攠捡牴攠杲慰桩煵攠灥牳潮湡汩珃ꥥ 捡湶慣慲搩⁥琠怯汥癥池⁭潮瑲攠氧塐⸊ⴠ⨪䍯湦楧畲慴楯渠㨪⨠怯獥瑵瀭汥癥汳怠灯畲⁤쎩晩湩爠汥猠獡汯湳⁤❡湮潮捥Ⱐ汥猠捯畬敵牳⁤攠景湤⁥琠氧塐⁤攠扡獥⸊ⴠ⨪䅤浩湩獴牡瑩潮›⨪⁠⽸瀠獥瑠⁰潵爠浯摩晩敲⁬❘倠搧畮⁭敭扲攠整⁠⽸瀠牯汥怠灯畲⁬楥爠畮⁲쎴汥⃃ꀠ畮⁮楶敡甮ਭ⁇慩渠搧塐⁡畴潭慴楱略⁥琠晬畩摥⁰慲⁭敳獡来⁥湶潹쎩⸊ਣ⌣⌠身⁔楣步瑳…⁆潲浵污楲敳ਭ‪⩔楣步瑳⁡癡湣쎩猠㨪⨠卹獴쎨浥⁣潭灬整⁡癥挠柃ꥮ쎩牡瑩潮⁡畴潭慴楱略⁤❡牣桩癥猠整⁤攠瑲慮獣物灴猠䡔䵌⸊ⴠ⨪䙯牭畬慩牥猠䝲慰桩煵敳›⨪⁠⽥浢敤怠整⁠⽲敡捴楯湲潬敠⁰潵爠捲쎩敲⁤敳⁥浢敤猠整⁲쎴汥猭狃ꥡ捴楯湳⁶楡⁬❩湴敲晡捥⁄楳捯牤⸊ਣ⌣⌠躮⁊敵砠☠䑩癥牴楳獥浥湴ਭ‪⩊敵砠楮瓃ꥧ狃ꥳ›⨪⁠⽳湡步怬⁠⽳汯瑳怬⁠⽦楮摥浯橩怬⁠⽲灳怬⁠⽣潮湥捴㑠Ⱐ怯瑩捴慣瑯敠⁥琠怯慫楮慴潲怮ਭ‪⩆牥攠䝡浥猠㨪⨠怯晲敥条浥猠獥瑵灠⁰潵爠捯湦楧畲敲⁬敳⁡汥牴敳⁤攠橥畸⁧牡瑵楴猠慵瑯浡瑩煵敳 癩愠䝡浥牐潷敲⤮ਭ⁃潭浡湤敳⁤攠来獴楯渠㨠怯晲敥条浥猠灬慴敦潲浥獠Ⱐ怯獵楶牥怬⁠⽲整楲敲怬⁠⽬楳瑥怬⁠⽴敳瑠⸊ਣ⌣⌠鮠輠䵯擃ꥲ慴楯渠☠啴楬楴慩牥猊ⴠ⨪併瑩汳⁤攠浯擃ꥲ慴楯渠㨪⨠怯浯摠⁰潵爠柃ꥲ敲⁦慣楬敭敮琠汥猠慶敲瑩獳敭敮瑳 睡牮⤬⁭畴敳Ⱐ數捬畳楯湳⁯甠扡湮楳獥浥湴献ਭ‪⩇敳瑩潮⁤攠捯浭畮慵瓃ꤠ㨪⨠怯睥汣潭敠 扩敮癥湵攠浵汴楬楮杵攩Ⱐ怯牵汥獠⁯甠怯牥杬敭敮瑠Ⱐ怯扩牴桤慹怠⡡湮楶敲獡楲敳⤠整⁠⽧楶敡睡祠⸊ⴠ⨪䑩癥牴楳獥浥湴›⨪⁠⽭敭敠Ⱐ怯橯步怠整⁵渠浥湵⁠⽨敬灠⁤祮慭楱略⁥琠浵汴楬楮杵攮ਊ⌣⌠鮠輠䥮獴慬污瑩潮⁥琠䓃ꥰ汯楥浥湴ਊ⌣⌣⁐狃ꥲ敱畩猊ⴠ乯摥⹪猠⡶ㄶ⹸⁯甠獵烃ꥲ楥畲攩ਭ⁕渠橥瑯渠摥⁢潴⁄楳捯牤 恄䥓䍏剄彔佋䕎怩ਭ⁕湥⁣泃ꤠ䅐䤠䝯潧汥⁇敭楮椠⡠䝅䵉义彁偉彋䕙怩⁯甠䝲潱 恇剏兟䅐䥟䭅奠⤊ਣ⌣⌠䍯湦楧畲慴楯渠䱯捡汥਱⸠䍬潮攠汥⁤쎩烃둴›⁠杩琠捬潮攠桴瑰猺⼯杩瑨畢⹣潭怊㈮⁉湳瑡汬敺⁬敳⁤쎩灥湤慮捥猠㨠恮灭⁩湳瑡汬怊㌮⁃狃ꥥ稠畮⁦楣桩敲⁠⹥湶怠쎠⁬愠牡捩湥⁥琠慪潵瑥稠癯猠捬쎩猠⡠䑉千佒䑟呏䭅习Ⱐ恃䱉䕎呟䥄怬⁠䝕䥌䑟䥄怬⁠䝅䵉义彁偉彋䕙怩⸊㐮⁄쎩灬潩攠汥猠捯浭慮摥猠㨠恮潤攠摥灬潹ⵣ潭浡湤献橳怊㔮⁌慮捥⁬攠扯琠㨠恮潤攠楮摥砮橳怊ਣ⌣⌠䓃ꥰ汯楥浥湴⁃汯畤 數㨠扯琭桯獴楮朮湥琩਱⸠哃ꥬ쎩癥牳敺⁴潵猠汥猠晩捨楥牳⁤甠灲潪整⁳畲⁶潴牥⁰慮敬⁤❨쎩扥牧敭敮琮ਲ⸠䓃ꥦ楮楳獥稠污⁶慲楡扬攠摥⁤쎩浡牲慧攠㨠恓呁剔啐彆䥌䔽楮摥砮橳怮ਲ਼⸠䅪潵瑥稠癯猠癡物慢汥猠獥捲쎨瑥猠摩牥捴敭敮琠摡湳⁬❯湧汥琠≅湶楲潮湥浥湴∠摥⁬❨쎩扥牧敵爮ਣ⌠螬螧⁅湧汩獨⁖敲獩潮ਊ⌣⌠骀⁆敡瑵牥猊ਣ⌣⌠꒖⁁牴楦楣楡氠䥮瑥汬楧敮捥…⁁湮潵湣敭敮瑳ਭ‪⩇敭楮椠⼠䝲潱⁉湴敧牡瑩潮㨪⨠䅤癡湣敤⁁䤠捡灡扩汩瑩敳⁴漠捨慴⁷楴栠捯浭畮楴礠浥浢敲猠癩愠扯琠浥湴楯湳⸊ⴠ⨪䅉⁁湮潵湣敭敮瑳 怯慮湯湣敠⤺⨪⁁畴潭慴楣慬汹⁧敮敲慴敳⁡湤⁦潲浡瑳⁳瑲畣瑵牥搠灯獴猠楮瑯⁡湹⁴慲来琠捨慮湥氠畳楮朠䅉⁬潧楣⸊ਣ⌣⌠鎈⁌敶敬猠☠塐⁓祳瑥洊ⴠ⨪䝲慰桩捡氠䑩獰污示⨪⁠⽲慮歠⁳桯督慳敳⁶楳畡氠牡湫⁣慲摳 捡湶慣慲搩⁡湤⁠⽬敶敬怠瑲慣歳⁯湧潩湧⁰牯杲敳献ਭ‪⩃畳瑯洠䍯湦楧畲慴楯渺⨪⁠⽳整異⵬敶敬獠⁣潮晩杵牥猠慮湯畮捥浥湴⁲潯浳Ⱐ捵獴潭⁢慣歧牯畮摳Ⱐ慮搠獴慮摡牤⁘倠慬杯物瑨浳⸊ⴠ⨪䅤浩湩獴牡瑩潮㨪⨠怯硰⁳整怠慬瑥牳⁭敭扥爠浥瑲楣猠慮搠怯硰⁲潬敠⁬楮歳⁭楬敳瑯湥⁲潬敳⁤楲散瑬礠瑯⁬敶敬献ਊ⌣⌣⃰龎ꬠ呩捫整猠☠䥮瑥牡捴楯渠䙯牭猊ⴠ⨪䅤癡湣敤⁔楣步瑳㨪⨠䉵楬琭楮⁭潤畬慲⁴楣步琠獹獴敭⁷楴栠慵瑯浡瑥搠䡔䵌⁡牣桩癥⁬潧杩湧⁡湤⁴牡湳捲楰瑳⸊ⴠ⨪䥮瑥牡捴楶攠啉⁆潲浳㨪⨠䝲慰桩挠浯摡氠獥瑵灳⁦潲⁣畳瑯浩穥搠敭扥摤楮朠⡠⽥浢敤怩⁡湤⁢畴瑯渠牥慣瑩潮⁲潬敳 怯牥慣瑩潮牯汥怩⸊ਣ⌣⌠躮⁇慭敳…⁆畮⁍潤畬敳ਭ‪⩂畩汴⵩渠䝡浥猺⨪⁠⽳湡步怬⁠⽳汯瑳怬⁠⽦楮摥浯橩怬⁠⽲灳怬⁠⽣潮湥捴㑠Ⱐ怯瑩捴慣瑯敠Ⱐ慮搠怯慫楮慴潲怮ਭ‪⩆牥攠䝡浥猠䙥敤㨪⨠怯晲敥条浥猠獥瑵灠⁡畴潭慴敤⁧慭攠摥慬猠摩獴物扵瑩潮⁳祳瑥洠灵汬楮朠晲潭⁴桥⁇慭敲偯睥爠敮杩湥⸊ਣ⌣⌠鮠輠䵯摥牡瑩潮…⁕瑩汩瑩敳ਭ‪⩍潤敲慴楯渠䅲獥湡氺⨪⁠⽭潤怠桡湤汥猠獹獴敭⁦污杳Ⱐ景牭慬⁷慲湩湧猬⁴業敯畴猬⁫楣歳Ⱐ慮搠杬潢慬⁢慮献ਭ‪⩅湧慧敭敮琠卹獴敭猺⨪⁍畬瑩汩湧畡氠睥汣潭敲 怯睥汣潭敠⤬⁡捴楶攠扩牴桤慹⁴牡捫敲猠⡠⽢楲瑨摡祠⤬⁲畬敳⁤敬楶敲礬⁡湤⁧楶敡睡祳⸊ਣ⌣⃰龛ꃯ뢏⁓整異…⁄数汯祭敮琊ਣ⌣⌠偲敲敱畩獩瑥猊ⴠ乯摥⹪猠⡶ㄶ⹸⁯爠桩杨敲⤊ⴠ䄠䑩獣潲搠䉯琠呯步渊ⴠ䄠䝯潧汥⁇敭楮椠䅐䤠䭥礠潲⁇牯焠䅐䤠䭥礊ਣ⌣⌠䍬潵搠䑥灬潹浥湴 攮朮Ⱐ扯琭桯獴楮朮湥琩਱⸠啰汯慤⁡汬⁷潲歳灡捥⁰牯橥捴⁦楬敳⁤楲散瑬礠潮瑯⁹潵爠桯獴⁦楬攠浡湡来爮ਲ⸠䕮獵牥⁹潵爠敮癩牯湭敮瑡氠獴慲瑵瀠癡物慢汥⁩猠捯湦楧畲敤㨠恓呁剔啐彆䥌䔽楮摥砮橳怮ਲ਼⸠卡癥⁹潵爠灲楶慴攠䅐䤠步祳⁳散畲敬礠睩瑨楮⁴桥⁤慳桢潡牤⁥湶楲潮浥湴⁶慲楡扬敳⸊ਭⴭਊ⌣⃰龓舠却牵捴畲攠☠䅲捨楴散瑵牥ਊ恠恴數琊捯浭慮摳⼊†慤浩港††⃢蚒⁏畴楬猠摥⁧敳瑩潮⁡摭楮楳瑲慴敵爠⼠䅤浩渠浡湡来浥湴⁴潯汳ਠ⁰畢汩振††鈠䍯浭慮摥猠灯畲⁬敳⁭敭扲敳 ⁒敧畬慲⁵獥爠楮瑥牡捴楯渠敮摰潩湴猊†条浥猯††⃢蚒⁍潴敵爠摥猠浩湩⵪敵砠⼠䕮瑥牴慩湭敮琠敮杩湥…⁭楮椭条浥猊†畴楬楴礯†⃢蚒⁓祳瓃ꡭ攠搧慩摥⁥琠瑲慤畣瑩潮 ⁈敬瀠浡灳…⁬潣慬楺慴楯渠浯摵汥猊敶敮瑳⼠††⃢蚒⃃襶쎩湥浥湴猠䑩獣潲搠⡣潵湴楮本⁳慬潮猬⁭敳獡来献⸮⤠⼠卹獴敭⁥癥湴⁳瑲敡浳ੵ瑩汳⼠†††鈠䉡獥⁤攠摯湮쎩敳⁓兌楴攠整⁳捲楰瑳 ⁃潲攠卑䱩瑥⁣潮瑲潬汥牳੤慴愯††††鈠䙩捨楥牳⁤攠獴潣歡来⁓兌楴攠汯捡畸 ⁐敲獩獴敮琠汯捡氠卑䱩瑥⁤慴愠獴潲敳੠恠ਊ⌣⃰龓꘠䓃ꥰ敮摡湣敳⁐物湣楰慬敳 ⁍慩渠䑥灥湤敮捩敳ਊⴠ⨪摩獣潲搮橳⁶ㄴ⨪⃢肔⁉湴敲晡捥⁰物湣楰慬攠慶散⁬❁偉⁄楳捯牤 ⁍慩渠䑩獣潲搠䅐䤠睲慰灥爊ⴠ⨪扥瑴敲⵳煬楴攳⨪⃢肔⁇敳瑩潮⁤攠扡獥⁤攠摯湮쎩敳⁵汴牡⵲慰楤攠⼠䡩杨⵰敲景牭慮捥⁳散畲攠摡瑡扡獥⁦牡浥睯牫ਭ‪⩣慮癡捡牤⨪⃢肔⁇쎩滃ꥲ慴楯渠搧業慧敳⃃ꀠ污⁶潬쎩攠⡰牯晩氯塐⤠⼠佮⵴桥ⵦ汹⁡畴潭慴敤⁧牡灨楣⁣牥慴楯渠獹獴敭ਭ‪⩤楳捯牤ⵧ慭散潲搪⨠鐠偡捫⁤攠浩湩⵪敵砠楮瑥牡捴楦猠敭扡牱痃ꥳ ⁐牥ⵢ畩汴⁩湴敲慣瑩癥⁭楮椭条浥猊ⴠ⨪摩獣潲搭桴浬⵴牡湳捲楰瑳⨪⃢肔⁇쎩滃ꥲ慴敵爠搧慲捨楶敳⁤攠瑩捫整猠䡔䵌 ⁐牯晥獳楯湡氠䡔䵌⁴牡湳捲楰琠捯浰楬慴楯渠敮杩湥ਊⴭⴊ⩄敶敬潰敤⁦潲⁴桥‪⩇慭楮朠併瑬慷猠䑩獣潲搪⨠捯浭畮楴礮⨊ਊ
