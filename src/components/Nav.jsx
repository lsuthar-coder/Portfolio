import { useState } from "react";
import { useScrollSpy } from '../hooks/ScrollSpyHook';
import { NAV_ITEMS } from '../data/nav';
import { ThemeToggle } from './ThemeToggle';
import { ArrowRight, Menu } from 'lucide-react';
import { GrLinkedin } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import { X } from 'lucide-react';

export const Nav = ({ theme, setTheme }) => {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(NAV_ITEMS.map(i => i.id));
  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (<>
    <nav className="ld-nav">
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '14px 24px' }}>
        <div className="flex items-center justify-between">
          <button onClick={() => go('home')} className="flex items-center gap-3"
            style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div style={{ width: 32, height: 32, border: '1px solid var(--text)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="ld-serif" style={{ fontSize: 18, lineHeight: 1 }}>L</span>
            </div>
            <div className="hidden sm:block" style={{ textAlign: 'left' }}>
              <div className="ld-mono" style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.15em' }}>PORTFOLIO / v1.0</div>
              <div className="ld-mono" style={{ fontSize: 12, color: 'var(--text)', letterSpacing: '0.05em' }}>LEELADHAR.S</div>
            </div>
          </button>

          <div className="hidden md:flex items-center" style={{ gap: 32 }}>
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => go(item.id)}
                className={`ld-nav-item ld-mono ${active === item.id ? 'active' : ''}`}
                style={{ background: 'transparent', border: 'none', position: 'relative', color: active === item.id ? 'var(--accent)' : 'var(--text-soft)', fontSize: 13, letterSpacing: '0.06em', padding: 0, cursor: 'pointer' }}>
                <span style={{ color: 'var(--muted)', marginRight: 6 }}>{item.num}</span>{item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">

            <a
              href="https://github.com/lsuthar-coder"
              target="_blank"
              rel="noreferrer"
              className="ld-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 18
              }}
            >
              <ImGithub />
            </a>

            <a
              href="https://linkedin.com/in/leeladhar-suthar"
              target="_blank"
              rel="noreferrer"
              className="ld-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 18
              }}
            >
              <GrLinkedin />
            </a>

            <ThemeToggle theme={theme} setTheme={setTheme} />

            <button
              onClick={() => go('contact')}
              className="ld-btn ld-btn-primary"
              style={{ padding: '8px 16px', fontSize: 12 }}
            >
              Let's talk <ArrowRight size={14} />
            </button>

          </div>

          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <button onClick={() => setOpen(!open)} style={{ background: 'transparent', border: 'none', color: 'var(--text)', cursor: 'pointer' }}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div className={`ld-mobile-menu ${open ? 'open' : ''}`}>
      <div className="flex flex-col items-center gap-7" style={{ marginTop: -40 }}>
        {NAV_ITEMS.map((item) => (
          <button key={item.id} onClick={() => go(item.id)}
            style={{ background: 'transparent', border: 'none', color: 'var(--text)', cursor: 'pointer' }}
            className="ld-serif">
            <span className="ld-mono" style={{ color: 'var(--muted)', fontSize: 13, marginRight: 12 }}>{item.num}</span>
            <span style={{ fontSize: 36 }}>{item.label}</span>
          </button>
        ))}
        <div className="flex gap-5" style={{ marginTop: 24 }}>
          <a href="https://github.com/lsuthar-coder" target="_blank" rel="noreferrer" className="ld-link"><ImGithub /></a>
          <a href="https://linkedin.com/in/leeladhar-suthar" target="_blank" rel="noreferrer" className="ld-link"><GrLinkedin /></a>
        </div>
      </div>
    </div>
  </>);
};
