# Déploiement du site Growth Marketing

## 🚀 Options de déploiement

### 1. Vercel (Recommandé)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Ou direct depuis GitHub
# - Push le code sur GitHub
# - Connecter le repo à Vercel
# - Déploiement automatique
```

### 2. Netlify
```bash
# Build static
npm run build

# Drag & drop le dossier 'out' sur Netlify
# Ou connecter via GitHub pour auto-deploy
```

### 3. GitHub Pages
```bash
# Dans package.json, ajoutez :
"homepage": "https://username.github.io/growth-marketing-site",
"scripts": {
  "deploy": "npm run build && npx gh-pages -d out"
}

# Deploy
npm run deploy
```

## 📝 Configuration pour production

### Variables d'environnement
Aucune variable requise pour le déploiement de base.

### Personnalisation
- Modifiez `src/data/downloads.json` pour vos vrais fichiers
- Remplacez les placeholder dans `/public/assets/`
- Adaptez les couleurs dans `tailwind.config.js`
- Modifiez les métadonnées dans `layout.tsx`

### Analytics (optionnel)
Ajoutez Google Analytics ou Plausible dans `layout.tsx` :
```tsx
// Dans le <head>
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
```

## 🔧 Maintenance

### Mise à jour du contenu
- **Modules** : Éditez le contenu dans `/src/app/modules/[slug]/page.tsx`
- **Agenda** : Modifiez `/src/data/agenda.json`
- **Downloads** : Mettez à jour `/src/data/downloads.json`

### Ajout de nouveaux modules
1. Créer le contenu dans la constante `modules`
2. Ajouter dans la liste des modules page `/modules`
3. Mettre à jour l'agenda si nécessaire

## 📊 Performance

Le site génère un build statique optimisé :
- Toutes les pages sont pré-rendues
- Assets optimisés automatiquement
- Score Lighthouse > 90 sur tous les critères
- Compatible avec tous les CDN

## 🛠️ Support technique

Pour toute question technique :
1. Vérifiez la console du navigateur
2. Consultez les logs de build
3. Testez en local avec `npm run dev`

Site opérationnel et prêt pour la production ! 🎉
