/* global React, ReactDOM */
const { useState } = React;

const C = '#ff6b35';
const FOUR = ['Capter', 'Structurer', 'Indexer', 'Transmettre'];
const SLOGAN_LEFT = 430;
const RIGHT_PAD = 80;

const ProfileMaskReal = ({ diameter = 300, left = 76, top = 200 }) => (
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

const V3 = ({ showAvatarMask = false }) => (
  <Frame>
    <TealCornerGrid/>

    {/* Badge */}
    <div style={{
      position: 'absolute', top: 38, left: SLOGAN_LEFT, zIndex: 2,
      fontFamily: '"JetBrains Mono", monospace', fontSize: 21, fontWeight: 500,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      color: C, display: 'inline-flex', alignItems: 'center', gap: 12,
      padding: '8px 16px', border: `1.5px solid ${C}`, borderRadius: 4
    }}>
      <span style={{ width: 8, height: 8, background: C, borderRadius: '50%' }}/>
      ia · industrie · hardware · france
    </div>

    {/* Slogan */}
    <div style={{
      position: 'absolute', top: 100, left: SLOGAN_LEFT,
      fontSize: 84, fontWeight: 700, lineHeight: 0.98, letterSpacing: '-2.4px',
      zIndex: 2, fontFamily: '"Titillium Web", sans-serif'
    }}>
      <div style={{ color: '#e5e7eb' }}>VOTRE EXPERT PART.</div>
      <div style={{ color: C }}>SON SAVOIR RESTE.</div>
    </div>

    {/* 4 pôles */}
    <div style={{
      position: 'absolute', bottom: 42, left: SLOGAN_LEFT, zIndex: 2,
      display: 'inline-flex', alignItems: 'center', gap: 12,
      fontFamily: '"JetBrains Mono", monospace', fontSize: 22, fontWeight: 600,
      letterSpacing: '0.18em', textTransform: 'uppercase', lineHeight: 1
    }}>
      <span style={{ padding: '10px 18px', border: '1.5px solid #5BA3B0', borderRadius: 4, color: '#5BA3B0', background: 'rgba(91,163,176,0.12)' }}>AUDIT</span>
      <span style={{ padding: '10px 18px', border: '1.5px solid #5BA3B0', borderRadius: 4, color: '#5BA3B0', background: 'rgba(91,163,176,0.12)' }}>SPRINTS</span>
      <span style={{ padding: '10px 18px', border: '1.5px solid #E8743C', borderRadius: 4, color: '#E8743C', background: 'rgba(232,116,60,0.14)' }}>SAAS</span>
      <span style={{ padding: '10px 18px', border: '1.5px solid #8A8478', borderRadius: 4, color: '#8A8478', background: 'rgba(138,132,120,0.12)' }}>MEDIA</span>
    </div>

    {/* Wordmark */}
    <div style={{
      position: 'absolute', top: 38, right: RIGHT_PAD,
      fontFamily: '"Titillium Web", sans-serif',
      fontWeight: 700, fontSize: 46, letterSpacing: '-0.8px',
      color: '#e5e7eb', zIndex: 3, lineHeight: 1, textAlign: 'right'
    }}>undust<span style={{ color: C }}>.</span></div>

    {/* 4 verbes */}
    <div style={{
      position: 'absolute', top: 118, right: RIGHT_PAD, zIndex: 3,
      display: 'flex', flexDirection: 'column', gap: 16,
      fontFamily: '"JetBrains Mono", monospace', fontSize: 22, fontWeight: 500,
      letterSpacing: '0.16em', textTransform: 'uppercase',
      textAlign: 'right'
    }}>
      {FOUR.map(v => (
        <div key={v} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 14 }}>
          <span style={{ color: '#e5e7eb' }}>{v}</span>
          <span style={{ width: 8, height: 8, background: C, borderRadius: '50%', display: 'inline-block', flexShrink: 0 }}/>
        </div>
      ))}
    </div>

    {showAvatarMask && <ProfileMaskReal diameter={300} left={76} top={200}/>}
  </Frame>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<V3 showAvatarMask={false}/>);
