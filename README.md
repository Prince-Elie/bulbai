# BulBAI

Un site web moderne et professionnel pour présenter la plateforme BulBAI, construit avec les technologies web les plus récentes.

## 📋 Table des matières

- [À propos](#-à-propos)
- [Technologie](#-technologie)
- [Installation](#-installation)
- [Scripts disponibles](#-scripts-disponibles)
- [Structure du projet](#-structure-du-projet)
- [Contribution](#-contribution)
- [Support](#-support)

## 🎯 À propos

**BulBAI** est une plateforme innovante présentée via ce site vitrine moderne et performant. Le projet inclut :

- 📱 Une page d'accueil entièrement responsive
- 🎨 Un design professionnel et élégant avec Tailwind CSS
- ⚡ Performances optimales avec Next.js 15
- 🔒 Code TypeScript pour une sécurité de type maximale
- 🧩 Composants modulaires et réutilisables
- 📊 Section tarification
- 💬 Section contact et appel à l'action

## 🛠️ Technologie

Ce projet utilise un stack moderne et robuste :

| Technologie | Version | Utilité |
|---|---|---|
| **Next.js** | 15.4.10 | Framework React pour production |
| **React** | 19.1.1 | Libraire UI |
| **TypeScript** | 5.8.3 | Langage typé |
| **Tailwind CSS** | 4.1 | Framework CSS utilitaire |
| **PostCSS** | 8.5.6 | Transformateur CSS |
| **ESLint** | 9.32.0 | Linting et formatage |

## 📦 Installation

### Prérequis

- Node.js 18+ et npm (ou yarn/pnpm)
- Git

### Étapes d'installation

1. **Cloner le dépôt**

```bash
git clone https://github.com/votre-username/bulbai.git
cd bulbai
```

2. **Installer les dépendances**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Lancer le serveur de développement**

```bash
npm run dev
```

Le site sera accessible à `http://localhost:3000`

## 🚀 Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter :

| Commande | Utilité |
|---|---|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Construit l'application pour la production |
| `npm start` | Lance le serveur de production |
| `npm run lint` | Exécute ESLint pour vérifier le code |
| `npm run type-check` | Vérifie les types TypeScript |

## 📁 Structure du projet

```
bulbai/
├── public/                          # Fichiers statiques
│   ├── js/                         # Scripts JavaScript
│   ├── plain-assets/               # Ressources (images, logos, etc.)
│   ├── manifest.json               # Manifest PWA
│   └── robots.txt                  # Robots.txt SEO
├── src/
│   ├── components/
│   │   └── custom-components/      # Composants sections de la page
│   │       ├── IndexSectionCustomComponents1.tsx  # Navbar
│   │       ├── IndexSectionCustomComponents2.tsx  # Section 2
│   │       ├── IndexSectionCustomComponents3.tsx  # Section 3
│   │       ├── IndexSectionCustomComponents4.tsx  # Section 4
│   │       ├── IndexSectionCustomComponents5.tsx  # Section 5
│   │       ├── IndexSectionCustomComponents6.tsx  # Section 6
│   │       └── IndexSectionCustomComponentsPricing.tsx  # Tarification
│   ├── pages/
│   │   ├── _app.tsx                # Application Next.js
│   │   ├── _document.tsx           # Document HTML
│   │   └── index.tsx               # Page d'accueil
│   ├── styles/
│   │   └── globals.css             # Styles globaux
│   └── types/                      # Définitions TypeScript
├── next.config.js                  # Configuration Next.js
├── tailwind.config.js              # Configuration Tailwind CSS
├── tsconfig.json                   # Configuration TypeScript
├── postcss.config.js               # Configuration PostCSS
├── package.json                    # Dépendances et scripts
└── README.md                       # Ce fichier
```

## 🎨 Sections principales

La page d'accueil est composée de plusieurs sections modulaires :

1. **Navigation** - Barre de navigation responsive avec menu mobile
2. **Sections de contenu** - Sections 2-6 présentant la plateforme
3. **Tarification** - Tableau de tarification professionnel
4. **Appel à l'action** - Section contact et formulaire

## 🔧 Configuration

### Tailwind CSS

La configuration Tailwind est définie dans `tailwind.config.js`. Les couleurs personnalisées et les variables de design system sont configurées ici.

### TypeScript

Des fichiers de type personnalisés peuvent être ajoutés dans le dossier `src/types/`.

## 📝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add AmazingFeature'`)
4. Poussez la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 🏗️ Déploiement

Ce projet peut être déployé sur :

- **Vercel** (plateforme officielle Next.js) - [Documentation](https://vercel.com/docs)
- **Netlify** - Configuration simple via Git
- **Docker** - Utilisez un Dockerfile personnalisé
- **Serveur personnel** - Build statique avec `npm run build && npm start`

## 📞 Support

Pour toute question ou problème, veuillez :

- Consulter la [documentation Next.js](https://nextjs.org/docs)
- Ouvrir une issue sur le dépôt GitHub
- Contacter l'équipe BulBAI

## 📄 Licence

Ce projet est sous licence MIT. Consultez le fichier `LICENSE` pour plus de détails.

---

**Construit avec ❤️ par l'équipe BulBAI**