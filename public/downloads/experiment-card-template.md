# Experiment Card Template

## Instructions
Utilisez cette fiche pour structurer chaque test A/B. Une Experiment Card = 1 page maximum. Dupliquez ce template pour chaque nouveau test.

---

## 🧪 **Experiment Card #[ID]**

### **Contexte & Insight Source**
**Problème identifié :**
_Décrivez le problème business ou UX que vous voulez résoudre_

**Source de l'insight :**
- [ ] Données quantitatives (Analytics, Dashboard)
- [ ] Support client / Sales feedback  
- [ ] Recherche utilisateur (interviews, sondages)
- [ ] Benchmark concurrentiel
- [ ] Autre : ________________

**Détails de la source :**
_Précisez les données/retours qui motivent ce test_

---

### **🎯 Hypothèse (Format SMART)**

**Hypothèse complète :**
Chez **[SEGMENT]**, **[CHANGEMENT]** augmentera **[KPI PRIMAIRE]** de **+X pts** en **[PÉRIODE]**, car **[INSIGHT/RAISON]**.

**Exemple :**
*Chez RH PME, preuve chiffrée en H1 augmentera CVR visite→signup de +2 pts en 14j, car réduction friction cognitive.*

---

### **📊 KPIs & Métriques**

**KPI Primaire (1 seul) :**
- **Métrique :** ________________
- **Baseline actuelle :** ________________
- **MDE souhaité :** +_______ pts
- **Seuil de succès :** ≥_______ pts

**KPIs Secondaires :**
- ________________ (pour comprendre le "pourquoi")
- ________________ 
- ________________

**Guardrails (ne pas dégrader) :**
- ________________ (ex: taux d'erreur)
- ________________ (ex: NPS, churn)
- ________________

**Lien avec NSM :**
Ce test impacte l'input NSM : **[QUEL INPUT DE VOTRE NSM TREE ?]**

---

### **🔬 Design du Test**

**Type de test :**
- [ ] A/B fixe (2 variantes)
- [ ] A/B/n (3+ variantes)  
- [ ] Holdout (groupe sans exposition)
- [ ] Feature flag / ramp-up
- [ ] Autre : ________________

**Variantes :**
- **Contrôle (A) :** ________________
- **Variante 1 (B) :** ________________
- **Variante 2 (C) :** ________________ *(si applicable)*

**Ciblage :**
- **Segment :** ________________
- **% du trafic :** _______%
- **Critères d'inclusion :** ________________
- **Critères d'exclusion :** ________________

---

### **📅 Planification**

**Échantillon estimé :**
- **Par variante :** _______ utilisateurs
- **Total :** _______ utilisateurs
- **Calcul basé sur :** Baseline _____% → _____% (MDE), α=5%, Power=80%

**Durée :**
- **Durée minimale :** _______ jours
- **Date de début :** ________________
- **Date de fin :** ________________
- **Cycles couverts :** [ ] Semaine complète [ ] Weekend [ ] Périodes spéciales

---

### **🛠️ Implémentation**

**Owner principal :** ________________

**Outils utilisés :**
- [ ] PostHog
- [ ] GrowthBook  
- [ ] Optimizely/VWO
- [ ] Feature flags internes
- [ ] Autre : ________________

**Plan de tracking :**
- **Events à tracker :** ________________
- **Properties nécessaires :** ________________
- **Dashboard de suivi :** ________________

**QA Checklist :**
- [ ] Events bien trackés en staging
- [ ] Test responsive (mobile/desktop)
- [ ] Plan de rollback défini
- [ ] Monitoring erreurs en place

---

### **🎯 Critères de Décision**

**START (Scale) - Si :**
- [ ] Effet primaire ≥ +_______ pts
- [ ] p-value < 0.05 (IC 95%)
- [ ] Aucun impact négatif sur guardrails
- [ ] Impact positif sur 60%+ des segments

**ITERATE - Si :**
- [ ] Signaux positifs mais < seuil
- [ ] Impact hétérogène par segment  
- [ ] Guardrails légèrement dégradés
- [ ] Insight pour améliorer v2

**KILL - Si :**
- [ ] Effet nul ou négatif après 80% power
- [ ] Impact négatif sur guardrails
- [ ] Coût d'opportunité trop élevé
- [ ] Hypothèse de base invalidée

---

### **📚 Learnings Attendus**

**Questions à répondre :**
1. ________________
2. ________________
3. ________________

**Ce qu'on garde même en cas d'échec :**
- Validation/invalidation de l'insight
- Comportement par segment
- Impact sur métriques secondaires
- ________________

---

### **📈 Résultats (À remplir post-test)**

**Uplift observé :**
- **Primaire :** +_______ pts (______% relatif)
- **IC 95% :** [_______ ; _______]
- **p-value :** _______

**Décision finale :** [ ] START [ ] ITERATE [ ] KILL

**Prochaine action :**
________________

**Learning principal :**
________________

---

**Date de création :** ________________  
**Dernière mise à jour :** ________________  
**Statut :** [ ] Draft [ ] Ready [ ] Running [ ] Completed

---

*Template Experiment Card - Module 5 Growth Marketing*
