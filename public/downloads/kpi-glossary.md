# KPI Glossary - Growth Marketing

## Taxonomie des KPIs

### NSM (North Star Metric)
**Définition :** Métrique d'outcome qui capture la valeur durable créée pour les utilisateurs et l'entreprise.

**Exemples :**
- Utilisateurs activés / semaine
- ARR (Annual Recurring Revenue)
- Transactions réussies / jour
- Score NPS moyen

**Règles :**
- 1 seul NSM par équipe/produit
- Mesurable et actionnable
- Aligne tous les efforts

---

### Input Metrics
**Définition :** Leviers directs qui impactent la NSM. Actions → inputs → NSM.

**Exemples :**
- CVR visite→signup
- TTFV (Time To First Value)
- Activation rate
- Feature adoption rate

---

### Leading vs Lagging Metrics

**Leading (Prédictives) :**
- Changent AVANT la NSM
- Permettent d'anticiper
- Ex: Aha moment atteint, engagement D7

**Lagging (Confirmatives) :**
- Changent APRÈS la NSM  
- Confirment les tendances
- Ex: MRR, customer count, churn

---

## Formules AAARRR

### Acquisition
```
CVR visite→signup = signups ÷ visiteurs unique
CPA = dépenses marketing ÷ signups
Source quality = activés ÷ signups (par source)
```

### Activation  
```
Activation rate = users activés ÷ signups
TTFV médian = temps médian jusqu'au 1er value
Aha rate = users avec aha moment ÷ signups
```

### Retention
```
Stickiness = DAU ÷ MAU
CRR = (clients fin - nouveaux) ÷ clients début  
D7/D30 retention = actifs après X jours ÷ cohorte
```

### Revenue
```
Free→Paid CVR = payants ÷ free users
ARPU = revenus ÷ clients payants
Expansion rate = upsell revenue ÷ base revenue
```

### Referral
```
K-factor = (invitations ÷ user) × (CVR invités)
Referral rate = referrals envoyés ÷ users actifs
Viral coefficient = nouveaux users ÷ invitations
```

---

## Unit Economics

### CAC (Customer Acquisition Cost)
```
CAC = total dépenses acquisition ÷ nouveaux clients
```
**Pièges :**
- Inclure TOUS les coûts (ads, salaires, outils)
- Période cohérente (même mois)
- Segmenter par canal

### LTV (Lifetime Value)
```
LTV = (ARPU × marge brute %) ÷ churn rate mensuel
```
**Simplifié :** `LTV = ARPU ÷ churn × marge %`

**Pièges :**
- Utiliser la marge, pas le revenu brut
- Churn cohérent (même définition)
- LTV prédictif vs historique

### Ratios Clés
```
LTV:CAC ratio = LTV ÷ CAC
→ Cible : ≥ 3:1 (idéal 5:1+)

Payback period = CAC ÷ (ARPU × marge %)
→ Cible : ≤ 12 mois
```

---

## Segmentation Utile

### Par Acquisition
- Source (organic, paid, referral)
- Canal (Google, Facebook, email)
- Campagne/contenu

### Par Behavior  
- Plan/pricing tier
- Persona/ICP segment
- Usage pattern (power user, casual)

### Par Temporal
- Cohorte d'inscription
- Saisonnalité
- A/B test group

---

## Data Quality Checklist

### Tracking Plan
- [ ] Nomenclature cohérente (verbe + objet)
- [ ] Définitions documentées 
- [ ] Propriétés standardisées
- [ ] Versionning des événements

### Identité Utilisateur
- [ ] Mapping anonyme → identifié
- [ ] Déduplication cross-device
- [ ] Merge des sessions
- [ ] Privacy compliance

### QA Process
- [ ] Tests en environnement staging
- [ ] Validation post-déploiement  
- [ ] Monitoring des volumes
- [ ] Alerts sur anomalies

### Gouvernance
- [ ] Glossaire partagé et maintenu
- [ ] Ownership claire par métrique
- [ ] Refresh schedule défini
- [ ] Archive des définitions passées

---

## Anti-Patterns à Éviter

❌ **Dashboard Musée**
- Trop de métriques (>10)
- Pas de seuils = pas de décision
- Mélange vanity + actionable

❌ **Definition Drift**  
- Changer définitions sans notice
- Métriques incomparables dans le temps
- Pas de documentation

❌ **Analysis Paralysis**
- Segmentations infinies
- Dashboards sans owner
- Métriques sans actions possibles

❌ **Vanity Focus**
- Pageviews sans engagement
- Signups sans activation
- Revenue sans profitabilité

---

## Templates de Seuils

### Activation Rate
- 🟢 Vert : ≥ objectif +5%
- 🟠 Orange : objectif ± 5%  
- 🔴 Rouge : < objectif -5%

### Growth Rate (MoM)
- 🟢 Vert : ≥ 20% MoM
- 🟠 Orange : 10-20% MoM
- 🔴 Rouge : < 10% MoM

### Unit Economics
- 🟢 LTV:CAC ≥ 5:1
- 🟠 LTV:CAC 3-5:1
- 🔴 LTV:CAC < 3:1

---

*Dernière mise à jour : Module 4 - Growth Marketing Training*
