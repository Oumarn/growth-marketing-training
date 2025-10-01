# Système de Génération PDF - Formation Growth Marketing

## Vue d'ensemble

Ce système permet de transformer automatiquement tout le contenu des cours du mini-site en PDF optimisé pour l'impression. Il génère des documents professionnels avec une mise en page adaptée, une pagination intelligente et une lisibilité maximale.

## Fonctionnalités

### ✅ Génération PDF
- **PDF par module** : Chaque module peut être téléchargé individuellement
- **PDF complet** : Tous les modules dans un seul document
- **Optimisation automatique** : Mise en page adaptée pour l'impression A4
- **Table des matières** : Navigation facilité avec liens internes
- **Pagination automatique** : Headers/footers avec numérotation

### ✅ Optimisations pour l'impression
- **Format A4** : Dimensions standardisées (210 × 297 mm)
- **Marges professionnelles** : 20mm haut/bas, 15mm droite/gauche
- **Typographie optimisée** : Police Inter, tailles adaptées (11pt base)
- **Gestion des sauts de page** : Évite les coupures dans les sections importantes
- **Couleurs print-friendly** : Conversion automatique pour économiser l'encre

### ✅ Mise en page intelligente
- **Page de couverture** : Logo, titre, date de génération
- **Table des matières** : Vue d'ensemble avec durées et objectifs
- **Headers de modules** : Numérotation et informations clés
- **Callout boxes** : Encadrés pour les informations importantes
- **Suppression des éléments interactifs** : Boutons et animations masqués

## Architecture Technique

### API Routes
```
/api/generate-pdf
├── GET ?module=slug     # PDF d'un module spécifique
└── POST                 # PDF de la formation complète
```

### Composants
```
src/components/
├── PDFGenerator.tsx          # Interface utilisateur
├── HydrationFix.tsx         # Correction d'hydratation
└── modules/
    └── ModuleContentRenderer.tsx
```

### Pages spécialisées
```
src/app/
├── print/page.tsx           # Page optimisée pour le rendu PDF
└── api/generate-pdf/route.ts # API de génération
```

### Styles
```css
/* globals.css */
@page { size: A4; margin: 20mm 15mm; }
.print-container { /* Styles spécifiques print */ }
.print-module-title { font-size: 20pt; }
.avoid-break { page-break-inside: avoid; }
```

## Utilisation

### Interface utilisateur
Le système est accessible via des boutons dans :
- **Page modules** (`/modules`) : PDF complet de la formation
- **Pages de module individuelles** : PDF du module + PDF complet

### Intégration manuelle
```javascript
import PDFGenerator from '@/components/PDFGenerator';

// Dans un module spécifique
<PDFGenerator moduleSlug="module-1/introduction-growth-marketing" />

// PDF complet uniquement
<PDFGenerator />
```

### API directe
```javascript
// PDF d'un module
const response = await fetch('/api/generate-pdf?module=module-1/introduction-growth-marketing');
const blob = await response.blob();

// PDF complet
const response = await fetch('/api/generate-pdf', {
  method: 'POST',
  body: JSON.stringify({ modules: ['module-1/...', 'module-2/...'] })
});
```

## Configuration

### Variables d'environnement
```env
NODE_ENV=production          # Pour l'URL de base du PDF
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

### Options Puppeteer
```javascript
{
  format: 'a4',
  printBackground: true,
  margin: { top: '20mm', right: '15mm', bottom: '20mm', left: '15mm' },
  displayHeaderFooter: true,
  preferCSSPageSize: false
}
```

## Optimisations appliquées

### 📄 Lisibilité maximale
- **Justification du texte** : Alignement propre sur A4
- **Interlignage** : 1.4 pour une lecture confortable
- **Hiérarchie typographique** : H1-H4 avec tailles adaptées
- **Contraste** : Texte noir sur fond blanc

### 🎯 Gestion des pages
- **Page breaks intelligents** : Évite les coupures dans les sections
- **Headers/footers** : Titre du module + pagination
- **Table des matières** : Liens vers les sections
- **Page de couverture** : Présentation professionnelle

### 🎨 Adaptation visuelle
- **Suppression des animations** : CSS transitions désactivées
- **Conversion des gradients** : Couleurs solides pour l'impression
- **Masquage des éléments interactifs** : Boutons et quiz cachés
- **Optimisation des images** : Redimensionnement automatique

### 📱 Responsive print
- **Grid layouts** : Conversion en blocs pour l'impression
- **Flexbox adaptatif** : Mise en page linéaire
- **Spacing optimisé** : Marges en points (pt) pour la précision

## Dépendances

```json
{
  "puppeteer": "^21.x",
  "@types/puppeteer": "^5.x"
}
```

## Exemples de sortie

### Structure du PDF complet
1. **Page de couverture** - Logo FastLearn + titre + date
2. **Table des matières** - Liste des 7 modules avec description
3. **Module 1** - Introduction Growth Marketing (25-30 pages)
4. **Module 2** - Framework AAARRR (30-35 pages)
5. **Module 3** - Cas pratiques (20-25 pages)
6. **Module 4** - KPIs Dashboard (25-30 pages)
7. **Module 5** - Expérimentation (30-35 pages)
8. **Module 6** - Outils no-code (25-30 pages)
9. **Module 7** - IA par canal (30-35 pages)
10. **Page de fin** - Félicitations + prochaines étapes

### Nommage des fichiers
- Module individuel : `module-1-introduction-growth-marketing-cours.pdf`
- Formation complète : `formation-growth-marketing-complete.pdf`

## Résolution de problèmes

### Erreurs courantes
1. **Timeout Puppeteer** : Augmenter `timeout: 60000`
2. **Mémoire insuffisante** : Redémarrer le processus Node.js
3. **Styles manquants** : Vérifier les imports CSS
4. **Images non chargées** : Attendre `networkidle0`

### Performance
- **Génération module** : ~10-15 secondes
- **PDF complet** : ~45-60 secondes
- **Taille fichier** : 15-25 MB pour la formation complète

Ce système offre une solution complète pour transformer le contenu web en documentation PDF professionnelle, optimisée pour l'impression et la consultation hors ligne.
