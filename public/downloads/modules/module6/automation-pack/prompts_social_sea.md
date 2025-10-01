# Prompts IA — Social + SEA (Module 6)

## Analyse d’un post gagnant (classification)
Rôle: Analyste social.
Entrées: {texte, métriques, persona, canal}.
Tâche: Résume en 3 puces pourquoi ce post performe. Classe: hook, format, angle, tone, CTA.
Sortie JSON: { "reason": "...", "hook": "...", "format": "...", "angle": "...", "tone":"...", "cta":"..." }
Contraintes: Français, 80 mots max.

## Génération de clones
Rôle: Copywriter.
Entrées: {blueprint_json, persona, canal}.
Tâche: Propose 3 variantes suivant le blueprint, chacune avec Hook • Body (≤280) • CTA.
Contraintes: ton pro, pas de claims non prouvés, pas d’emoji si LinkedIn.
Sortie JSON: [{"hook":"","body":"","cta":""}, ...]

## SEA — RSA assets
Entrées: {cluster, intent, bénéfice, preuves}.
Sortie: 10 headlines (≤30c), 4 descriptions (≤90c), liste negatives candidats.
Contraintes: cohérence requête ↔ H1 ↔ preuve ↔ CTA; pas de superlatifs vagues, pas de claims non prouvés.
