import fs from "node:fs/promises";
import path from "node:path";
import { getAllModules, getModuleBySlug } from "./modules";

export interface SlideContent {
  id: string;
  title: string;
  content: string;
  type: 'cover' | 'content' | 'workshop' | 'quiz' | 'summary';
}

export interface ModuleSlides {
  title: string;
  moduleSlug: string;
  slides: SlideContent[];
}

/**
 * Extract slides from a module's content component
 * This function analyzes the module structure and breaks it into logical slides
 */
export async function loadModuleSlides(moduleSlug: string): Promise<ModuleSlides> {
  const module = getModuleBySlug(moduleSlug);
  
  if (!module) {
    throw new Error(`Module not found: ${moduleSlug}`);
  }

  // For now, we'll create a basic slide structure
  // Later, this can be enhanced to parse actual component content
  const slides: SlideContent[] = [
    {
      id: 'cover',
      title: module.title,
      content: `
        <div class="slide-cover">
          <h1>${module.title}</h1>
          <p class="duration">${module.duration}</p>
          <p class="description">${module.description}</p>
          <ul class="objectives">
            ${module.objectives?.map(obj => `<li>${obj}</li>`).join('') || ''}
          </ul>
        </div>
      `,
      type: 'cover'
    }
  ];

  // Add content slides based on module structure
  if (moduleSlug === 'module-3/cas-pratiques-mini-campagne') {
    slides.push(
      // Introduction slide
      {
        id: 'intro-objectives',
        title: 'Module 3 — Objectifs',
        content: `
          <div class="slide-content">
            <h2>🎯 Objectifs du Module 3</h2>
            <div class="objectives-grid">
              <div class="objective-item">
                <div class="objective-icon">📚</div>
                <h3>Extraire des mécaniques réplicables</h3>
                <p>Analyser les cas emblématiques (Dropbox, HubSpot, Airbnb, PayPal)</p>
              </div>
              <div class="objective-item">
                <div class="objective-icon">💡</div>
                <h3>Formuler une PV claire et testable</h3>
                <p>Créer des propositions de valeur impactantes</p>
              </div>
              <div class="objective-item">
                <div class="objective-icon">🚀</div>
                <h3>Concevoir une mini-campagne</h3>
                <p>Landing + Ads + Email avec KPIs définis</p>
              </div>
              <div class="objective-item">
                <div class="objective-icon">🔬</div>
                <h3>Préparer 3 expériences A/B</h3>
                <p>Tests rapides à lancer immédiatement</p>
              </div>
            </div>
          </div>
        `,
        type: 'content'
      },
      // Dropbox case study - detailed breakdown
      {
        id: 'dropbox-mechanism',
        title: 'Dropbox — Le Mécanisme',
        content: `
          <div class="slide-content">
            <h2>Dropbox — Parrainage Double-Sided</h2>
            <div class="mechanism-breakdown">
              <div class="main-concept">
                <h3>🔄 Concept Central</h3>
                <p class="highlight">Les deux parties (invitant et invité) reçoivent une valeur immédiate</p>
              </div>
              <div class="how-it-works">
                <h3>⚙️ Comment ça marche</h3>
                <div class="steps-horizontal">
                  <div class="step">User partage → +500MB</div>
                  <div class="arrow">→</div>
                  <div class="step">Ami s'inscrit → +500MB</div>
                  <div class="arrow">→</div>
                  <div class="step">Effet viral</div>
                </div>
              </div>
              <div class="key-insight">
                <h3>💡 Insight Clé</h3>
                <p>Friction minimale (1 clic) + Valeur immédiate (espace gratuit)</p>
              </div>
            </div>
          </div>
        `,
        type: 'content'
      },
      {
        id: 'dropbox-kpis',
        title: 'Dropbox — KPIs & Timing',
        content: `
          <div class="slide-content">
            <h2>Dropbox — Métriques & Activation</h2>
            <div class="metrics-timing">
              <div class="kpis-section">
                <h3>📊 KPIs Clés</h3>
                <div class="kpi-list">
                  <div class="kpi-item">
                    <span class="kpi-label">Participation</span>
                    <span class="kpi-value">% d'utilisateurs invitants</span>
                  </div>
                  <div class="kpi-item">
                    <span class="kpi-label">Viralité</span>
                    <span class="kpi-value">K-factor (invitations par user)</span>
                  </div>
                  <div class="kpi-item">
                    <span class="kpi-label">Conversion</span>
                    <span class="kpi-value">Taux de conversion des invités</span>
                  </div>
                </div>
              </div>
              <div class="timing-section">
                <h3>⏰ Timing d'Activation</h3>
                <div class="timing-flow">
                  <div class="timing-step">
                    <div class="timing-icon">✓</div>
                    <p>Après le premier succès utilisateur</p>
                  </div>
                  <div class="timing-step">
                    <div class="timing-icon">📁</div>
                    <p>Fichier synchronisé avec succès</p>
                  </div>
                  <div class="timing-step">
                    <div class="timing-icon">🎯</div>
                    <p>Proposition de parrainage contextuelle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        type: 'content'
      },
      // HubSpot case study
      {
        id: 'hubspot-mechanism',
        title: 'HubSpot — Lead Magnet Utilitaire',
        content: `
          <div class="slide-content">
            <h2>HubSpot — Lead Magnet Utilitaire</h2>
            <div class="hubspot-strategy">
              <div class="core-principle">
                <h3>🛠️ Principe Central</h3>
                <p class="highlight">Outil utilitaire > Contenu passif</p>
                <div class="comparison">
                  <div class="vs-item losing">
                    <span class="vs-label">❌</span>
                    <span>eBook / Guide PDF</span>
                  </div>
                  <div class="vs-item winning">
                    <span class="vs-label">✅</span>
                    <span>Audit / Diagnostic</span>
                  </div>
                </div>
              </div>
              <div class="value-prop">
                <h3>💡 Valeur Immédiate</h3>
                <ul>
                  <li>Diagnostic personnalisé</li>
                  <li>Recommandations actionables</li>
                  <li>Score de performance</li>
                </ul>
              </div>
            </div>
          </div>
        `,
        type: 'content'
      },
      {
        id: 'hubspot-optimization',
        title: 'HubSpot — Optimisation Progressive',
        content: `
          <div class="slide-content">
            <h2>HubSpot — Progressive Profiling</h2>
            <div class="progressive-strategy">
              <h3>🎯 Stratégie d'Optimisation</h3>
              <div class="profiling-steps">
                <div class="profiling-step">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <h4>Première interaction</h4>
                    <p>Minimum d'infos (email + URL site)</p>
                  </div>
                </div>
                <div class="profiling-step">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <h4>Résultats personnalisés</h4>
                    <p>Audit immédiat + recommandations</p>
                  </div>
                </div>
                <div class="profiling-step">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <h4>Approfondissement graduel</h4>
                    <p>Questions supplémentaires pour plus de valeur</p>
                  </div>
                </div>
              </div>
              <div class="key-insight">
                <h3>💡 Résultat</h3>
                <p>CVR 40% supérieur vs eBook classique</p>
              </div>
            </div>
          </div>
        `,
        type: 'content'
      },
      // Airbnb case study
      {
        id: 'airbnb-strategy',
        title: 'Airbnb — Qualité avant Volume',
        content: `
          <div class="slide-content">
            <h2>Airbnb — Qualité avant Volume</h2>
            <div class="quality-strategy">
              <div class="core-insight">
                <h3>📈 Stratégie Contre-Intuitive</h3>
                <p class="highlight">Améliorer CVR avant d'augmenter le trafic</p>
              </div>
              <div class="formula-visual">
                <div class="formula">
                  <span class="formula-part good">CVR amélioré</span>
                  <span class="operator">×</span>
                  <span class="formula-part">Traffic</span>
                  <span class="operator">=</span>
                  <span class="formula-result">Croissance durable</span>
                </div>
                <div class="vs-divider">VS</div>
                <div class="formula bad">
                  <span class="formula-part bad">Traffic seul</span>
                  <span class="operator">=</span>
                  <span class="formula-result bad">Gaspillage budget</span>
                </div>
              </div>
              <div class="priority-order">
                <h3>🔢 Ordre des Priorités</h3>
                <ol>
                  <li>Optimiser la conversion</li>
                  <li>Puis scaler le trafic</li>
                </ol>
              </div>
            </div>
          </div>
        `,
        type: 'content'
      },
      {
        id: 'airbnb-proof-elements',
        title: 'Airbnb — Éléments de Preuve',
        content: `
          <div class="slide-content">
            <h2>Airbnb — Preuves Sociales</h2>
            <div class="proof-elements">
              <h3>🏠 Éléments Optimisés</h3>
              <div class="proof-grid">
                <div class="proof-item">
                  <div class="proof-icon">📸</div>
                  <h4>Photos Professionnelles</h4>
                  <p>Service gratuit de photographes pro</p>
                  <div class="impact">+40% réservations</div>
                </div>
                <div class="proof-item">
                  <div class="proof-icon">⭐</div>
                  <h4>Avis Détaillés</h4>
                  <p>Système d'avis bidirectionnel vérifié</p>
                  <div class="impact">+25% confiance</div>
                </div>
                <div class="proof-item">
                  <div class="proof-icon">🛡️</div>
                  <h4>Badges de Confiance</h4>
                  <p>Vérifications identité + assurances</p>
                  <div class="impact">+30% CVR</div>
                </div>
                <div class="proof-item">
                  <div class="proof-icon">📍</div>
                  <h4>Géolocalisation</h4>
                  <p>Cartes précises + quartier</p>
                  <div class="impact">+15% engagement</div>
                </div>
              </div>
            </div>
          </div>
        `,
        type: 'content'
      },
      // PayPal case study
      {
        id: 'paypal-incentive',
        title: 'PayPal — Incentive Temporaire',
        content: `
          <div class="slide-content">
            <h2>PayPal — Incentive Temporaire</h2>
            <div class="paypal-strategy">
              <div class="incentive-mechanism">
                <h3>💰 Mécanisme d'Incentive</h3>
                <div class="incentive-visual">
                  <div class="incentive-flow">
                    <div class="incentive-step">
                      <span class="amount">$10</span>
                      <p>pour l'invitant</p>
                    </div>
                    <div class="plus">+</div>
                    <div class="incentive-step">
                      <span class="amount">$10</span>
                      <p>pour l'invité</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="targeting-urgency">
                <div class="targeting">
                  <h3>🎯 Ciblage Précis</h3>
                  <p>Early adopters tech pour créer l'effet réseau</p>
                </div>
                <div class="urgency">
                  <h3>⚡ Urgence Créée</h3>
                  <p>Incentive temporaire → FOMO → Action rapide</p>
                </div>
              </div>
            </div>
          </div>
        `,
        type: 'content'
      },
      // Synthesis slide
      {
        id: 'cases-synthesis',
        title: 'Synthèse — Mécaniques Réplicables',
        content: `
          <div class="slide-content">
            <h2>🔄 Mécaniques Réplicables</h2>
            <div class="synthesis-grid">
              <div class="synthesis-item">
                <h3>🎯 Timing d'Activation</h3>
                <p>Déclencher après un premier succès utilisateur</p>
                <div class="examples">Dropbox → après sync, PayPal → après transaction</div>
              </div>
              <div class="synthesis-item">
                <h3>🎁 Valeur Immédiate</h3>
                <p>Bénéfice instantané et tangible</p>
                <div class="examples">Audit HubSpot, Espace Dropbox, Cash PayPal</div>
              </div>
              <div class="synthesis-item">
                <h3>🏆 Qualité > Quantité</h3>
                <p>Optimiser conversion avant scaling</p>
                <div class="examples">Airbnb photos pro, avis vérifiés</div>
              </div>
              <div class="synthesis-item">
                <h3>⚡ Urgence & Rareté</h3>
                <p>Créer FOMO avec limitations temporelles</p>
                <div class="examples">PayPal incentive limitée, places restreintes</div>
              </div>
            </div>
          </div>
        `,
        type: 'content'
      },
      // Workshop introduction
      {
        id: 'workshop-intro',
        title: 'Atelier — Mini-Campagne (55\')',
        content: `
          <div class="slide-content">
            <h2>🛠️ Atelier Mini-Campagne</h2>
            <div class="workshop-overview">
              <div class="workshop-objective">
                <h3>🎯 Objectif</h3>
                <p>Concevoir une campagne testable complète (Landing + Ads + Email)</p>
              </div>
              <div class="workshop-structure">
                <h3>📋 Structure (55 minutes)</h3>
                <div class="workshop-steps">
                  <div class="workshop-step">
                    <div class="step-time">10'</div>
                    <div class="step-content">
                      <h4>1️⃣ PV & Message</h4>
                      <p>Définir proposition de valeur claire</p>
                    </div>
                  </div>
                  <div class="workshop-step">
                    <div class="step-time">10'</div>
                    <div class="step-content">
                      <h4>2️⃣ Landing Page</h4>
                      <p>Structure et éléments de conversion</p>
                    </div>
                  </div>
                  <div class="workshop-step">
                    <div class="step-time">15'</div>
                    <div class="step-content">
                      <h4>3️⃣ Ads</h4>
                      <p>Créatifs et audiences</p>
                    </div>
                  </div>
                  <div class="workshop-step">
                    <div class="step-time">10'</div>
                    <div class="step-content">
                      <h4>4️⃣ Email</h4>
                      <p>Séquences de nurturing</p>
                    </div>
                  </div>
                  <div class="workshop-step">
                    <div class="step-time">10'</div>
                    <div class="step-content">
                      <h4>5️⃣ Plan de Test</h4>
                      <p>3 expériences A/B à lancer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
        type: 'workshop'
      },
      // Quiz slide
      {
        id: 'quiz-validation',
        title: 'Quiz — Validation des Concepts',
        content: `
          <div class="slide-content">
            <h2>🧠 Quiz de Validation</h2>
            <div class="quiz-questions">
              <div class="quiz-item">
                <h3>Q1: Le parrainage Dropbox fonctionne car il est double-sided</h3>
                <div class="quiz-answer correct">✅ VRAI</div>
                <p class="quiz-explanation">Les deux parties (invitant et invité) reçoivent une valeur immédiate</p>
              </div>
              <div class="quiz-item">
                <h3>Q2: Un lead magnet eBook est plus efficace qu'un outil utilitaire</h3>
                <div class="quiz-answer incorrect">❌ FAUX</div>
                <p class="quiz-explanation">HubSpot montre qu'un outil utilitaire (audit) convertit mieux qu'un contenu passif</p>
              </div>
              <div class="quiz-item">
                <h3>Q3: Le timing d'activation est crucial dans toutes ces stratégies</h3>
                <div class="quiz-answer correct">✅ VRAI</div>
                <p class="quiz-explanation">Dropbox déclenche après le premier succès, PayPal cible les early adopters</p>
              </div>
            </div>
          </div>
        `,
        type: 'quiz'
      },
      // Summary slide
      {
        id: 'module-summary',
        title: 'Module 3 — Récapitulatif',
        content: `
          <div class="slide-content">
            <h2>✅ Ce que vous maîtrisez maintenant</h2>
            <div class="mastery-grid">
              <div class="mastery-item achieved">
                <div class="mastery-icon">📚</div>
                <h3>Mécaniques Réplicables</h3>
                <p>4 stratégies éprouvées: Dropbox, HubSpot, Airbnb, PayPal</p>
              </div>
              <div class="mastery-item achieved">
                <div class="mastery-icon">🎯</div>
                <h3>Proposition de Valeur</h3>
                <p>Formuler des PV claires et testables</p>
              </div>
              <div class="mastery-item achieved">
                <div class="mastery-icon">🚀</div>
                <h3>Mini-Campagne</h3>
                <p>Structure Landing + Ads + Email + KPIs</p>
              </div>
              <div class="mastery-item achieved">
                <div class="mastery-icon">🔬</div>
                <h3>Plan d'Expérimentation</h3>
                <p>3 tests A/B prêts à lancer</p>
              </div>
            </div>
            <div class="next-step">
              <h3>🔄 Prochaine étape</h3>
              <p>Module 4 → KPIs & Dashboard pour mesurer vos résultats</p>
            </div>
          </div>
        `,
        type: 'summary'
      }
    );
  }

  // Add Module 1 slides
  if (moduleSlug === 'module-1/introduction-growth-marketing') {
    slides.push(
      {
        id: 'intro-vs-traditional',
        title: 'Growth Marketing vs Marketing Traditionnel',
        content: `
          <div class="slide-content">
            <h2>Growth Marketing vs Marketing Traditionnel</h2>
            <div class="comparison">
              <div class="vs-item losing">
                <span class="vs-label">📊</span>
                <div>
                  <h4>Marketing Traditionnel</h4>
                  <ul>
                    <li>Campagnes isolées</li>
                    <li>Métriques vanité</li>
                    <li>Budgets fixes</li>
                  </ul>
                </div>
              </div>
              <div class="vs-item winning">
                <span class="vs-label">🚀</span>
                <div>
                  <h4>Growth Marketing</h4>
                  <ul>
                    <li>Approche systémique</li>
                    <li>Métriques actionnables</li>
                    <li>Expérimentation continue</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        `,
        type: 'content'
      },
      {
        id: 'aaarrr-overview',
        title: 'Aperçu Framework AAARRR',
        content: `
          <div class="slide-content">
            <h2>Le Framework AAARRR</h2>
            <div class="aaarrr-funnel">
              <div class="funnel-stage">
                <div class="stage-icon">👁️</div>
                <h3>Awareness</h3>
                <p>Faire connaître votre produit</p>
              </div>
              <div class="funnel-stage">
                <div class="stage-icon">🎯</div>
                <h3>Acquisition</h3>
                <p>Attirer des visiteurs qualifiés</p>
              </div>
              <div class="funnel-stage">
                <div class="stage-icon">✨</div>
                <h3>Activation</h3>
                <p>Première expérience réussie</p>
              </div>
              <div class="funnel-stage">
                <div class="stage-icon">🔄</div>
                <h3>Retention</h3>
                <p>Garder les utilisateurs actifs</p>
              </div>
              <div class="funnel-stage">
                <div class="stage-icon">💰</div>
                <h3>Revenue</h3>
                <p>Monétiser la valeur créée</p>
              </div>
              <div class="funnel-stage">
                <div class="stage-icon">📣</div>
                <h3>Referral</h3>
                <p>Transformer en ambassadeurs</p>
              </div>
            </div>
          </div>
        `,
        type: 'content'
      }
    );
  }

  // Add Module 2 slides
  if (moduleSlug === 'module-2/framework-aaarrr') {
    slides.push(
      {
        id: 'aaarrr-detailed',
        title: 'AAARRR — Métriques Détaillées',
        content: `
          <div class="slide-content">
            <h2>Métriques AAARRR Détaillées</h2>
            <div class="metrics-grid">
              <div class="metric-card awareness">
                <h3>👁️ Awareness</h3>
                <div class="metric-items">
                  <div>Brand searches</div>
                  <div>Share of voice</div>
                  <div>Social mentions</div>
                </div>
              </div>
              <div class="metric-card acquisition">
                <h3>🎯 Acquisition</h3>
                <div class="metric-items">
                  <div>CAC par canal</div>
                  <div>Taux de conversion</div>
                  <div>Volume par source</div>
                </div>
              </div>
              <div class="metric-card activation">
                <h3>✨ Activation</h3>
                <div class="metric-items">
                  <div>Time to value</div>
                  <div>Onboarding completion</div>
                  <div>First success rate</div>
                </div>
              </div>
            </div>
          </div>
        `,
        type: 'content'
      }
    );
  }

  // Add Module 4 slides
  if (moduleSlug === 'module-4/kpis-dashboard') {
    slides.push(
      {
        id: 'kpi-taxonomy',
        title: 'Taxonomie des Métriques',
        content: `
          <div class="slide-content">
            <h2>Taxonomie des Métriques</h2>
            <div class="taxonomy-pyramid">
              <div class="taxonomy-level nsm">
                <h3>🌟 North Star Metric</h3>
                <p>Mesure unique de croissance durable</p>
              </div>
              <div class="taxonomy-level inputs">
                <h3>⚡ Input Metrics</h3>
                <p>Métriques actionnables (nouveau users, activation rate)</p>
              </div>
              <div class="taxonomy-level leading">
                <h3>🔮 Leading Indicators</h3>
                <p>Signaux précoces de performance</p>
              </div>
              <div class="taxonomy-level lagging">
                <h3>📊 Lagging Indicators</h3>
                <p>Résultats mesurés a posteriori</p>
              </div>
            </div>
          </div>
        `,
        type: 'content'
      }
    );
  }

  return {
    title: module.title,
    moduleSlug,
    slides
  };
}

/**
 * Get all available modules that support slides mode
 */
export function getModulesWithSlides(): string[] {
  const modules = getAllModules();
  return modules.map(module => module.slug);
}
