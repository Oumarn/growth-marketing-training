Module 5 — Experiment Pack (Templates + MDE)

Fichiers inclus
- experiment_card_template.md — fiche standard (1 page) pour chaque test
- experiment_cards_template.csv — tableau de saisie rapide (plusieurs tests)
- mde_calculator.csv — calcul d’échantillon/variante (formules Google Sheets/Excel incluses)
- experiments_log_template.csv — journal de suivi & décisions

Conseils d’usage
1) Définissez l’hypothèse & le KPI primaire, puis dimensionnez avec mde_calculator.csv.
2) Renseignez experiment_cards_template.csv et ouvrez-le dans Google Sheets/Excel.
3) Tenez à jour experiments_log_template.csv et exposez-le dans votre page /experiments.
4) Décidez systématiquement : start / iterate / kill — documentez les learnings.

Formule MDE (2 proportions, approx.)
n ≈ [ Z(1-α/2)*√(2*p̄*(1-p̄)) + Z(power)*√(p1*(1-p1)+p2*(1-p2)) ]² / (p2 - p1)²
où p1 = baseline, p2 = baseline + Δ, p̄ = (p1+p2)/2
