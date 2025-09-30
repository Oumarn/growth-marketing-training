# In-App Survey Template - Buyer Persona Validation

## Objectif
Collecter des données quantitatives pour valider les personas créés lors de l'atelier

## Timing de déclenchement
- **Nouveau utilisateur** : Après 7 jours d'utilisation (post first value)
- **Utilisateur existant** : Après une action à forte valeur (réservation de 10+ meetings)
- **Utilisateur en risque** : Quand l'usage diminue (moins de 3 connexions en 2 semaines)

## Questions du survey (5 questions max)

### Q1. Quel est votre rôle principal ?
- [ ] Commercial/Business Developer
- [ ] Consultant/Freelance
- [ ] Manager/Directeur
- [ ] Entrepreneur/Fondateur
- [ ] Coach/Formateur
- [ ] Autre : _________

### Q2. Quelle est la taille de votre équipe ?
- [ ] Solo (juste moi)
- [ ] 2-5 personnes
- [ ] 6-20 personnes
- [ ] 21-50 personnes
- [ ] 50+ personnes

### Q3. Combien de rendez-vous planifiez-vous par semaine ?
- [ ] 1-5 rendez-vous
- [ ] 6-15 rendez-vous
- [ ] 16-30 rendez-vous
- [ ] 30+ rendez-vous

### Q4. Quel a été votre principal défi avant d'utiliser notre solution ?
- [ ] Trop d'allers-retours par email pour planifier
- [ ] Double-booking et conflits d'agenda
- [ ] Perte de leads pendant le processus de planification
- [ ] Manque de visibilité sur l'activité de prospection
- [ ] Intégration complexe avec les autres outils
- [ ] Autre : _________

### Q5. Sur une échelle de 0 à 10, quelle est la probabilité que vous recommandiez notre solution à un collègue ?
```
0  1  2  3  4  5  6  7  8  9  10
```

## Logique de segmentation des réponses

### Persona "Growth Hacker" 
- Rôle : Commercial/Business Dev + Entrepreneur/Fondateur
- Équipe : 2-20 personnes
- Volume : 16+ rendez-vous/semaine
- Défi principal : Perte de leads + Manque de visibilité

### Persona "Consultant Expert"
- Rôle : Consultant/Freelance + Coach/Formateur
- Équipe : Solo ou 2-5 personnes  
- Volume : 6-15 rendez-vous/semaine
- Défi principal : Trop d'allers-retours email

### Persona "Manager Débordé"
- Rôle : Manager/Directeur
- Équipe : 6-50 personnes
- Volume : 6-30 rendez-vous/semaine
- Défi principal : Double-booking + Intégration outils

## Format technique

```javascript
// Configuration Hotjar/Typeform
{
  "trigger": "user_action",
  "conditions": {
    "days_since_signup": 7,
    "or": {
      "meetings_booked": ">= 10",
      "login_frequency": "< 3_in_14_days"
    }
  },
  "max_responses_per_user": 1,
  "display_frequency": "once_per_condition"
}
```

## Actions post-survey
- **Score NPS 9-10** : Demander un témoignage/review
- **Score NPS 7-8** : Identifier les axes d'amélioration  
- **Score NPS 0-6** : Contact direct pour comprendre les blocages
- **Nouveau persona identifié** : Mise à jour de la documentation personas
