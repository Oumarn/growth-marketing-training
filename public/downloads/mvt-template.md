# Template Test Multivarié (MVT)

## 📊 Principe du Test Multivarié
Le MVT teste simultanément plusieurs éléments d'une page pour identifier les meilleures combinaisons et comprendre les interactions entre facteurs.

## 🎯 Configuration de l'Expérience

### Informations Générales
- **Nom du projet** : [Nom descriptif]
- **Page/Flow testé** : [URL ou processus]
- **Date de début** : [JJ/MM/AAAA]
- **Propriétaire** : [Nom de l'équipe/personne]
- **Objectif** : [KPI principal à optimiser]

### Définition des Facteurs à Tester

#### Facteur 1: [Ex: Titre/Headline]
- **Position** : [Above fold, hero section, etc.]
- **Variante A** : [Version actuelle - baseline]
- **Variante B** : [Alternative 1]
- **Variante C** : [Alternative 2]

#### Facteur 2: [Ex: CTA Button]
- **Position** : [Primary CTA, secondary, etc.]
- **Variante A** : [Couleur/texte actuel]
- **Variante B** : [Alternative 1]
- **Variante C** : [Alternative 2]

#### Facteur 3: [Ex: Image/Visuel]
- **Position** : [Hero, section produit, etc.]
- **Variante A** : [Image actuelle]
- **Variante B** : [Alternative 1]

### Matrice des Combinaisons
*Avec 3 facteurs (3×3×2), nous avons 18 combinaisons possibles*

| Combinaison | Facteur 1 | Facteur 2 | Facteur 3 | Code |
|-------------|-----------|-----------|-----------|------|
| 1 (Control) | A         | A         | A         | AAA  |
| 2           | A         | A         | B         | AAB  |
| 3           | A         | B         | A         | ABA  |
| 4           | A         | B         | B         | ABB  |
| 5           | A         | C         | A         | ACA  |
| 6           | A         | C         | B         | ACB  |
| 7           | B         | A         | A         | BAA  |
| 8           | B         | A         | B         | BAB  |
| 9           | B         | B         | A         | BBA  |
| 10          | B         | B         | B         | BBB  |
| 11          | B         | C         | A         | BCA  |
| 12          | B         | C         | B         | BCB  |
| 13          | C         | A         | A         | CAA  |
| 14          | C         | A         | B         | CAB  |
| 15          | C         | B         | A         | CBA  |
| 16          | C         | B         | B         | CBB  |
| 17          | C         | C         | A         | CCA  |
| 18          | C         | C         | B         | CCB  |

## 📈 Calcul de Taille d'Échantillon

### Paramètres Statistiques
- **Baseline CVR** : [X%]
- **MDE souhaité** : [+X points ou +X%]
- **Niveau de confiance** : 95%
- **Puissance** : 80%
- **Nombre de combinaisons** : [18 dans notre exemple]

### Taille d'Échantillon Calculée
```
Échantillon A/B standard: [X] visiteurs
Facteur de correction MVT: ×[facteur] 
Échantillon total MVT: [Y] visiteurs
Échantillon par combinaison: [Y/18] visiteurs

Durée estimée:
Trafic quotidien: [Z] visiteurs/jour
Jours nécessaires: [Y/Z] jours
```

## 📊 Suivi des Performances

### Tableau de Bord Principal
| Combinaison | Visiteurs | Conversions | CVR | IC 95% | Lift vs Control |
|-------------|-----------|-------------|-----|--------|-----------------|
| AAA (Control)| [N]      | [N]         | X.X%| [X-Y%] | Baseline        |
| AAB         | [N]       | [N]         | X.X%| [X-Y%] | +/-X.X%         |
| ABA         | [N]       | [N]         | X.X%| [X-Y%] | +/-X.X%         |
| ... | ... | ... | ... | ... | ... |

### Analyse par Facteur (Effets Principaux)

#### Facteur 1 (Titre)
- **Variante A** : CVR moyen = X.X% (combinaisons AAA, AAB, ABA, ABB, ACA, ACB)
- **Variante B** : CVR moyen = X.X% (combinaisons BAA, BAB, BBA, BBB, BCA, BCB)
- **Variante C** : CVR moyen = X.X% (combinaisons CAA, CAB, CBA, CBB, CCA, CCB)
- **Gagnant** : [Variante X] avec +X.X% vs baseline

#### Facteur 2 (CTA)
- **Variante A** : CVR moyen = X.X%
- **Variante B** : CVR moyen = X.X%
- **Variante C** : CVR moyen = X.X%
- **Gagnant** : [Variante X] avec +X.X% vs baseline

#### Facteur 3 (Image)
- **Variante A** : CVR moyen = X.X%
- **Variante B** : CVR moyen = X.X%
- **Gagnant** : [Variante X] avec +X.X% vs baseline

## 🔄 Analyse des Interactions

### Interactions à 2 Facteurs
```
Titre A × CTA A: CVR = X.X%
Titre A × CTA B: CVR = X.X%
Titre A × CTA C: CVR = X.X%

Titre B × CTA A: CVR = X.X%
Titre B × CTA B: CVR = X.X%
Titre B × CTA C: CVR = X.X%

[...continuer pour toutes les paires]

ANALYSE: 
Y a-t-il des interactions significatives?
[ ] Oui - [Décrire lesquelles]
[ ] Non - Effets indépendants
```

### Interactions à 3 Facteurs
*Analyser si certaines combinaisons spécifiques surperforment vs somme des effets individuels*

## 💡 Exemple Pratique: Landing Page SaaS

### Configuration
```
Page: Landing page principale
Objectif: Augmenter taux d'inscription trial gratuit
Baseline CVR: 3.2%
Trafic: 500 visiteurs/jour

Facteur 1 - Headline:
A: "Automatisez votre marketing en 30min" (baseline)
B: "3x plus de leads qualifiés en 1 mois"
C: "Le CRM préféré de 50,000+ entrepreneurs"

Facteur 2 - CTA Principal:
A: "Essai gratuit 14 jours" (baseline)
B: "Démarrer maintenant"
C: "Voir une démo"

Facteur 3 - Preuve Sociale:
A: Logo clients (baseline)
B: Témoignage vidéo
```

### Résultats Fictifs Après 6 Semaines
```
GAGNANTS PAR FACTEUR:
- Headline B: +0.8 pts vs A
- CTA C: +0.4 pts vs A  
- Preuve B: +0.6 pts vs A

MEILLEURE COMBINAISON:
BCB: 5.1% CVR (+1.9 pts vs baseline AAA)
Soit +59% de lift!

INTERACTION NOTABLE:
Headline B + CTA C = super-additif
Effet attendu: +1.2 pts
Effet observé: +1.9 pts
Synergie: +0.7 pts
```

## 📋 Checklist de Déploiement

### Phase de Planification
- [ ] Hypothèses formulées pour chaque facteur
- [ ] Nombre de variantes optimal (max 3-4 par facteur)
- [ ] Calcul de taille d'échantillon validé
- [ ] Durée de test planifiée (minimum 2 semaines)
- [ ] Tracking configuré pour toutes les combinaisons

### Phase d'Exécution
- [ ] Répartition du trafic vérifiée (uniforme sur toutes les combinaisons)
- [ ] Métriques primaires et secondaires suivies
- [ ] Pas de biais de sélection ou de contamination
- [ ] Données collectées proprement (logs, analytics)

### Phase d'Analyse
- [ ] Significativité statistique atteinte
- [ ] Analyse des effets principaux
- [ ] Détection des interactions
- [ ] Validation des résultats (cohérence métier)

## 🎯 Template de Rapport Final

```
RÉSULTATS TEST MULTIVARIÉ

Période: [Date début] - [Date fin]
Page testée: [URL]
Trafic total: [X] visiteurs sur [Y] combinaisons
Métrique principale: [CVR inscription trial]

BASELINE (AAA):
Visiteurs: [N] | Conversions: [N] | CVR: X.X%

EFFETS PRINCIPAUX:
Facteur 1 (Headline):
- Variante A: X.X% (baseline)
- Variante B: X.X% (+X.X pts) ✓ GAGNANT
- Variante C: X.X% (+/-X.X pts)

Facteur 2 (CTA):
- Variante A: X.X% (baseline)  
- Variante B: X.X% (+/-X.X pts)
- Variante C: X.X% (+X.X pts) ✓ GAGNANT

Facteur 3 (Preuve Sociale):
- Variante A: X.X% (baseline)
- Variante B: X.X% (+X.X pts) ✓ GAGNANT

MEILLEURE COMBINAISON:
[BCB]: CVR = X.X% (+X.X pts vs baseline)
Lift total: +XX%
Confidence: XX%

INTERACTIONS DÉTECTÉES:
[Description des synergies observées]

RECOMMANDATIONS:
1. Déployer la combinaison gagnante [BCB]
2. Impact estimé: +XX% de conversions
3. Prochains tests: [Nouveaux facteurs à explorer]

LEARNINGS:
- [Insight 1]
- [Insight 2] 
- [Méthodologie]
```

## ⚠️ Pièges à Éviter

1. **Trop de combinaisons** → Échantillons trop petits
2. **Facteurs corrélés** → Interactions difficiles à interpréter  
3. **Duration trop courte** → Manque de puissance statistique
4. **Multiple testing** → Risque de faux positifs
5. **Ignorer les interactions** → Passer à côté de synergies

---

**Avantages MVT vs A/B Testing:**
✅ Teste plusieurs éléments simultanément
✅ Détecte les interactions entre facteurs
✅ Plus efficace qu'A/B tests séquentiels
✅ Compréhension holistique de la page

**Inconvénients MVT:**
❌ Besoin de beaucoup plus de trafic
❌ Complexité d'analyse plus élevée
❌ Risque de sur-optimisation locale
