# Automation Canvas — Template (Module 6)

> Objectif : décrire **une** automatisation no-code alignée sur un **input de la NSM** et prête à être testée.

## 1) Contexte & Objectif
- **Nom du workflow** : 
- **NSM visée** : 
- **Input NSM ciblé** : (Acquisition / Activation / Rétention / Revenue / Referral)
- **KPI primaire** : 
- **KPIs secondaires** : 
- **Guardrails** : (ex. erreurs, unsub, NPS, coût)

## 2) Déclencheur
- Type : (Cron / Webhook / Event)
- Fréquence / fenêtre : 
- Source de vérité : 

## 3) Données d’entrée
- **Sources** : (API, CSV, Sheets, CRM, Analytics)
- **Schéma minimal** (exemple) :
```json
{
  "id": "post_123",
  "channel": "linkedin",
  "text": "…",
  "metrics": { "likes": 120, "comments": 15, "shares": 8, "saves": 6, "impressions": 5600 }
}
```
- **Qualité attendue** : (noms d’événements, UTM, identités)

## 4) Règles / Prompt IA
- **Règles métier** (if/then) : 
- **Prompt (analyse)** — sortie **JSON strict** :
```
Rôle: Analyste.
Tâche: …
Sortie JSON stricte: {"field1":"","field2":""}
Contraintes: langue, longueur, mots interdits.
```
- **Prompt (génération)** — sortie **JSON strict** :
```
Rôle: Copywriter.
Tâche: …
Sortie JSON stricte: [{"hook":"","body":"","cta":""}, …]
```

## 5) Actions & Sorties
- Où écrire ? (Sheets/DB/CRM)
- Alerte : (Slack/Email)
- Publication (optionnel) : (Buffer/Hootsuite…)
- **Schéma de sortie** (exemple) :
```json
{
  "timestamp": "2025-03-05T10:30:00Z",
  "input_id": "post_123",
  "decision": "iterate|start|kill",
  "artifacts": {
    "analysis": {"reason":"…","hook":"…"},
    "variants": [{"hook":"…","body":"…","cta":"…"}]
  }
}
```

## 6) Logs & Mesure
- **Log par run** : timestamp, workflow_id, input_id, output_id, target_kpi, valeur/erreur
- **Agrégats hebdo** → *Growth_Log* : winners, clones publiés, CTR clones, campagnes SEA itérées
- **Raccord Dashboard** : carte(s) impactées, annotations

## 7) Sécurité & conformité
- **PII** : (minimiser, anonymiser, rétention)
- **Secrets** : (stockage clés, rotation)
- **Risques & rollback** : (plan en cas d’erreur)

## 8) Delivery
- **Owner** : 
- **SLA / horaires** : 
- **Environnements** : (staging → prod)
- **Check QA** : (tests, jeu de données, seuils)

## 9) Plan de test (Module 5)
- **Hypothèse** : 
- **Design** : (A/B, holdout, flag)
- **Échantillon & durée** : 
- **Critères** : start / iterate / kill

---

### Annexe — Variables d’environnement (ex. n8n)
- `LLM_ENDPOINT`, `LLM_MODEL`, `OPENAI_API_KEY`
- `SHEET_ID`, `SLACK_CHANNEL`
- Autres : `SOCIAL_ANALYTICS_URL`, `TARGET_PERSONA`, `TARGET_OBJECTIVE`, `TARGET_KPI`
