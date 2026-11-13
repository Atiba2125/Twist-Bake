import React, { useMemo } from 'react';
import { prefersReducedMotion } from '../hooks/useMotion.js';

const COLORS = ['#d5a24d', '#f0c878', '#b07a34', '#f5e8cc', '#c98a45'];

/** Warm sparks rising slowly, like embers under a chimney cake. */
export function Embers() {
  const bits = useMemo(() => {
    if (prefersReducedMotion()) return [];
    const n = window.innerWidth < 700 ? 10 : 22;
    return Array.from({ length: n }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        '--s': `${3 + Math.random() * 5}px`,
        '--d': `${14 + Math.random() * 16}s`,
        '--delay': `${-Math.random() * 26}s`,
        '--x': `${Math.random() * 120 - 60}px`,
        '--c': COLORS[Math.floor(Math.random() * COLORS.length)],
      },
    }));
  }, []);
  return (
    <div className="embers" aria-hidden="true">
      {bits.map((b) => <i key={b.id} style={b.style} />)}
    </div>
  );
}

/** Steam curls rising above the logo or an icon. */
export function Steam({ className = '' }) {
  return (
    <svg className={`steam ${className}`} viewBox="0 0 120 60" aria-hidden="true">
      <path d="M30 56 C20 44 40 36 30 22 C26 14 34 8 32 2" />
      <path d="M60 56 C50 42 70 34 60 20 C56 12 64 6 62 0" />
      <path d="M90 56 C80 44 100 36 90 22 C86 14 94 8 92 2" />
    </svg>
  );
}

/** Simple chimney-cake line icon, used where a product has no photo. */
export function ChimneyIcon({ className = '' }) {
  return (
    <svg className={`chimney ${className}`} viewBox="0 0 80 110" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <ellipse cx="40" cy="26" rx="22" ry="8" />
        <path d="M18 26 V88 C18 98 62 98 62 88 V26" />
        <path d="M18 46 C34 58 46 38 62 50" />
        <path d="M18 66 C34 78 46 58 62 70" />
        <path d="M18 86 C34 96 46 78 62 88" />
        <path className="chimney__steam" d="M32 14 C28 8 36 6 32 0 M48 14 C44 8 52 6 48 0" />
      </g>
    </svg>
  );
}

/** Circular rotating text badge. */
export function SpinBadge({ text = 'FRESH • WARM • GOLDEN • TWISTED • ', children }) {
  return (
    <div className="spin">
      <svg viewBox="0 0 200 200" className="spin__ring" aria-hidden="true">
        <defs><path id="circ" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
        <text><textPath href="#circ" startOffset="0">{text}</textPath></text>
      </svg>
      <div className="spin__core">{children}</div>
    </div>
  );
}
