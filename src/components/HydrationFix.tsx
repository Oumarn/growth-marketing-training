'use client';

import { useEffect } from 'react';

export function HydrationFix() {
  useEffect(() => {
    // Supprimer les attributs Grammarly qui causent des erreurs d'hydratation
    const body = document.body;
    if (body) {
      body.removeAttribute('data-new-gr-c-s-check-loaded');
      body.removeAttribute('data-gr-ext-installed');
      body.removeAttribute('data-new-gr-c-s-loaded');
      body.removeAttribute('data-gr-c-s-loaded');
    }
  }, []);

  return null;
}
