export const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--line)', padding: '32px 0' }}>
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
      <div className="flex flex-wrap items-center justify-between" style={{ gap: 16 }}>
        <div className="ld-mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em' }}>
          © {new Date().getFullYear()} LEELADHAR SUTHAR · BUILT WITH REACT + COFFEE
        </div>
        <div className="ld-mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.1em' }}>
          v1.0 · LAST UPDATED {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase()}
        </div>
      </div>
    </div>
  </footer>
);