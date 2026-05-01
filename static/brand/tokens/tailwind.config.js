/* tailwind.config.js — undust preset v1.0
   Tailwind v4 — extend du theme avec tokens undust.
   Usage : import this preset in projects' tailwind.config.js
*/

module.exports = {
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-elev': 'var(--bg-elev)',
        text: 'var(--text)',
        'text-muted': 'var(--text-muted)',
        border: 'var(--border)',
        'border-dim': 'var(--border-dim)',
        accent: {
          50:  '#fff4ef', 100: '#ffe4d6', 200: '#ffc7ad', 300: '#ffa37e',
          400: '#ff8857', 500: '#ff6b35', 600: '#e85a26', 700: '#c4491b',
          800: '#963617', 900: '#6e2812',
          DEFAULT: '#ff6b35',
        },
        teal: {
          300: '#86afb8', 400: '#62929d', 500: '#4a7f8a', 600: '#3d6a73', 700: '#33575e',
          DEFAULT: '#4a7f8a',
        },
        green: { 500: '#4ade80', DEFAULT: '#4ade80' },
        critical: {
          300: '#d68a8a', 500: '#b84848', 700: '#7d2c2c',
          DEFAULT: '#b84848',
        },
      },
      fontFamily: {
        display: ['"Titillium Web"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'Consolas', 'monospace'],
      },
      fontSize: {
        display:  ['3.5rem',  { lineHeight: '1.1',  letterSpacing: '-0.02em',  fontWeight: 700 }],
        h1:       ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: 700 }],
        h2:       ['1.75rem', { lineHeight: '1.2',  letterSpacing: '-0.01em',  fontWeight: 600 }],
        h3:       ['1.375rem',{ lineHeight: '1.25', letterSpacing: '-0.005em', fontWeight: 600 }],
        h4:       ['1.125rem',{ lineHeight: '1.3',  fontWeight: 600 }],
        'body-lg':['1.125rem',{ lineHeight: '1.55' }],
        body:     ['1rem',    { lineHeight: '1.55' }],
        'body-sm':['0.875rem',{ lineHeight: '1.5' }],
        caption:  ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        eyebrow:  ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.22em', fontWeight: 500 }],
      },
      spacing: {
        '0': '0', '1': '4px', '2': '8px', '3': '12px', '4': '16px',
        '5': '20px', '6': '24px', '8': '32px', '10': '40px',
        '12': '48px', '16': '64px', '20': '80px', '24': '96px', '32': '128px',
      },
      borderRadius: {
        none: '0', sm: '4px', md: '8px', lg: '12px', xl: '16px', full: '9999px',
      },
      borderWidth: { '1': '1px', '2': '2px', '4': '4px' },
      boxShadow: {
        none: 'none',
        sm: '0 1px 2px rgba(0,0,0,0.18)',
        md: '0 4px 12px rgba(0,0,0,0.25)',
        lg: '0 12px 32px rgba(0,0,0,0.32)',
        'glow-accent': '0 0 24px rgba(255,107,53,0.18)',
        'glow-teal':   '0 0 24px rgba(74,127,138,0.18)',
      },
      zIndex: {
        base: '0', dropdown: '100', sticky: '200', fixed: '300',
        'modal-bg': '400', modal: '500', popover: '600', tooltip: '700',
      },
      transitionTimingFunction: {
        undust: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        fast: '150ms', base: '250ms', slow: '400ms',
      },
    },
  },
};
