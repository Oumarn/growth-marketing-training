import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import DownloadCTA from '@/components/DownloadCTA';
import ProgressBar from '@/components/ProgressBar';
import { getModuleBySlug } from '@/lib/modules';
import StepperNav from '@/components/StepperNav';
import PrevNextNav from '@/components/PrevNextNav';
import AtelierCallouts from '@/components/AtelierCallouts';
import MarkCompleteButton from '@/components/MarkCompleteButton';
import Breadcrumbs from '@/components/Breadcrumbs';

function getStatusInfo(status: string) {
  switch (status) {
    case 'nouveau':
      return { label: 'Nouveau', color: 'bg-green-100 text-green-800' };
    case 'mis-a-jour':
      return { label: 'Mis à jour', color: 'bg-blue-100 text-blue-800' };
    case 'unchanged':
    default:
      return { label: 'Disponible', color: 'bg-gray-100 text-gray-800' };
  }
}

const modules = {
  '1-intro': {
    component: null,
    title: "Module 1 — Introduction au Growth Marketing",
    duration: "1h",
    status: "unchanged" as const,
    prev: null,
    next: "2-aaarr",
    content: `
# Module 1 — Introduction au Growth Marketing

## 🎯 Qu'est-ce que le Growth Marketing ?

Le Growth Marketing est une approche méthodologique du marketing qui se concentre sur l'optimisation de l'ensemble du tunnel de conversion client. Contrairement au marketing traditionnel qui se concentre principalement sur l'acquisition, le Growth Marketing s'intéresse à tous les aspects du parcours client.

## 📊 Les 5 piliers du Growth Marketing

### 1. Data-driven (Guidé par les données)
- Chaque décision est basée sur des données
- Tests A/B systématiques
- Mesure constante des KPIs

### 2. Cross-fonctionnel
- Collaboration entre marketing, produit, développement
- Vision holistique du parcours client
- Optimisation end-to-end

### 3. Expérimentation
- Culture du test permanent
- Hypothèses mesurables
- Itérations rapides

### 4. Scalabilité
- Focus sur les canaux reproductibles
- Automatisation des processus
- Growth loops durables

### 5. Rétention-first
- Coût d'acquisition vs valeur vie client
- Product-market fit avant scaling
- Optimisation de la rétention

## 🔄 Différences avec le Marketing Traditionnel

| Aspect | Marketing Traditionnel | Growth Marketing |
|--------|----------------------|-----------------|
| **Focus** | Acquisition | Funnel complet (AAARRR) |
| **Mesure** | Vanity metrics | Métriques business |
| **Approche** | Campaign-based | Always-on testing |
| **Collaboration** | En silos | Cross-fonctionnel |
| **Horizon** | Court terme | Long terme + quick wins |

## 📈 Pourquoi maintenant ?

1. **Digital-first** : Tout est mesurable en temps réel
2. **Competition** : Saturation des canaux traditionnels
3. **Customer expectations** : Expérience personnalisée
4. **Technology** : Outils no-code accessibles
5. **Data availability** : Plus de données que jamais

## 🎓 Objectifs de cette formation

À la fin de ces 14h, vous saurez :
- ✅ Diagnostiquer un funnel avec le framework AAARRR
- ✅ Identifier les points faibles et opportunités
- ✅ Mettre en place des tests A/B
- ✅ Automatiser vos campagnes avec les outils no-code
- ✅ Utiliser l'IA pour optimiser vos performances
- ✅ Construire des systèmes de croissance durables

**Let's grow! 🚀**
    `
  },
  '2-aaarr': {
    component: null,
    title: "Module 2 — Framework AAARRR & Diagnostic Funnel",
    duration: "2h",
    status: "mis-a-jour" as const,
    prev: "1-intro",
    next: "3-cas-pratique",
    content: `
# Module 2 — Framework AAARRR & Diagnostic Funnel

## 🏴‍☠️ AAARRR : Les Pirates Metrics

Le framework AAARRR (aussi appelé Pirates Metrics) est **LA** méthode de référence pour analyser et optimiser votre funnel de croissance. Créé par Dave McClure, ce framework décompose le parcours client en 6 étapes clés.

## 📊 Les 6 étapes d'AAARRR

### 🎯 **A — Awareness (Conscience)**
**Définition :** Les utilisateurs découvrent votre produit/service

**KPIs clés :**
- Impressions publicitaires
- Trafic organique (SEO)
- Mentions sur les réseaux sociaux
- Portée des campagnes
- Brand queries (recherches de marque)

**Questions à se poser :**
- Qui est votre audience cible ?
- Sur quels canaux sont-ils présents ?
- Quel message résonne avec eux ?
- Comment mesurez-vous la notoriété ?

### 🚀 **A — Acquisition (Acquisition)**
**Définition :** Les visiteurs arrivent sur votre site/app

**KPIs clés :**
- Visiteurs uniques
- Sessions
- Trafic par canal (Organic, Paid, Direct, Referral)
- Coût par acquisition (CPA)
- Quality Score des campagnes

**Canaux d'acquisition principaux :**
- **SEO** : Trafic organique Google
- **SEA** : Google Ads, Bing Ads
- **Social Media** : Facebook, LinkedIn, TikTok
- **Email Marketing** : Newsletters, sequences
- **Partnerships** : Affiliés, influenceurs
- **PR** : Relations presse, articles

### ✨ **A — Activation (Activation)**
**Définition :** Les utilisateurs réalisent leur première action clé

**KPIs clés :**
- Taux de conversion inscription
- Taux de complétion onboarding
- Time to first value (TTFV)
- Actions critiques réalisées
- Taux d'activation par cohorte

**Exemples d'événements d'activation :**
- **E-commerce** : Premier achat
- **SaaS** : Création du premier projet
- **Media** : Lecture du premier article
- **App mobile** : Première utilisation de la feature principale

### 💰 **R — Revenue (Revenus)**
**Définition :** Les utilisateurs activés génèrent des revenus

**KPIs clés :**
- Conversion rate (visiteur → payant)
- Revenue per user (RPU)
- Average order value (AOV)
- Monthly recurring revenue (MRR)
- Customer acquisition cost (CAC)

**Optimisations fréquentes :**
- Pricing strategy
- Upsell/cross-sell
- Payment friction
- Promo codes efficiency
- Checkout abandonment

### 🔄 **R — Retention (Rétention)**
**Définition :** Les clients continuent d'utiliser votre produit

**KPIs clés :**
- Retention rate (1J, 7J, 30J, 90J)
- Churn rate mensuel/annuel
- Session frequency
- Feature adoption rate
- Net Promoter Score (NPS)

**Métriques par industry :**
- **E-commerce** : Repeat purchase rate
- **SaaS** : Monthly/Annual churn
- **Media** : Daily/Monthly active users
- **App** : Session length, retention curves

### 📢 **R — Referral (Recommandation)**
**Définition :** Les clients satisfaits recommandent votre produit

**KPIs clés :**
- Referral rate (% users qui partagent)
- Viral coefficient (K-factor)
- Word-of-mouth mentions
- Social shares
- User-generated content (UGC)

**Mécaniques de référence :**
- Programme de parrainage
- Incentives pour le partage
- Social proof visible
- Gamification du partage
- Contenu facilement partageable

## 🔍 Diagnostic de Funnel : Méthodologie

### Étape 1 : Collecter les données

**Tools essentiels :**
- **Google Analytics 4** : Comportement web
- **Mixpanel/Amplitude** : Événements produit
- **Hotjar** : Heatmaps et session recordings
- **Surveys** : Feedback utilisateurs qualitative

### Étape 2 : Calculer les taux de conversion

**Flux de conversion :**
- Awareness → Acquisition : Reach → Traffic
- Acquisition → Activation : Visitors → Activated Users  
- Activation → Revenue : Activated → Paying
- Revenue → Retention : New Customers → Returning  
- Retention → Referral : Active Users → Referrers

### Étape 3 : Identifier les goulots d'étranglement

**Red flags à surveiller :**
- Taux de conversion < benchmarks industry
- Drop-off important entre étapes
- Coût d'acquisition qui augmente
- Retention qui diminue
- Référence quasi inexistante

### Étape 4 : Prioriser les optimisations

**Framework ICE (Impact × Confidence × Ease) :**
- **Impact** : Quel gain potentiel ? (1-10)
- **Confidence** : Quelle certitude de succès ? (1-10)  
- **Ease** : Quelle facilité d'implémentation ? (1-10)

**Score ICE = (I × C × E) / 1000**

## 📈 Cas Pratique : E-commerce Mode

**Situation initiale :**
- 100K visiteurs/mois
- 2% conversion
- Panier moyen 75€
- 15% repeat purchase

**Analyse AAARRR :**

| Étape | Métrique | Valeur Actuelle | Benchmark | Gap |
|-------|----------|-----------------|-----------|-----|
| **Awareness** | Brand searches | 5K/mois | 10K/mois | -50% |
| **Acquisition** | Traffic | 100K/mois | ✅ OK | - |
| **Activation** | Inscription newsletter | 8% | 15% | -47% |
| **Revenue** | Conversion rate | 2% | 3.5% | -43% |
| **Retention** | Repeat purchase | 15% | 25% | -40% |
| **Referral** | Social shares | 0.5% | 2% | -75% |

**Plan d'action priorisé :**

1. **Revenue optimization** (ICE: 9×8×7 = 504)
   - A/B test checkout process
   - Optimize product pages
   - Reduce cart abandonment

2. **Activation boost** (ICE: 8×9×8 = 576)
   - Newsletter popup optimization
   - Welcome email sequence
   - First purchase incentive

3. **Retention program** (ICE: 9×7×6 = 378)
   - Post-purchase email flow
   - Loyalty program
   - Personalized recommendations

## 🛠️ Tools pour le Diagnostic

### Analytics & Tracking
- **Google Analytics 4** (gratuit)
- **Mixpanel** (payant, event-based)
- **Amplitude** (freemium, product analytics)

### Heatmaps & User Experience  
- **Hotjar** (recordings + heatmaps)
- **FullStory** (session replay premium)
- **Crazy Egg** (heatmaps + A/B tests)

### Surveys & Feedback
- **Typeform** (sondages stylés)
- **Google Forms** (gratuit, basique)
- **Intercom** (chat + surveys)

### Funnel Analysis
- **Funnelytics** (visual funnel mapping)
- **Google Analytics Goals** (gratuit)
- **Facebook Analytics** (mobile apps)

## 🎯 Quick Wins par Étape

### Awareness
- **SEO audit** : optimiser title/meta
- **Google My Business** : compléter le profil
- **PR low-cost** : pitch journalistes niche

### Acquisition  
- **Landing pages** dédiées par canal
- **Retargeting** visiteurs non convertis
- **Content marketing** : blog SEO-friendly

### Activation
- **Onboarding** simplifié (moins d'étapes)
- **Welcome series** email (3-5 emails)
- **Social proof** visible (testimonials)

### Revenue
- **Checkout optimization** (guest checkout)
- **Payment methods** multiples
- **Urgency/scarcity** (stocks limités)

### Retention
- **Email post-achat** (merci + next steps)
- **Retargeting** clients existants
- **Customer support** proactif

### Referral
- **Programme parrainage** simple
- **Social sharing** facilité
- **UGC encouragement** (photos clients)

## 📚 Exercice Pratique

**Votre mission :** Analysez votre propre funnel AAARRR

**Étapes :**
1. **Définissez** vos événements clés pour chaque étape
2. **Collectez** les données des 3 derniers mois  
3. **Calculez** les taux de conversion entre étapes
4. **Identifiez** les 2 plus gros goulots d'étranglement
5. **Proposez** 3 quick wins avec scoring ICE

**Template de diagnostic** fourni dans les ressources téléchargeables ! 📊

---

**Next step :** Module 3 où nous analyserons les cas pratiques de Dropbox, HubSpot et autres success stories ! 🚀
    `
  },
  '3-cas-pratique': {
    component: null,
    title: "Module 3 — Cas pratiques emblématiques",
    duration: "2h",
    status: "mis-a-jour" as const,
    prev: "2-aaarr",
    next: "4-kpis-automation",
    content: `
# Module 3 — Cas pratiques emblématiques

## 🏆 Les Plus Grandes Success Stories Growth

Dans ce module, nous analysons les stratégies Growth Marketing qui ont propulsé des startups vers le succès mondial. Chaque cas pratique est décortiqué selon le framework AAARRR pour identifier les leviers clés.

## 📁 Cas #1 : Dropbox - Le Referral Marketing de Génie

### 📊 Contexte Initial (2008)
- **Problème** : Marché saturé du stockage cloud
- **Concurrents** : Google Drive, Microsoft OneDrive, Box
- **Challenge** : CAC élevé sur les canaux traditionnels
- **Budget** : Limité pour une startup

### 🚀 La Stratégie Growth

#### **Awareness : Content Marketing + Demo**
- **Vidéo explicative** simple et virale (3M+ vues)
- **Landing page** claire avec value proposition
- **PR timing** parfait (launch sur Hacker News)

#### **Acquisition : Product-Led Growth**
- **Freemium model** : 2GB gratuits
- **Signup friction** minimum (email + password)
- **Onboarding** intégré au produit

#### **Activation : Aha Moment Rapide**
- **Premier fichier** synchronisé en <2 minutes
- **Tutorial** intégré pas à pas
- **Cross-device** experience immédiate

#### **Revenue : Upgrade Naturel**
- **Limite soft** : 2GB → upgrade incité
- **Pricing** transparent et fair
- **Business plans** pour équipes

#### **Retention : Sync Addiction**
- **Habit formation** : sync quotidien
- **Cross-platform** : desktop + mobile
- **Reliability** : 99.9% uptime

#### **Referral : Le Coup de Génie 🔥**

**Le Programme :**
- **250MB** gratuits pour le parrain
- **250MB** gratuits pour le filleul  
- **Max 16GB** via parrainage (32 amis)
- **One-click sharing** depuis l'app

**Résultats :**
- **+60% signups** via referral
- **CAC divisé par 5** vs canaux payants
- **Viral coefficient** : 0.47 (excellent)
- **35% des users** ont invité quelqu'un

### 📈 Impact Business

**Croissance explosive :**
- 2008 : 100K users
- 2010 : 4M users (+4000%)
- 2012 : 100M users (+2500%)
- 2018 : 500M users

**Learnings clés :**
1. **Product-market fit d'abord** → puis growth hacks
2. **Referral win-win** : valeur pour les 2 parties
3. **Friction minimum** : 1-click invite
4. **Limit scarcity** : max 16GB créé l'urgency

---

## 🎯 Cas #2 : HubSpot - Inbound Marketing & Content

### 📊 Contexte Initial (2006)
- **Marché** : CRM/Marketing saturé (Salesforce, etc.)
- **Positioning** : "Inbound vs Outbound Marketing"
- **Challenge** : Éduquer le marché sur une nouvelle approche

### 🚀 La Stratégie Growth

#### **Awareness : Thought Leadership**
- **Blog** : 4-5 articles/jour sur marketing
- **eBooks** : Guides détaillés (50+ pages)
- **Webinars** : Formation gratuite hebdomadaire
- **Conférences** : INBOUND event (25K+ attendees)

#### **Acquisition : SEO + Content Hub**
- **300K+ pages** indexées Google
- **Keywords** long-tail dans chaque article  
- **Tools gratuits** : Website Grader, Email Signature Generator
- **Templates** : Modèles email, landing pages

#### **Activation : Education-First**
- **HubSpot Academy** : Certification gratuite
- **Onboarding** : 6 semaines de formation
- **Success metrics** : Usage features vs revenue

#### **Revenue : Land & Expand**
- **Freemium** : CRM gratuit pour toujours
- **Tiers pricing** : Starter → Professional → Enterprise
- **Upsell natural** : plus de contacts = upgrade

#### **Retention : Continuous Education**
- **Blog** : Nouvelle stratégie chaque semaine
- **Community** : HubSpot User Groups
- **Support** : Réponse <2h garantie

#### **Referral : Partner Program**
- **Agencies** : 20% commission récurrente
- **Consultants** : Certification + leads
- **Integration** : App marketplace

### 📈 Impact Business

**Croissance soutenue :**
- **Blog** : 7M+ visiteurs/mois
- **Customers** : 100K+ entreprises
- **Revenue** : $1.3B (2021)
- **Market cap** : $20B+

**Metrics impressionnantes :**
- **80% organic traffic** (vs 20% paid)
- **CAC recovery** : 12 mois
- **Net retention** : 108%
- **NPS Score** : 33 (très bon)

### 🎓 Learnings HubSpot

1. **Content is king** : 10 ans d'articles → moats défensif
2. **Education marketing** : enseigner avant de vendre
3. **Freemium strategy** : CRM gratuit = acquisition massive
4. **Product-led growth** : tool usage → upgrade natural

---

## 🍴 Cas #3 : Airbnb - Growth Hacking Multi-Canal

### 📊 Contexte Initial (2008)
- **Marché** : Hôtellerie traditionnelle dominante
- **Network effects** : Besoin hosts ET guests simultanément  
- **Trust issue** : Dormir chez l'inconnu = friction énorme

### 🚀 La Stratégie Growth

#### **Awareness : PR Stunts + Events**
- **2008 élections** : Obama/McCain cereal boxes
- **Design attention** : Appartements photogéniques
- **Press coverage** : Histoire founders "cereal entrepreneurs"

#### **Acquisition : Cross-Platform Hacking**

**Le Hack Craigslist 🔥**
- **Auto-post** : Listings Airbnb → Craigslist automatiquement
- **Email scraping** : Récupération emails hosts Craigslist  
- **Cross-posting** : "Également disponible sur Airbnb"
- **Growth impact** : +500% listings en 6 mois

**Autres canaux :**
- **SEO** : Page par ville/quartier
- **Referral** : $25 host + $25 guest
- **Photography** : Service professionnel gratuit

#### **Activation : Trust & Ease**
- **Verification** : ID, téléphone, email, social
- **Reviews** : Système bidirectionnel hosts ↔ guests
- **Insurance** : Couverture $1M garantie
- **Messaging** : Communication intégrée

#### **Revenue : Commission Model**
- **Host fee** : 3% par réservation
- **Guest fee** : 6-14% selon région
- **Dynamic pricing** : Ajustement automatique
- **Instant book** : Réservation sans validation host

#### **Retention : Experience Design**
- **Trip planning** : Guidebooks par destination
- **Local experiences** : Activités avec locaux
- **Superhost program** : Statut premium hosts
- **Mobile app** : 50% bookings sur mobile

#### **Referral : Network Effects**
- **Invite friends** : Credit $25-40 selon pays
- **Host recruitment** : "Earn $X/month hosting"
- **Social sharing** : Photos trips sur Instagram/Facebook

### 📈 Impact Business

**Croissance exponentielle :**
- **2011** : 10M+ nuits réservées
- **2018** : 300M+ nuits réservées
- **2021** : $6B revenue
- **Présence** : 220+ pays

**Network effects** :
- **+4M hosts** actifs
- **1B+ guests** servis
- **Marketplace equilibrium** atteint

### � Learnings Airbnb

1. **Growth hacking** peut être borderline légal (Craigslist)
2. **Trust building** crucial dans économie partage
3. **Professional services** (photos) = quality boost
4. **Network effects** = moats ultimate défense

---

## 💬 Cas #4 : Slack - Viral en Entreprise

### 📊 Contexte Initial (2013)
- **Pivoting** : Gaming company → Communication tool
- **Marché** : Email dominant en interne
- **Concurrents** : HipChat, Microsoft Teams, Skype Business

### 🚀 La Stratégie Growth

#### **Awareness : Word-of-Mouth B2B**
- **Beta selective** : Invitation-only 6 mois
- **Press coverage** : "Email killer" positioning
- **Tech community** : Developer adoption first

#### **Acquisition : Freemium + Trial**
- **Unlimited messages** pour équipes <10K messages
- **Easy signup** : Email professionnel requis
- **Workspace creation** : Admin invite team

#### **Activation : Aha Moment Team**
- **2,000 messages** envoyés = équipe engagée
- **7 membres** minimum pour retention
- **First week** : 93% teams actives → restent

#### **Revenue : Team-Based Pricing**
- **$6.67/user/mois** (Standard)
- **Usage-based** : Plus d'historique = upgrade
- **Annual discounts** : 16% réduction

#### **Retention : Daily Habit**
- **10+ heures/jour** usage moyen
- **Push notifications** smart
- **Integrations** : 2,000+ apps connectées

#### **Referral : Org Spread**
- **Inter-team** communication
- **Department adoption** progressive  
- **Enterprise expansion** : IT adoption

### 📈 Impact Business

**Adoption massive :**
- **2014** : 1M daily users
- **2019** : 10M daily users  
- **2021** : Acquisition Salesforce $27.7B
- **Enterprise** : 65% Fortune 100

### 🎓 Learnings Slack

1. **Team-based virality** > Individual viral
2. **Daily habit** formation = strong retention
3. **Integrations ecosystem** = switching cost
4. **Freemium limits** well-calibrated

---

## 🔍 Pattern Recognition : Qu'est-ce qui Marche ?

### 🎯 **Activation Patterns**

**Time to Value < 5 minutes :**
- Dropbox : Premier fichier sync
- Airbnb : Première recherche accommodations  
- Slack : Première conversation équipe
- HubSpot : Premier lead capturé

**Aha Moments mesurables :**
- Dropbox : 1 fichier = 75% retention
- Airbnb : 1 booking = 80% return users
- Slack : 2K messages = équipe engage long-terme
- HubSpot : 1 lead = trial→paid 3x plus probable

### 🚀 **Growth Loop Structures**

**User-Generated Value Loops :**
1. User invite others → Network value ↑
2. More users → More content/listings
3. More content → Better experience  
4. Better experience → More users

**Content Loops (HubSpot) :**
1. Publish educational content
2. Generate organic traffic
3. Capture leads via content
4. Convert leads to customers
5. Customers success → Case studies → Content

### 💰 **Revenue Models Winners**

**Freemium done right :**
- **Clear upgrade triggers** (storage, features, usage)
- **Value demonstration** avant paywall
- **Pricing psychology** : bon/mieux/meilleur

**Network Effects Pricing :**
- Plus d'utilisateurs = plus de valeur
- Pas de pénalité croissance
- Team/Enterprise premium features

### 🔄 **Retention Mechanisms**

**Habit Formation :**
- **Daily use case** identifié
- **Push notifications** intelligentes  
- **Progress/achievement** visible

**Switching Costs :**
- Data investment (Dropbox files)
- Team setup (Slack workspace)
- Integrations (HubSpot ecosystem)
- Learning curve (HubSpot academy)

## 🛠️ Exercice : Votre Growth Playbook

**Mission :** Analysez votre business selon ces patterns

### Questions Stratégiques :

1. **Quel est votre "Aha Moment" ?**
   - Comment le mesurez-vous ?
   - Combien de temps pour l'atteindre ?

2. **Avez-vous des Network Effects ?**
   - La valeur augmente-t-elle avec plus d'users ?
   - Comment encourager invitations ?

3. **Quel est votre Content Moat ?**
   - Créez-vous du contenu difficile à copier ?
   - Votre expertise est-elle visible ?

4. **Votre Freemium Strategy ?**
   - La valeur gratuite est-elle suffisante ?
   - Les upgrade triggers sont-ils clairs ?

5. **Quels sont vos Switching Costs ?**
   - Qu'est-ce qui empêche vos clients de partir ?
   - Comment augmenter cette friction ?

### Template d'Analyse :

**Téléchargez le Canvas "Growth Case Study"** dans les ressources pour appliquer ces frameworks à votre situation ! 📊

---

**Next step :** Module 4 où nous plongeons dans les KPIs essentiels et l'automatisation de leur tracking ! 📈
    `
  },
  '4-kpis-automation': {
    component: null,
    title: "Module 4 — KPIs et Automatisation",
    duration: "2h",
    status: "mis-a-jour" as const,
    prev: "3-cas-pratique",
    next: "5-experimentation",
    content: `
# Module 4 — KPIs et Automatisation

## 📊 Les Métriques qui Comptent Vraiment

Mesurer, c'est bien. Mesurer les bonnes choses au bon moment avec les bons outils, c'est du Growth Marketing ! Dans ce module, nous distinguons les "Vanity Metrics" des KPIs actionnables et apprenons à automatiser leur tracking.

## 🎯 North Star Metric : Votre Étoile Polaire

### Qu'est-ce qu'une North Star Metric ?

La **North Star Metric** est LA métrique unique qui :
- **Reflète** la valeur que vous créez pour vos clients
- **Prédit** la croissance long-terme de votre business
- **Aligne** toutes les équipes sur un objectif commun
- **Guide** les décisions produit et marketing

### Exemples de North Star par Industry

| Business Type | North Star Metric | Pourquoi ? |
|---------------|-------------------|------------|
| **E-commerce** | Monthly Active Buyers | Usage récurrent = santé business |
| **SaaS B2B** | Weekly Active Users | Engagement = retention = expansion |
| **Media/Content** | Time Spent Reading | Engagement = ad revenue |
| **Marketplace** | Successful Transactions | Network effects = croissance |
| **Social Network** | Daily Active Users | Réseau = valeur |
| **Fintech** | Money Moved/Month | Usage réel = trust = growth |

### Comment Choisir Votre North Star ?

**Checklist :**
- ✅ **Mesurable** : Donnée fiable et accessible
- ✅ **Actionnable** : Équipes peuvent l'influencer
- ✅ **Leading** : Prédit les revenus futurs  
- ✅ **Simple** : Compréhensible par tous
- ✅ **Motivant** : Inspire les équipes

## 📈 KPIs par Étape AAARRR

### 🎯 **Awareness KPIs**

**Métriques Primaires :**
- **Share of Voice** : % mentions vs concurrents
- **Brand Searches** : Recherches Google de votre marque
- **Earned Media Value** : Valeur PR générée
- **Social Mentions** : Mentions organiques réseaux sociaux

**Métriques Secondaires :**
- Impressions publicitaires
- Reach campagnes social media
- Audience size (followers, subscribers)
- Press mentions count

**🔍 Focus Actionnable :**
Au lieu de "followers Instagram", mesurez "engagement rate" et "traffic généré depuis Instagram".

### 🚀 **Acquisition KPIs**

**Métriques Primaires :**
- **Traffic Quality Score** : (Pages/session × Session duration) / Bounce rate
- **Cost Per Acquisition (CPA)** par canal
- **Customer Acquisition Cost (CAC)** blended
- **Organic vs Paid ratio**

**Métriques Secondaires :**
- Sessions par canal
- New vs returning visitors
- Click-through rates (CTR)
- Cost per click (CPC)

**Breakdown par Canal :**
- **SEO** : Organic traffic, keyword rankings, CTR SERP
- **SEA** : CPC, Quality Score, Impression Share
- **Social** : CPM, Engagement Rate, Link Clicks
- **Email** : Open Rate, Click Rate, List Growth
- **Referral** : Traffic, Conversion Rate, Partner Performance

### ✨ **Activation KPIs**

**Métriques Primaires :**
- **Activation Rate** : % visiteurs qui réalisent l'action clé
- **Time to Activation** : Délai moyen jusqu'à l'action clé
- **Activation Depth** : Nombre d'actions réalisées lors de l'activation
- **Activated User Retention** : % d'users activés qui reviennent

**Exemples d'Événements d'Activation :**
- **E-commerce** : Premier achat OU Ajout au panier OU Inscription newsletter
- **SaaS** : Feature principale utilisée OU Premier projet créé
- **Media** : 3+ articles lus OU Newsletter subscription
- **App** : Profil complété OU Première action core

**🔍 Attention aux Faux Positifs :**
- Newsletter signup ≠ engagement si pas d'ouverture
- Feature utilisée 1 fois ≠ adoption
- Premier achat ≠ satisfaction (regarder les retours)

### 💰 **Revenue KPIs**

**Métriques Primaires :**
- **Monthly Recurring Revenue (MRR)** : SaaS/Subscription
- **Average Order Value (AOV)** : E-commerce/Transactionnel
- **Revenue Per User (RPU)** : Tous business models
- **Customer Lifetime Value (CLV)** : Valeur long-terme

**Métriques Secondaires :**
- Conversion rate par canal
- Sales cycle length
- Upsell/Cross-sell rate
- Deal win rate (B2B)

**Formules Clés :**

- **CLV** = (AOV × Purchase Frequency × Gross Margin) / Churn Rate
- **CAC Payback** = CAC / (MRR × Gross Margin %)
- **LTV:CAC Ratio** = CLV / CAC (optimal: 3:1 à 5:1)

### 🔄 **Retention KPIs**

**Métriques Primaires :**
- **Churn Rate** : % clients qui partent par période
- **Net Revenue Retention** : Expansion - Churn revenue
- **Cohort Retention** : % d'une cohorte qui reste active
- **Feature Adoption Rate** : % clients utilisant nouvelles features

**Retention par Période :**
- **Day 1, 7, 30** : Apps/Produits digitaux
- **Month 1, 3, 12** : SaaS/Abonnements
- **Repeat Purchase Rate** : E-commerce

**🔍 Retention Cohort Analysis :**
Analysez la rétention par :
- Canal d'acquisition
- Période d'inscription  
- Segment de clients
- Géographie

### 📢 **Referral KPIs**

**Métriques Primaires :**
- **Net Promoter Score (NPS)** : Satisfaction et recommandation
- **Referral Rate** : % clients qui réfèrent
- **Viral Coefficient (K-factor)** : Nombre d'invitations × Taux d'acceptation
- **Word-of-Mouth Value** : Revenue attribuée aux références

**Métriques Secondaires :**
- Social shares par contenu
- User-generated content volume
- Review ratings average
- Organic mentions tracking

## 🤖 Automatisation des KPIs

### Stack Technologique Recommandé

#### **🔢 Data Collection**
- **Google Analytics 4** : Web analytics gratuit
- **Mixpanel** : Event tracking avancé (payant)
- **Amplitude** : Product analytics (freemium)
- **Segment** : Customer data platform (payant)

#### **📊 Data Visualization**
- **Google Data Studio** : Dashboards gratuits
- **Tableau** : Business intelligence premium
- **Mixpanel/Amplitude Dashboards** : Intégré
- **Custom dashboards** : Grafana, Metabase

#### **🔄 Automation Tools**
- **Zapier** : Automatisation no-code
- **Make (ex-Integromat)** : Workflows complexes
- **n8n** : Alternative open-source
- **Custom scripts** : Python, Node.js

### 🏗️ Architecture d'un Data Stack

**Flow :** Data Sources → ETL/Pipelines → Data Warehouse → Visualization

**Exemple Concret :**
1. **Sources** : GA4, Facebook Ads, Email Tool, CRM
2. **ETL** : Zapier/Make collecte et nettoie
3. **Storage** : Google Sheets/BigQuery/Postgres
4. **Viz** : Data Studio/Tableau dashboards

### 📈 Dashboard Essential : Le One-Page Growth

**Structure Recommandée :**

**Growth Dashboard - [Période]**
- **🌟 NORTH STAR:** [Métrique] → [Target]
- **🏴‍☠️ AAARRR FUNNEL:**
  - Awareness → Acquisition → Activation: [100K] 15% [15K] 8% [1.2K] 67%
  - Revenue ← Retention ← Referral: [800] 85% [680] 12% [82]
- **📈 KEY TRENDS (vs last period):**
  - Traffic: +12% | Conversion: -2%
  - CAC: $45 (+8%) | LTV: $320 (+5%)
  - Churn: 5.2% (-0.3%) | NPS: 67 (+4)
- **🚨 ALERTS & RED FLAGS:**
  - iOS traffic -25% (investigate)
  - Email open rates declining

### 🚨 Alerting & Monitoring

**Automated Alerts Setup :**

**Seuils Critiques :**
- Conversion rate < -20% vs moyenne 7 jours
- Traffic organique < -30% vs même jour semaine précédente  
- Churn rate > +50% vs moyenne mensuelle
- CAC > +25% vs target

**Notifications :**
- **Slack** : Alerts temps réel équipe
- **Email** : Rapport quotidien management
- **SMS** : Urgences critiques uniquement

### 🔄 Automated Workflows Examples

#### **Workflow 1: New Customer Onboarding**
**Trigger:** Nouveau client payant
1. Ajouter dans CRM avec tag "New Customer"
2. Envoyer welcome email sequence
3. Créer tâche support "Check-in J+7"
4. Ajouter dans audience retargeting "Upsell"
5. Notifier account manager si >$500 MRR

#### **Workflow 2: Churn Prevention**
**Trigger:** Usage < 50% vs baseline utilisateur
1. Tag "At Risk" dans CRM
2. Envoyer email "Tips & Best Practices"
3. Proposer call avec Customer Success
4. Surveiller engagement 14 jours
5. Si pas d'amélioration → Offer discount/incentive

#### **Workflow 3: Content Performance**
**Trigger:** Article blog publié
1. Auto-share sur LinkedIn/Twitter
2. Créer campagne email pour segment intéressé
3. Ajouter dans newsletter hebdomadaire
4. Monitor trafic et conversions 7 jours
5. Si performance top 10% → Booster avec ads

## 🎯 KPIs par Business Model

### 💻 **SaaS B2B**

**Stack KPIs Essential :**
- **ARR/MRR** : Revenus récurrents
- **CAC Payback Period** : Retour sur investissement acquisition
- **Net Revenue Retention** : 110%+ = excellent
- **Product Qualified Leads (PQL)** : Users qui atteignent usage threshold
- **Feature Adoption Rate** : % customers utilisant nouvelles features

**Benchmarks Industry :**
- Net Revenue Retention : 110%+
- Gross Revenue Retention : 95%+
- CAC Payback : <12 mois
- LTV:CAC : 3:1 minimum

### 🛒 **E-commerce**

**Stack KPIs Essential :**
- **Monthly Active Buyers** : Acheteurs récurrents
- **Repeat Purchase Rate** : % clients qui rachètent
- **Average Order Value (AOV)** : Panier moyen
- **Cart Abandonment Rate** : % paniers non finalisés
- **Inventory Turnover** : Rotation stock

**Benchmarks Industry :**
- Conversion rate : 2-3% (desktop), 1-2% (mobile)
- Cart abandonment : 70% moyenne
- Repeat purchase : 25-30% excellent
- Email revenue : 15-25% du total

### 📱 **Mobile App**

**Stack KPIs Essential :**
- **Daily/Monthly Active Users (DAU/MAU)** : Engagement
- **Session Length** : Temps passé par session
- **Screen Flow** : Parcours utilisateur dans l'app
- **Push Notification CTR** : Efficacité notifications
- **App Store Rating** : Satisfaction visible

**Benchmarks Industry :**
- Day 1 Retention : 25%+ bon
- Day 7 Retention : 11%+ bon  
- Day 30 Retention : 4%+ bon
- Session length : 2+ minutes bon

## 📚 Tools Gratuits vs Payants

### 🆓 **Stack Gratuit (Bootstrap)**

**Analytics :**
- Google Analytics 4 (gratuit)
- Google Tag Manager (gratuit)
- Facebook Analytics (gratuit)

**Visualization :**
- Google Data Studio (gratuit)
- Google Sheets avec graphiques
- Mixpanel (10M events/mois gratuit)

**Automation :**
- Zapier (100 tâches/mois gratuit)
- Google Apps Script (gratuit)
- IFTTT (basique gratuit)

### 💰 **Stack Premium (Scale)**

**Analytics :**
- Mixpanel Pro ($25+/mois)
- Amplitude Plus ($61+/mois)  
- Segment ($120+/mois)

**Visualization :**
- Tableau ($75+/mois/user)
- Looker (custom pricing)
- ChartIO ($80+/mois)

**Automation :**
- Zapier Pro ($20+/mois)
- Make Pro ($9+/mois)
- Segment + warehouse + BI ($500+/mois)

## 🎓 Exercice Pratique : Votre Dashboard

### Mission : Créer votre Growth Dashboard

**Étape 1 : Définir votre North Star**
- Quelle métrique reflète le mieux la valeur de votre produit ?
- Comment vos équipes peuvent-elles l'influencer ?

**Étape 2 : Mapper votre AAARRR**
- Définissez 1-2 KPIs par étape
- Identifiez vos sources de données
- Calculez vos taux de conversion actuels

**Étape 3 : Setup technique**
- Connectez Google Analytics 4
- Créez un dashboard Google Data Studio
- Configurez 3 automatisations Zapier

**Étape 4 : Alerting**
- Définissez vos seuils critiques
- Configurez notifications Slack/email
- Testez vos workflows

**Template fourni** : Dashboard Google Data Studio prêt à l'emploi dans les ressources ! 📊

**Bonus** : Configurez un workflow Zapier qui notifie votre équipe quand un KPI critique dépasse un seuil.

---

**Next step :** Module 5 où nous apprenons à concevoir et exécuter des expérimentations robustes ! 🧪
    `
  },
  '5-experimentation': {
    component: null,
    title: "Module 5 — Expérimentation & Tests A/B",
    duration: "2h",
    status: "mis-a-jour" as const,
    prev: "4-kpis-automation",
    next: "6-no-code",
    content: `
# Module 5 — Expérimentation & Tests A/B

## 🧪 L'Art de l'Expérimentation Growth

L'expérimentation n'est pas juste faire des A/B tests. C'est une discipline scientifique appliquée au marketing pour maximiser l'apprentissage et minimiser les risques. Dans ce module, nous construisons votre machine à expérimentations.

## 🔬 Fondamentaux de l'Expérimentation

### Pourquoi Expérimenter ?

**Réduire les Risques :**
- Tester avant de déployer massivement
- Éviter les décisions basées sur l'intuition
- Quantifier l'impact réel des changements

**Accélérer l'Apprentissage :**
- Apprendre ce qui marche ET ce qui ne marche pas
- Construire une knowledge base d'insights
- Développer une culture data-driven

**Optimiser Continuement :**
- Amélioration incrémentale constante
- Compound effect des petites wins
- Éviter les plateaux de performance

### Les Types d'Expérimentations

#### **1. A/B Tests (Split Tests)**
**Principe :** Comparer 2 versions (A vs B) avec une seule variable modifiée

**Quand utiliser :**
- Tester un changement spécifique (CTA, titre, couleur)
- Audience suffisante (>100 conversions/semaine)
- Impact attendu mesurable

**Exemple :**
- Version A : Bouton vert "Acheter maintenant"
- Version B : Bouton rouge "Ajouter au panier"

#### **2. Multivariate Tests (MVT)**
**Principe :** Tester plusieurs variables simultanément

**Quand utiliser :**
- Gros volume de trafic (>1000 conversions/semaine)
- Variables interdépendantes
- Optimisation page complète

**Exemple :**
- Variables : Titre (2 versions) × CTA (3 versions) × Image (2 versions)
- Total : 2×3×2 = 12 combinaisons

#### **3. Sequential Tests**
**Principe :** Tester une série de changements dans l'ordre

**Quand utiliser :**
- Petit trafic
- Tests exploratoires
- Proof of concept rapide

#### **4. Holdout Tests**
**Principe :** Garder un groupe de contrôle permanent

**Quand utiliser :**
- Mesurer l'impact cumulé des optimisations
- Valider les résultats long-terme
- Tests de nouvelles features majeures

## 📈 Le Framework GROWS

**G** - **Goal** (Objectif)
**R** - **Reality** (Réalité actuelle)  
**O** - **Options** (Options/Hypothèses)
**W** - **Will** (Plan d'action)
**S** - **Success** (Mesure du succès)

### **G - Goal Setting**

**Objectifs SMART :**
- **Specific** : Améliorer le taux de conversion checkout
- **Measurable** : Augmenter de 2% à 2.5%
- **Achievable** : Basé sur benchmarks industry
- **Relevant** : Impact business direct
- **Time-bound** : Dans les 4 prochaines semaines

**Hiérarchie d'Objectifs :**
1. **North Star Metric** (ex: Revenue)
2. **Key Metrics** (ex: Conversion Rate)
3. **Supporting Metrics** (ex: Add to Cart Rate)
4. **Micro-Metrics** (ex: Button Click Rate)

### **R - Reality Assessment**

**Audit Current State :**
- Performance baseline sur 30 jours minimum
- Analyse qualitative (user feedback, heatmaps)
- Benchmark vs concurrents
- Identification pain points

**Data Collection :**
- Google Analytics : Behavior flow
- Hotjar : Heatmaps + recordings
- Surveys : Exit intent, post-purchase
- Support tickets : FAQ récurrentes

### **O - Options Generation**

**Techniques de Génération d'Idées :**

#### **1. Jobs-to-be-Done (JTBD)**
*"Quand [situation], je veux [motivation], pour [outcome attendu]"*

**Exemple :**
- Quand je compare des produits, je veux voir rapidement les différences, pour choisir sans perdre de temps

#### **2. Conversion Heuristics**
- **Motivation** vs **Friction** vs **Anxiety**
- Augmenter motivation (valeur perçue)
- Réduire friction (étapes, champs)
- Diminuer anxiety (sécurité, social proof)

#### **3. Competitive Analysis**
- Quels patterns utilisent les leaders ?
- Qu'est-ce qui marche dans d'autres industries ?
- Quelles best practices émergent ?

#### **4. User Research Insights**
- Interviews clients (pain points)
- Session recordings analysis
- Heat maps attention zones
- A/B testing historique

### **W - Will (Execution Plan)**

**Priorisation des Tests : Framework ICE**

**Impact** (1-10) : Quel gain potentiel ?
**Confidence** (1-10) : Quelle certitude de succès ?
**Ease** (1-10) : Quelle facilité d'implémentation ?

**Score ICE = (Impact × Confidence × Ease) / 1000**

**Exemple :**
| Test Idea | Impact | Confidence | Ease | Score | Priority |
|-----------|--------|------------|------|-------|----------|
| Nouveau CTA color | 3 | 8 | 9 | 216 | 3 |
| Checkout 1-page | 9 | 7 | 4 | 252 | 2 |
| Trust badges | 6 | 9 | 8 | 432 | 1 |

### **S - Success Metrics**

**Primary Metric** : L'objectif principal
**Secondary Metrics** : Autres impacts mesurés
**Guardrail Metrics** : Métriques à ne pas détériorer

**Exemple Test Checkout :**
- **Primary** : Taux de conversion checkout
- **Secondary** : Revenue per visitor, AOV
- **Guardrails** : Page load time, error rate

## 🎯 Design d'Expériences Robustes

### Statistical Power & Sample Size

**Paramètres Clés :**
- **α (Alpha)** : Risque de faux positif (5% standard)
- **β (Beta)** : Risque de faux négatif (20% standard)
- **Power** : 1-β = 80% minimum
- **Effect Size** : Différence minimale détectable

**Calculateur Sample Size :**

**Formule :** Sample Size = 2 × (Zα + Zβ)² × p × (1-p) / (p₁-p₀)²

**Variables :**
- p = baseline conversion rate
- p₁-p₀ = effet minimum détectable
- Zα, Zβ = scores Z pour α et β

**Outils Recommandés :**
- Google Optimize (gratuit)
- Optimizely Sample Size Calculator
- Evan Miller Statistical Calculator

### Durée des Tests

**Règles Générales :**
- **Minimum 1-2 cycles business** (1-2 semaines B2C, 1-2 mois B2B)
- **Attendre significance statistique** ET business
- **Éviter effet novelty** (changement récent surévalué)
- **Prendre en compte saisonnalité**

**Red Flags :**
- Arrêter test trop tôt (peeking problem)
- Faire tourner indéfiniment sans conclusion
- Ignorer les external factors (promo, presse, etc.)

### Segmentation des Tests

**Segments Importants :**
- **Device** : Desktop vs Mobile vs Tablet
- **Traffic Source** : Organic vs Paid vs Direct vs Social
- **Geography** : Pays, régions, timezones
- **User Type** : New vs Returning vs Customer
- **Demographics** : Age, gender si pertinent

**Simpson's Paradox :**
Un test peut gagner globalement mais perdre dans chaque segment. Toujours analyser par segment !

## 🛠️ Tools & Platforms

### 🆓 **Outils Gratuits**

#### **Google Optimize** (gratuit jusqu'à 5 tests simultanés)
**Pros :**
- Intégration Google Analytics native
- Interface user-friendly
- Tests multivariate supportés

**Cons :**
- Limite 5 tests simultanés
- Pas de segmentation avancée
- Support limité

#### **Microsoft Clarity** (gratuit)
**Pros :**
- Heatmaps et session recordings illimités
- Insights automatiques IA
- Performance impact minimal

**Cons :**
- Pas de A/B testing direct
- Analytics complémentaire uniquement

### 💰 **Outils Premium**

#### **Optimizely** ($50+/mois)
**Pros :**
- Plateforme complète (web + mobile + server-side)
- Segmentation avancée
- Statistical engine robuste

**Cons :**
- Prix élevé pour PME
- Courbe d'apprentissage

#### **VWO** ($200+/mois)
**Pros :**
- All-in-one : A/B + Heatmaps + Surveys
- Support client excellent
- Templates pré-conçus

**Cons :**
- Interface parfois lente
- Intégrations limitées

#### **Unbounce** ($90+/mois)
**Pros :**
- Landing page builder + A/B testing
- Templates haute conversion
- Smart traffic (AI optimization)

**Cons :**
- Seulement landing pages
- Prix par page

### 🔧 **Server-Side Testing**

**Quand utiliser :**
- Tests backend (algorithmes, pricing)
- Applications mobiles
- Tests multi-devices
- Performance critique

**Tools :**
- **Optimizely Full Stack**
- **LaunchDarkly** (feature flags)
- **Split.io** (data-driven experimentation)

## 📊 Test Ideas par Funnel AAARRR

### 🎯 **Awareness Tests**

#### **SEO Title Testing**
- **Hypothesis** : Titles émotionnels > titles factuels
- **Test** : "10 Secrets Marketing" vs "Guide Marketing Complet"
- **Metric** : CTR dans SERPs Google

#### **Social Media Ad Creative**
- **Hypothesis** : Video > Static image
- **Test** : Video 15s vs Image + texte overlay
- **Metric** : CPM, CTR, Cost per landing page visitor

### 🚀 **Acquisition Tests**

#### **Landing Page Headlines**
- **Hypothesis** : Benefit-focused > Feature-focused
- **Test** : "Augmentez vos ventes de 40%" vs "Logiciel CRM complet"
- **Metric** : Time on page, scroll depth, conversion rate

#### **CTA Button Tests**
- **Hypothesis** : Urgency words increase conversion
- **Test** : "Commencer" vs "Commencer maintenant" vs "Obtenir l'accès"
- **Metric** : Click-through rate, form completion

### ✨ **Activation Tests**

#### **Onboarding Flow**
- **Hypothesis** : Shorter onboarding = higher activation
- **Test** : 5 steps vs 3 steps vs Progressive disclosure
- **Metric** : Onboarding completion rate, time to first value

#### **Welcome Email Sequence**
- **Hypothesis** : Personal tone > Corporate tone
- **Test** : Email from CEO vs Email from "Team" vs Email from "Sarah, Customer Success"
- **Metric** : Open rate, click rate, feature adoption

### 💰 **Revenue Tests**

#### **Pricing Page Layout**
- **Hypothesis** : 3 tiers > 2 tiers (decoy effect)
- **Test** : Basic/Pro vs Basic/Pro/Enterprise
- **Metric** : Conversion rate, revenue per visitor

#### **Checkout Process**
- **Hypothesis** : Single page checkout > Multi-step
- **Test** : 1 page vs 3 steps vs Guest checkout
- **Metric** : Checkout completion, cart abandonment

### 🔄 **Retention Tests**

#### **Email Re-engagement**
- **Hypothesis** : "We miss you" > "20% discount"
- **Test** : Emotional appeal vs Discount offer vs Content value
- **Metric** : Email open rate, app re-activation, purchase rate

#### **In-App Notifications**
- **Hypothesis** : Achievement-based > Feature-based notifications
- **Test** : "You're in top 10% users!" vs "Try our new feature!"
- **Metric** : Notification click rate, feature adoption

### 📢 **Referral Tests**

#### **Referral Program Incentives**
- **Hypothesis** : Mutual benefit > One-sided benefit
- **Test** : "You get $10, friend gets $10" vs "Get $20 for each referral"
- **Metric** : Referral rate, invite acceptance rate

## 🚨 Common Pitfalls & How to Avoid

### **1. Peeking Problem**
**Erreur :** Regarder les résultats pendant le test et arrêter quand ça "gagne"
**Solution :** Définir durée et sample size avant, utiliser sequential testing si besoin

### **2. Multiple Testing Problem** 
**Erreur :** Tester 20 variations sans ajuster significance level
**Solution :** Bonferroni correction ou FDR (False Discovery Rate)

### **3. Simpson's Paradox**
**Erreur :** Conclure sur résultat global sans analyser segments
**Solution :** Toujours analyser par device, source, user type

### **4. Novelty Effect**
**Erreur :** Confondre gain temporaire avec gain permanent
**Solution :** Tests long-terme (4+ semaines), holdout groups

### **5. Selection Bias**
**Erreur :** Tester seulement sur meilleur traffic ou best customers
**Solution :** Randomisation vraie, tests sur traffic global

## 🎓 Experiment Canvas Template

### Pre-Test Planning

**🧪 EXPERIMENT CANVAS**

**GOAL: What are we trying to achieve?**
[Increase checkout conversion by 15%]

**HYPOTHESIS: Why do we think this works?**
[Single-page checkout reduces friction]

**TARGET AUDIENCE: Who are we testing?**
[All checkout traffic, desktop+mobile]

**SUCCESS METRICS:**
• Primary: Checkout completion rate
• Secondary: Revenue per visitor  
• Guardrails: Load time, error rate

**TEST DETAILS:**
• Duration: 4 weeks
• Sample Size: 2,000 visitors minimum
• Confidence: 95%
• Power: 80%

### Post-Test Analysis

**📊 RESULTS SUMMARY**

**WINNER:** [Control/Variation] by [X%]
**CONFIDENCE:** [95%] **SIGNIFICANCE:** [Yes]

**KEY INSIGHTS:**
• What worked and why?
• What didn't work?
• Segment differences?

**NEXT ACTIONS:**
• Deploy winner: [Yes/No]
• Follow-up tests: [List]
• Share learnings: [Team/Doc]

## 🏆 Case Study : Optimization Journey

### Background: E-commerce Checkout

**Situation :**
- E-commerce fashion, 50K visitors/mois
- Checkout conversion : 45% (industry: 60%)
- Cart abandonment : 55%

### Test #1 : Remove Guest Checkout

**Hypothesis :** Account creation = better retention
**Result :** Conversion dropped to 32% (-29%)
**Learning :** Friction > Retention benefit for new users

### Test #2 : Add Trust Signals

**Hypothesis :** Security concerns cause abandonment
**Variations :**
- Control : Basic checkout
- Variation : SSL badges + "Secure checkout" + Money-back guarantee

**Result :** +12% conversion (45% → 50.4%)
**Winner :** Trust signals deployed

### Test #3 : Payment Methods

**Hypothesis :** More payment options = higher conversion
**Variations :**
- Control : Card + PayPal
- Variation : Card + PayPal + Apple Pay + Google Pay

**Result :** +8% conversion (50.4% → 54.4%)
**Segment insight :** Mobile users loved Apple Pay (+22%)

### Test #4 : Progress Indicator

**Hypothesis :** Clear progress reduces abandonment
**Result :** +3% conversion (54.4% → 56.0%)
**Learning :** Small UX improvements compound

### Final Results
- **Before :** 45% checkout conversion
- **After :** 56% checkout conversion
- **Lift :** +24% relative improvement
- **Revenue Impact :** +€180K/year

## 📚 Ressources & Next Steps

### Templates Disponibles
- **Experiment Canvas** : Planning worksheet
- **Test Results Template** : Analysis framework  
- **Sample Size Calculator** : Excel/Google Sheets
- **ICE Prioritization** : Scoring matrix

### Recommended Reading
- **"Trustworthy Online Controlled Experiments"** - Ron Kohavi
- **"A/B Testing: The Most Powerful Way to Turn Clicks Into Customers"** - Dan Siroker
- **"Lean Analytics"** - Alistair Croll & Benjamin Yoskovitz

### 🎯 Action Plan

**Week 1 :** Set up testing platform (Google Optimize ou alternative)
**Week 2 :** Create experiment backlog (10+ ideas avec ICE scoring)
**Week 3 :** Launch first test (simple CTA ou headline test)
**Week 4 :** Analyze results, plan next test

**Goal :** 1 test actif en permanence, 1 nouveau test lancé chaque mois.

---

**Next step :** Module 6 où nous découvrons les outils No-Code qui révolutionnent l'implémentation Growth ! 🛠️
    `
  },
  '6-no-code': {
    component: null,
    title: "Module 6 — Outils No-Code pour le Growth",
    duration: "2h",
    status: "mis-a-jour" as const,
    prev: "5-experimentation",
    next: "7-ai-par-canal",
    content: `
# Module 6 — Outils No-Code pour le Growth

## 🚀 La Révolution No-Code

Le No-Code a démocratisé l'automatisation et permis aux Growth Marketers de créer des systèmes sophistiqués sans développeur. Dans ce module, nous construisons ensemble une stack d'automatisation complète.

## 🧠 Mindset No-Code pour Growth

### Penser en Workflows, pas en Tools

**Avant No-Code :**
- Brief développeur → Développement → Tests → Déploiement
- Délai : 2-6 semaines
- Coût : €2K-10K
- Flexibilité : Faible

**Avec No-Code :**
- Idée → Prototypage → Test → Itération
- Délai : 2-6 heures
- Coût : €10-50/mois
- Flexibilité : Totale

### Les 4 Piliers No-Code Growth

#### **1. Automatisation** (Zapier, Make)
Connecter vos outils entre eux

#### **2. Création** (Webflow, Bubble)
Sites, landing pages, applications

#### **3. Analyse** (Airtable, Notion)
Bases de données et dashboards

#### **4. Communication** (Typeform, Calendly)
Interaction avec prospects/clients

## 🔗 Zapier : Votre Système Nerveux Growth

### Concepts Fondamentaux

**Trigger :** L'événement qui déclenche le workflow
**Action :** Ce qui se passe automatiquement
**Zap :** La connexion Trigger → Action(s)

### Exemples de Zaps Growth Marketing

#### **🎯 Lead Nurturing Automation**

**TRIGGER:** Nouveau lead capture (Typeform)

**ACTIONS:**
1. Ajouter dans CRM (HubSpot) avec tag "New Lead"
2. Envoyer dans liste email (Mailchimp) 
3. Créer notification Slack équipe sales
4. Programmer follow-up dans 3 jours (Calendly)
5. Ajouter dans audience retargeting (Facebook)

#### **🔄 Customer Success Automation**

**TRIGGER:** Nouveau client payant (Stripe)

**ACTIONS:**
1. Créer compte dans outil produit
2. Envoyer welcome pack (Gmail + PDF)
3. Programmer onboarding call (Calendly)
4. Ajouter dans segment "VIP" (Intercom)
5. Notifier Customer Success Manager

#### **📊 Reporting Automation**

**TRIGGER:** Chaque lundi 9h (Schedule)

**ACTIONS:**
1. Récupérer métriques Google Analytics
2. Récupérer données Facebook Ads
3. Compiler dans Google Sheets
4. Générer graphiques automatiquement
5. Envoyer rapport par email équipe

### Zapier Advanced: Multi-Step Logic

#### **Conditional Logic (Paths)**

**TRIGGER:** Nouveau signup (Webflow)

**IF:** Email = entreprise domain (.com, .fr, etc.)
• Ajouter tag "B2B" dans CRM
• Assigner au sales rep entreprise

**ELSE:** Email = gmail/yahoo/hotmail
• Ajouter tag "B2C" dans CRM
• Envoyer vers séquence email self-service

#### **Delay & Scheduling**

**TRIGGER:** Abandon panier e-commerce

**SEQUENCE:**
1. **DELAY:** Attendre 1 heure
2. **ACTION:** Envoyer email "Oubli dans votre panier?"
3. **DELAY:** Attendre 24 heures SI pas d'achat
4. **ACTION:** Envoyer email avec discount 10%
5. **DELAY:** Attendre 72 heures SI pas d'achat
6. **ACTION:** Envoyer email "Dernière chance" + 15%

## 🛠️ Make (ex-Integromat) : Le Level Up

### Pourquoi Make > Zapier ?

**Avantages Make :**
- **Workflows complexes** : Conditions multiples, boucles
- **Manipulation de données** : JSON, arrays, transformations
- **Prix** : Plus économique pour gros volumes
- **Visual builder** : Interface drag & drop plus intuitive

**Quand utiliser Make :**
- Workflows avec >5 étapes
- Logique conditionnelle complexe
- Traitement de données avancé
- Budget limité, gros volumes

### Exemple Workflow Make : Lead Scoring

**WORKFLOW STEPS:**

1. **TRIGGER:** New form submit (Typeform)
2. **GET DATA:** Existing data from CRM  
3. **CALCULATE:** Lead score (points system)
4. **CONDITION:** Score > 80?

**IF HIGH SCORE:**
• Notify sales team
• Schedule call

**IF LOW SCORE:**
• Add to nurture email sequence

## 📋 Airtable : Votre Database Growth

### Airtable pour Growth Teams

**Use Cases :**
- **Content Calendar** : Planning posts, statuts, performances
- **Lead Management** : CRM simplifié avec automations
- **Campaign Tracking** : ROI, budgets, résultats par canal
- **A/B Test Log** : Historique des tests et résultats

### Exemple : Content Calendar Setup

**Base Structure :**

**TABLE: Content Calendar**

**FIELDS:**
• Title (Single line text)
• Type (Single select: Blog, Social, Email, Video)
• Status (Single select: Idea, Writing, Review, Published)
• Publish Date (Date)
• Author (Collaborator)
• Channel (Multiple select: LinkedIn, Twitter, Blog, Email)
• Performance (Number: Views, Clicks, Conversions)
• ROI (Formula: Revenue / Cost)

**VIEWS:**
• Calendar View (by Publish Date)
• Kanban View (by Status)
• Performance View (sorted by ROI)
• Author View (grouped by Author)

**AUTOMATIONS:**
• When Status = "Published" → Post to Slack
• When Publish Date approaches → Email reminder
• Weekly performance report → Email to team

### Airtable + Zapier Integration

**Powerful Combo :**

**TRIGGER:** New record in Airtable "High-Intent Leads" view

**ACTIONS:**
1. Create deal in CRM (HubSpot)
2. Send personalized email (Gmail)
3. Add to retargeting audience (Facebook)
4. Update Airtable with "Contacted" status

## 🎨 Creation Tools : Landing Pages & More

### Webflow : The Designer's Choice

**Pourquoi Webflow :**
- **Design freedom** totale (comme Photoshop → web)
- **SEO built-in** (meta, schema, speed)
- **CMS intégré** pour blogs
- **E-commerce** natif

**Growth Marketing Use Cases :**
- Landing pages A/B testées
- Blogs SEO-optimized
- Campaign-specific microsites
- Event pages avec inscription

### Unbounce : Conversion-Focused

**Pourquoi Unbounce :**
- **Templates** haute conversion
- **A/B testing** intégré
- **Smart Traffic** (AI optimization)
- **Popups et sticky bars**

**Template Types :**
- Lead generation
- Product demos
- Webinar signups
- E-commerce promotions

### Leadpages : Simple & Fast

**Pourquoi Leadpages :**
- **Setup rapide** (15 minutes)
- **Intégrations** nombreuses
- **Leadboxes** (popups smart)
- **Prix** accessible

## 📧 Email Marketing Automation

### ConvertKit : Creator-Friendly

**Features Growth :**
- **Visual automations** builder
- **Tagging system** avancé
- **Segmentation** behavior-based
- **Landing pages** intégrées

**Automation Examples :**

**TRIGGER:** Tag "Downloaded eBook"

**SEQUENCE:**
1. Wait 1 day
2. Email: "Did you read the eBook? Here's summary..."
3. Wait 3 days
4. Email: "Ready to implement? Here's how..."
5. Wait 7 days
6. Email: "Schedule a free consultation"

### Mailchimp : All-in-One

**Advanced Features :**
- **Customer Journey Builder**
- **Predictive Demographics**
- **Content Optimizer** (AI subject lines)
- **Postcard campaigns** (physical mail!)

## 🔧 Advanced No-Code Stack

### Bubble : Web App Builder

**Capabilities :**
- **Full web applications** sans code
- **Database** native
- **User authentication**
- **Payment processing**
- **API integrations**

**Growth Use Cases :**
- MVP validation tools
- Customer portals
- Booking systems
- Community platforms

### Webflow + MemberStack : Membership Sites

**Perfect for :**
- Course platforms
- Premium content
- Community access
- Subscription models

### n8n : Open-Source Alternative

**Why n8n :**
- **Self-hosted** (data privacy)
- **No limits** on executions
- **Custom nodes** development
- **Community** active

**Setup Guide :**
1. Install sur VPS (DigitalOcean, etc.)
2. Configure domaine et SSL
3. Connect vos outils via API
4. Build workflows visuellement

## 🎯 Growth Stack Templates

### 🚀 **Startup Stack (Budget <€200/mois)**

**💰 ACQUISITION**
• Landing Pages: Webflow (€14/mois)
• Forms: Typeform (€25/mois)
• Email: ConvertKit (€29/mois)
• Social Scheduling: Buffer (€15/mois)

**🔄 AUTOMATION**
• Workflows: Zapier (€20/mois)
• CRM: HubSpot (gratuit)
• Analytics: Google Analytics (gratuit)

**📊 TRACKING**
• Database: Airtable (€20/mois)
• Reports: Google Data Studio (gratuit)

**Total: ~€120/mois**

### 🏢 **Scale-Up Stack (Budget <€800/mois)**

**💰 ACQUISITION**
• Landing Pages: Unbounce (€90/mois)
• Forms: Typeform Pro (€35/mois)
• Email: Mailchimp Premium (€300/mois)
• Social: Hootsuite Pro (€99/mois)

**🔄 AUTOMATION**
• Workflows: Make Pro (€16/mois)
• CRM: HubSpot Starter (€45/mois)
• Analytics: Mixpanel (€25/mois)

**📊 TRACKING**
• Database: Airtable Pro (€24/mois)
• BI: Tableau Online (€75/mois)

**Total: ~€700/mois**

## 🔍 ROI Calculation No-Code

### Before vs After Analysis

**Before No-Code (Traditional Dev) :**

**Simple automation (email follow-up):**
• Dev time: 2 semaines × €500/jour = €5,000
• Maintenance: €200/mois
• Changes: €1,000 per modification
• **Total Year 1: €7,400**

**After No-Code (Zapier) :**

**Same automation:**
• Setup time: 2 heures × €0 = €0
• Tool cost: $20/mois = €240/an
• Changes: 15 minutes × €0 = €0
• **Total Year 1: €240**

**ROI Calculation :**
- **Savings :** €7,160 (97% reduction)
- **Time to Market :** 2 weeks → 2 hours
- **Flexibility :** Modifications instantanées

### Productivity Multiplier

**Time Savings Examples :**
- **Reporting** : 4h/semaine → 0h (automated)
- **Lead routing** : 1h/jour → 0h (automated)
- **Content scheduling** : 2h/semaine → 30min/semaine
- **Data entry** : 3h/semaine → 0h (automated)

**Total :** 10h/semaine récupérées = €400/semaine @ €40/h = €20,800/an

## 🚨 Pitfalls & Best Practices

### Common Mistakes

#### **1. Tool Proliferation**
**Problem :** Multiplier les outils sans cohérence
**Solution :** Start with 3-4 outils max, integrate deeply

#### **2. Over-Automation**
**Problem :** Automatiser des processus pas encore optimisés
**Solution :** Manual → Optimized → então Automated

#### **3. No Documentation**
**Problem :** Workflows complexes sans documentation = chaos
**Solution :** Documenter chaque workflow dans Notion/Airtable

#### **4. Single Point of Failure**
**Problem :** Une API qui tombe = tout s'arrête
**Solution :** Backup workflows, error handling, monitoring

### Best Practices

#### **🔧 Architecture Principles**

**1. Start Simple**
- Begin avec 1 trigger, 1 action
- Add complexity progressively
- Test each step independently

**2. Error Handling**
- Always include error notifications
- Set up retry mechanisms
- Log failures for debugging

**3. Data Validation**
- Check required fields existence
- Validate email formats, phone numbers
- Clean data before processing

#### **📊 Monitoring & Optimization**

**Key Metrics to Track :**
- **Workflow success rate** (>95% target)
- **Execution time** (faster = better UX)
- **Cost per execution** (optimize for high-volume workflows)
- **Business impact** (leads, conversions, time saved)

## 🎓 Hands-On Workshop

### Mission : Build Your First Growth Automation

**Scenario :** E-commerce avec abandon de panier

#### **Step 1 : Setup Tools** (15 min)
1. Create Zapier account (free tier)
2. Connect Shopify (ou WooCommerce)
3. Connect Mailchimp (ou ConvertKit)
4. Connect Slack (optional)

#### **Step 2 : Build Workflow** (30 min)

**TRIGGER:** Cart abandoned (Shopify)

**WORKFLOW:**
1. **DELAY:** Wait 1 hour
2. **CONDITION:** Check if order completed
   - **IF Yes:** Do nothing (stop workflow)
   - **IF No:** Continue
3. **ACTION 1:** Add to "Cart Abandoners" list (Mailchimp)
4. **ACTION 2:** Send recovery email template
5. **ACTION 3:** Notify team in Slack (optional)

#### **Step 3 : Test & Refine** (15 min)
1. Test with dummy data
2. Check email delivery
3. Verify list segmentation
4. Monitor for 24h

#### **Step 4 : Scale & Optimize** (Future)
1. Add personalization (product images, names)
2. Multi-step sequence (1h, 24h, 72h)
3. A/B test email templates
4. Track revenue attribution

### Expected Results
- **20-30% cart recovery rate** (industry standard)
- **€X additional revenue** per month
- **Saved time** : 5-10h/semaine manual follow-up

## 📚 Resources & Next Steps

### Templates & Workflows Disponibles

**Zapier Templates :**
- Lead capture → CRM + Email + Slack
- New customer → Onboarding sequence  
- Cart abandonment → Recovery emails
- Weekly reporting automation

**Airtable Bases :**
- Content calendar with automation
- Lead scoring database
- Campaign ROI tracker
- A/B test results log

**Make Scenarios :**
- Advanced lead scoring
- Multi-channel campaign sync
- Customer lifecycle automation

### Recommended Learning Path

**Week 1 :** Zapier basics (5 core Zaps)
**Week 2 :** Airtable database design
**Week 3 :** Email automation sequences
**Week 4 :** Advanced workflows with Make
**Month 2 :** Landing page creation
**Month 3 :** Full stack integration & optimization

### Community & Support

**No-Code Communities :**
- **Makerpad** : Course + community
- **No Code Founders** : Entrepreneurs network
- **Zapier Community** : Official support forum
- **r/nocode** : Reddit discussions

---

**🎯 Action Item :** Créez votre premier workflow Zapier cette semaine ! Start simple avec "New form submission → Add to email list + Slack notification".

**Next step :** Module 7 où nous explorons l'IA appliquée à chaque canal marketing ! 🤖
    `
  },
  '7-ai-par-canal': {
    component: null,
    title: "Module 7 — IA appliquée par canal marketing",
    duration: "3h",
    status: "nouveau" as const,
    prev: "6-no-code",
    next: null,
    content: `
## 🤖 Introduction à l'IA Marketing
L'IA révolutionne le Growth Marketing par :
- **Personnalisation à grande échelle**
- **Optimisation continue** 
- **Gain de temps** sur les tâches répétitives
- **Insights avancés** invisibles à l'œil humain

## 📱 Social Media + IA (Focus détecté → analysé → reproduit)

### 1. Système de détection des posts performants
- **Engagement Rate normalisé** = (likes + comments + shares + saves) / reach
- **Z-score** pour identifier les outliers
- **Time-to-peak** : vitesse d'engagement

### 2. Analyse du "pourquoi ça marche"
L'IA analyse automatiquement :
- Hook (première phrase)
- Structure (liste/story/how-to)
- Ton (directif/inspirant/pédagogique)
- Preuves (données chiffrées, cas concrets)

### 3. Reproduction intelligente
- Gardez le pattern qui marche
- Changez le contexte/industrie
- Adaptez le ton à votre audience
- Testez et itérez

## 📧 Email Marketing + IA

### Segmentation prédictive
- **RFM automatisé** (Récence, Fréquence, Montant)
- **Propensity scoring** : qui va acheter quand
- **Churn prediction** : qui va partir et pourquoi

### Personnalisation dynamique
- Subject lines adaptés par persona
- Contenu modulaire selon l'historique
- Timing optimal par utilisateur
- Fréquence adaptive anti-fatigue

## 🎯 Publicité + IA

### Créa optimization
- **Analyse des visuels performants** (couleurs, composition, émotions)
- **Textes variants automatiques** à partir d'un brief
- **Format adaptation** : du carré 1:1 au vertical 9:16
- **A/B testing à grande échelle**

### Audience intelligence
- **Lookalike 2.0** : au-delà des données Facebook
- **Intent signals** : qui cherche quoi, quand
- **Competitor audience analysis**
- **Real-time bidding optimization**

## 🔍 SEO + IA

### Content intelligence
- **Keywords clusters** sémantiques
- **Content gaps** vs concurrents
- **SERP features optimization**
- **User intent matching**

### Technical SEO
- **Core Web Vitals** monitoring
- **Schema markup** automation
- **Internal linking** suggestions
- **Content freshness** alerts

## 🛒 E-commerce + IA

### Product recommendations
- **Collaborative filtering** avancé
- **Visual similarity** search
- **Bundle suggestions** intelligentes
- **Price optimization** dynamique

### Conversion optimization
- **Heatmaps analysis** automatisée
- **Funnel drop-off** prediction
- **Cart abandonment** prevention
- **Review sentiment** analysis

## 📊 Analytics + IA

### Insights automation
- **Anomaly detection** en temps réel
- **Attribution modeling** multi-touch
- **Customer journey** reconstruction
- **ROI prediction** par canal

### Reporting intelligent
- **Auto-explanations** des variations
- **Recommendations** actionnables
- **Performance** forecasting
- **Budget allocation** optimization

## 🚀 Implementation Roadmap

### Phase 1 : Foundation (Semaine 1-2)
1. **Audit** des outils actuels
2. **Data** quality check
3. **Quick wins** identification
4. **Tools** selection

### Phase 2 : Automation (Semaine 3-6)
1. **Email** segmentation
2. **Social** content planning
3. **Ads** créatives testing
4. **Analytics** dashboards

### Phase 3 : Intelligence (Semaine 7-12)
1. **Predictive** models
2. **Real-time** optimization
3. **Cross-channel** orchestration
4. **ROI** maximization

## 🎯 Cas Pratique : E-commerce Fashion

**Situation** : Boutique en ligne, 10K visiteurs/mois, 2% conversion

**IA Implementation :**
1. **Social Listening** → Tendances détection
2. **Visual Recognition** → Looks suggestions  
3. **Price Optimization** → Margin maximization
4. **Email Personalization** → +40% open rate
5. **Retargeting Intelligence** → +25% ROAS

**Résultats 3 mois :**
- Conversion : 2% → 3.2% (+60%)
- Panier moyen : 85€ → 110€ (+29%)  
- LTV : 180€ → 280€ (+55%)
- CAC : 45€ → 38€ (-15%)

## 🔧 Outils Recommandés

### Analytics & Insights
- **Google Analytics 4** + GA Intelligence
- **Mixpanel** pour event tracking
- **Amplitude** pour product analytics

### Création de Contenu
- **ChatGPT/Claude** pour le copywriting
- **Midjourney** pour les visuels
- **Jasper** pour les campagnes

### Automation
- **Zapier** + AI apps
- **Make** pour workflows complexes
- **n8n** pour les power users

### Testing & Optimization  
- **Google Optimize** (gratuit)
- **VWO** (payant, plus de features)
- **Hotjar** pour l'UX analysis

## 💡 Growth Hacks avec IA

### 1. Content Multiplication
Un article → 20 formats :
- LinkedIn posts
- Twitter threads  
- Instagram carousels
- TikTok scripts
- Email newsletters

### 2. Competitor Intelligence
- **Pages monitoring** → content ideas
- **Ads library** analysis → créa insights
- **Keywords gaps** → SEO opportunities
- **Pricing changes** → market reactions

### 3. Customer Success Prediction
Prédire qui va churn → action proactive :
- Usage patterns analysis
- Support tickets sentiment
- Feature adoption scoring
- Satisfaction prediction

## 🎓 Exercice Final

**Votre Mission :**
Choisissez UN canal marketing de votre business et créez votre plan d'implémentation IA sur 30 jours.

**Livrables :**
1. **Audit** actuel (outils, process, performance)
2. **Opportunités** identifiées avec l'IA
3. **Roadmap** 30 jours avec quick wins
4. **KPIs** de mesure du succès
5. **Budget** et ressources nécessaires

**Bonus :** Présentez votre plan à la communauté pour feedback ! 🚀

---

**🎉 Félicitations !** Vous avez maintenant toutes les clés pour révolutionner votre Growth Marketing avec l'IA. 

**Next steps :**
- Implémentez un quick win cette semaine
- Rejoignez notre communauté Slack
- Programmez votre session de coaching 1:1

**L'IA ne remplace pas le marketeur, elle le transforme en super-héros ! 🦸‍♂️**
    `
  }
};

export async function generateStaticParams() {
  return Object.keys(modules).map((slug) => ({
    slug: slug,
  }));
}

export default async function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const moduleData = modules[slug as keyof typeof modules];
  
  if (!moduleData) {
    notFound();
  }
  
  // Informations sur le statut
  const statusInfo = getStatusInfo(moduleData.status);
  
  // Vérifier si c'est un module avec CTA de téléchargement
  const showDownloadCTA = ['3-cas-pratique', '6-no-code', '7-ai-par-canal'].includes(slug);

  const currentModule = getModuleBySlug(slug);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Stepper Navigation */}
      <StepperNav currentSlug={slug} />
      
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Modules', href: '/modules' },
            { label: moduleData.title }
          ]} 
        />
        
        {/* Progress Bar */}
        <ProgressBar />
        
        {/* Header */}
        <div className="mb-8">{/* Removed back link since we have breadcrumbs */}
          
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-4xl font-bold text-gray-900">{moduleData.title}</h1>
            <Badge className={statusInfo.color}>
              {statusInfo.label}
            </Badge>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {moduleData.duration}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          {moduleData.content ? (
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: moduleData.content.replace(/\n/g, '<br />').replace(/## /g, '<h2>').replace(/### /g, '<h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/- \*\*(.*?)\*\*/g, '<li><strong>$1</strong></li>') }} />
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Module en cours de préparation</h2>
              <p className="text-gray-600 mb-8">
                Ce module sera disponible prochainement. En attendant, vous pouvez consulter les autres modules disponibles.
              </p>
              <Link href="/modules">
                <Button>
                  Voir les autres modules
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mark Complete Button */}
        <div className="mb-8">
          <MarkCompleteButton 
            type="module" 
            slug={slug} 
            title={moduleData.title} 
          />
        </div>

        {/* Ateliers */}
        <AtelierCallouts moduleSlug={slug} />

        {/* Navigation */}
        <PrevNextNav currentSlug={slug} />
      </div>
      
      {/* Download CTA */}
      {showDownloadCTA && <DownloadCTA />}
    </div>
  );
}