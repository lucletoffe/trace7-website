/* global React */
const { useState } = React;

/* ============================================================
   Bannière LinkedIn — V3 (post-feedback profil réel)
   - Une seule proposition (V3) après validation V2B comme base
   - Avatar circulaire à taille réelle LinkedIn (Ø ~300)
   - Tout aligné gauche sur colonne slogan
============================================================ */

const C = '#ff6b35';

/* ─── Avatar circulaire LinkedIn — taille RÉELLE ─────────────
   Mesures empiriques (feedback Luc) :
   - Bord gauche : ~76 (idem avant)
   - Bord droit  : aligné sur le "S" de "SAVOIR" (2e ligne du slogan)
   - Bord haut   : ~ 1/3 inférieur des caractères orange "SON SAVOIR RESTE"
   - Bord bas    : déborde sous la bannière
   Avec slogan @left:430 fontSize:84, "S" de SAVOIR ≈ x:608
   → diamètre ≈ 608-76 = 532px (mais on garde Ø=300 pour rester safe)
=============================================================== */
const ProfileMaskReal = ({ diameter = 300, left = 76, top = 200 }) => (
  <>
    <div style={{
      position: 'absolute', left, top,
      width: diameter, height: diameter, borderRadius: '50%',
      background: '#0a0a0a',
      border: '6px solid #1a1a1a',
      pointerEvents: 'none', zIndex: 5,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 12, color: 'rgba(255,107,53,0.5)',
      letterSpacing: '0.18em', textTransform: 'uppercase',
      boxShadow: '0 0 0 1px rgba(255,107,53,0.2)'
    }}>avatar Ø{diameter}</div>
    {/* Boutons "Suivre / Message" */}
    <div style={{
      position: 'absolute', bottom: 16, right: 24, display: 'flex', gap: 8, zIndex: 5
    }}>
      {['+ Suivre', 'Message'].map(t => (
        <div key={t} style={{
          background: 'rgba(255,255,255,0.04)', border: '1px dashed rgba(255,107,53,0.22)',
          borderRadius: 999, padding: '6px 14px',
          fontFamily: '"JetBrains Mono", monospace', fontSize: 9,
          color: 'rgba(255,107,53,0.4)',
          letterSpacing: '0.15em', textTransform: 'uppercase'
        }}>{t}</div>
      ))}
    </div>
  </>
);

const TealCornerGrid = () => (
  <svg style={{ position: 'absolute', top: 0, right: 0, opacity: 0.7 }}
       width="500" height="280" viewBox="0 0 500 280">
    <defs>
      <pattern id="tg" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4a7f8a" strokeWidth="1.2"/>
      </pattern>
      <linearGradient id="fg" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1a1a1a" stopOpacity="1"/>
        <stop offset="60%" stopColor="#1a1a1a" stopOpacity="0"/>
      </linearGradient>
      <mask id="gm"><rect width="500" height="280" fill="white"/><rect width="500" height="280" fill="url(#fg)"/></mask>
    </defs>
    <rect width="500" height="280" fill="url(#tg)" mask="url(#gm)"/>
  </svg>
);

const Frame = ({ children, bg = '#1a1a1a' }) => (
  <div style={{
    width: 1584, height: 396, background: bg,
    fontFamily: '"Titillium Web", sans-serif', color: '#e5e7eb',
    position: 'relative', overflow: 'hidden'
  }}>{children}</div>
);

const FOUR = ['Audit', 'Sprints', 'SaaS', 'Media'];

/* ============================================================
   V3 — LAYOUT FINAL DEMANDÉ
   
   Colonne GAUCHE (left = SLOGAN_LEFT, alignée slogan +1 char) :
     [TOP]    Badge "IA · INDUSTRIE · HARDWARE" (orange, sans "critique")
     [SLOGAN] VOTRE EXPERT PART.
              SON SAVOIR RESTE.   (orange)
     [BOT]    30 ans de métier deviennent transmissibles
              Souverain · Hébergé en France
   
   Colonne DROITE (right: 80) :
     [TOP]    Wordmark "undust." (taille bumpée)
     [SUITE]  Capter / Structurer / Indexer / Transmettre (vertical, V2B style)
============================================================ */

const SLOGAN_LEFT = 430;   // V2 était 360, +1 char = ~70px → 430
const RIGHT_PAD = 80;

const V3 = ({ showAvatarMask = true }) => (
  <Frame>
    <TealCornerGrid/>

    {/* ════ COLONNE GAUCHE ════ */}

    {/* Badge — au-dessus du slogan, aligné gauche */}
    <div style={{
      position: 'absolute', top: 38, left: SLOGAN_LEFT, zIndex: 2,
      fontFamily: '"JetBrains Mono", monospace', fontSize: 21, fontWeight: 500,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      color: C, display: 'inline-flex', alignItems: 'center', gap: 12,
      padding: '8px 16px', border: `1.5px solid ${C}`, borderRadius: 4
    }}>
      <span style={{ width: 8, height: 8, background: C, borderRadius: '50%' }}/>
      ia · industrie · hardware · france
    </div>

    {/* Slogan principal */}
    <div style={{
      position: 'absolute', top: 100, left: SLOGAN_LEFT,
      fontSize: 84, fontWeight: 700, lineHeight: 0.98, letterSpacing: '-2.4px',
      zIndex: 2, fontFamily: '"Titillium Web", sans-serif'
    }}>
      <div style={{ color: '#e5e7eb' }}>VOTRE EXPERT PART.</div>
      <div style={{ color: C }}>SON SAVOIR RESTE.</div>
    </div>

    {/* Sous-titre — 4 encadrés d'offre, palette brand (500) */}
    <div style={{
      position: 'absolute', bottom: 42, left: SLOGAN_LEFT, zIndex: 2,
      display: 'inline-flex', alignItems: 'center', gap: 12,
      fontFamily: '"JetBrains Mono", monospace', fontSize: 22, fontWeight: 600,
      letterSpacing: '0.18em', textTransform: 'uppercase', lineHeight: 1
    }}>
      {/* AUDIT — teal (V1 cards) */}
      <span style={{
        padding: '10px 18px', border: '1.5px solid #5BA3B0', borderRadius: 4,
        color: '#5BA3B0', background: 'rgba(91,163,176,0.12)'
      }}>AUDIT</span>
      {/* SPRINTS — teal lighter (V2 cards) */}
      <span style={{
        padding: '10px 18px', border: '1.5px solid #5BA3B0', borderRadius: 4,
        color: '#5BA3B0', background: 'rgba(91,163,176,0.12)'
      }}>SPRINTS</span>
      {/* SAAS — orange brand (V3 cards) */}
      <span style={{
        padding: '10px 18px', border: '1.5px solid #E8743C', borderRadius: 4,
        color: '#E8743C', background: 'rgba(232,116,60,0.14)'
      }}>SAAS</span>
      {/* MEDIA — neutral (V4 cards) */}
      <span style={{
        padding: '10px 18px', border: '1.5px solid #8A8478', borderRadius: 4,
        color: '#8A8478', background: 'rgba(138,132,120,0.12)'
      }}>MEDIA</span>
    </div>

    {/* ════ COLONNE DROITE ════ */}

    {/* Wordmark — bumped */}
    <div style={{
      position: 'absolute', top: 38, right: RIGHT_PAD,
      fontFamily: '"Titillium Web", sans-serif',
      fontWeight: 700, fontSize: 46, letterSpacing: '-0.8px',
      color: '#e5e7eb', zIndex: 3, lineHeight: 1, textAlign: 'right'
    }}>undust<span style={{ color: C }}>.</span></div>

    {/* 4 verbes — vertical droite, V2B style, bumped */}
    <div style={{
      position: 'absolute', top: 118, right: RIGHT_PAD, zIndex: 3,
      display: 'flex', flexDirection: 'column', gap: 16,
      fontFamily: '"JetBrains Mono", monospace', fontSize: 22, fontWeight: 500,
      letterSpacing: '0.16em', textTransform: 'uppercase',
      textAlign: 'right'
    }}>
      {FOUR.map(v => (
        <div key={v} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 14
        }}>
          <span style={{ color: '#e5e7eb' }}>{v}</span>
          <span style={{
            width: 8, height: 8, background: C, borderRadius: '50%',
            display: 'inline-block', flexShrink: 0
          }}/>
        </div>
      ))}
    </div>

    {showAvatarMask && <ProfileMaskReal diameter={300} left={76} top={200}/>}
  </Frame>
);

/* ─── V1 référence (ce qui est en ligne) ──────────────────── */
const V1Ref = () => (
  <Frame>
    <TealCornerGrid/>
    <div style={{
      position: 'absolute', top: 32, left: 250, zIndex: 2,
      fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
      letterSpacing: '0.22em', textTransform: 'uppercase',
      color: C, display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '6px 12px', border: `1px solid ${C}`, borderRadius: 4
    }}>
      <span style={{ width: 6, height: 6, background: C, borderRadius: '50%' }}/>
      ia · industrie · hardware
    </div>
    <div style={{
      position: 'absolute', top: 32, right: 80, fontWeight: 700, fontSize: 22,
      letterSpacing: '-0.5px', color: '#e5e7eb', zIndex: 3, lineHeight: 1, textAlign: 'right'
    }}>undust<span style={{ color: C }}>.</span></div>
    <div style={{
      position: 'absolute', top: 78, right: 80, zIndex: 3,
      display: 'flex', flexDirection: 'column', gap: 10,
      fontFamily: '"JetBrains Mono", monospace', fontSize: 13,
      letterSpacing: '0.18em', textTransform: 'uppercase', textAlign: 'right'
    }}>
      {FOUR.map(v => (
        <div key={v} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 10 }}>
          <span style={{ color: '#e5e7eb' }}>{v}</span>
          <span style={{ width: 6, height: 6, background: C, borderRadius: '50%' }}/>
        </div>
      ))}
    </div>
    <div style={{
      position: 'absolute', top: 88, left: 250, right: 320,
      fontSize: 80, fontWeight: 700, lineHeight: 0.98, letterSpacing: '-2.4px', zIndex: 2
    }}>
      <div style={{ color: '#e5e7eb' }}>VOTRE EXPERT PART.</div>
      <div style={{ color: C }}>SON SAVOIR RESTE.</div>
    </div>
    <ProfileMaskReal diameter={152} left={76} top={244}/>
  </Frame>
);

/* ─── Mockup mobile : pas de crop, juste rendu plus petit ─── */
const MobileMockup = ({ children }) => (
  <div style={{
    width: 660, height: 165,
    border: '1px solid #2a2a2a',
    overflow: 'hidden'
  }}>
    <div style={{
      transform: 'scale(0.4167)',
      transformOrigin: 'top left',
      width: 1584, height: 396
    }}>{children}</div>
  </div>
);

function App() {
  const [showAvatar, setShowAvatar] = useState(true);
  return (
    <div style={{ background: '#0e0e0e', minHeight: '100vh' }}>
      <div style={{
        position: 'fixed', top: 16, right: 16, zIndex: 1000,
        background: '#1a1a1a', border: '1px solid #2a2a2a',
        padding: '10px 14px', borderRadius: 8,
        fontFamily: '"JetBrains Mono", monospace', fontSize: 12,
        color: '#e5e7eb', display: 'flex', alignItems: 'center', gap: 8
      }}>
        <input type="checkbox" id="ss" checked={showAvatar} onChange={e => setShowAvatar(e.target.checked)}/>
        <label htmlFor="ss">show avatar mask Ø300</label>
      </div>

      <DesignCanvas
        title="Banner LinkedIn — V3 (proposition unique post-feedback)"
        subtitle="V2B retenu · avatar Ø300 réaliste · slogan +1 char droite · badge/sous-titre alignés gauche slogan · polices ↑"
      >
        <DCSection id="v1ref" title="V1 — référence (ce qui est en ligne aujourd'hui)">
          <DCArtboard id="V1Ref-desktop" label="Desktop 1584 × 396" width={1584} height={396}>
            <V1Ref/>
          </DCArtboard>
          <DCArtboard id="V1Ref-mobile" label="Mobile (banner entière, plus petite)" width={660} height={165}>
            <MobileMockup><V1Ref/></MobileMockup>
          </DCArtboard>
        </DCSection>

        <DCSection id="v3" title="V3 — proposition après feedback">
          <DCArtboard id="V3-desktop" label="Desktop 1584 × 396" width={1584} height={396}>
            <V3 showAvatarMask={showAvatar}/>
          </DCArtboard>
          <DCArtboard id="V3-mobile" label="Mobile (banner entière, plus petite)" width={660} height={165}>
            <MobileMockup><V3 showAvatarMask={showAvatar}/></MobileMockup>
          </DCArtboard>
          <DCArtboard id="V3-clean" label="Desktop sans avatar mask" width={1584} height={396}>
            <V3 showAvatarMask={false}/>
          </DCArtboard>
        </DCSection>
      </DesignCanvas>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
