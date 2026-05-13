import {useReveal} from "../hooks/RevealHook";
import {useState} from "react";
import {SKILLS} from "../data/skills"
import {Logo} from "../logos/index.jsx"
export const Skills = () => {
  const [ref, vis] = useReveal();
  return (
    <section id="skills" ref={ref} className={`ld-reveal ${vis ? 'in' : ''}`} style={{ padding: '100px 0 80px', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
        <div className="grid md:grid-cols-12 gap-8" style={{ marginBottom: 48 }}>
          <div className="md:col-span-3"><div className="ld-section-num">[ 02 / STACK ]</div></div>
          <div className="md:col-span-9">
            <h2 className="ld-serif" style={{ fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.05, margin: 0, letterSpacing: '-0.02em' }}>
              The tools I reach for, <i style={{ color: 'var(--accent)' }}>daily.</i>
            </h2>
            <p className="ld-mono" style={{ fontSize: 12, color: 'var(--muted)', marginTop: 14, letterSpacing: '0.08em' }}>
              HOVER ANY CARD ON DESKTOP — TAP ON MOBILE — TO READ HOW I USE IT.
            </p>
          </div>
        </div>

        {Object.entries(SKILLS).map(([category, items], catIdx) => (
          <div key={category} style={{ marginBottom: 56 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 20, paddingBottom: 14, borderBottom: '1px solid var(--line)' }}>
              <span className="ld-mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.15em' }}>
                {String(catIdx + 1).padStart(2, '0')}
              </span>
              <h3 className="ld-serif" style={{ fontSize: 24, margin: 0, fontStyle: 'italic' }}>{category}</h3>
              <span className="ld-mono" style={{ fontSize: 11, color: 'var(--muted)', marginLeft: 'auto' }}>{items.length} items</span>
            </div>
            <div className={`ld-stagger ${vis ? 'in' : ''} grid gap-4`} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))' }}>
              {items.map((s) => <SkillCard key={s.name} {...s} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const SkillCard = ({ name, desc }) => {
  const [open, setOpen] = useState(false);
  const LogoComp = Logo[name];
  return (
    <div
      className={`ld-skill ${open ? 'is-open' : ''}`}
      onClick={() => setOpen(!open)}
      data-cursor="hover"
    >
      <div className="ld-skill-front">
        <div>{LogoComp && <LogoComp />}</div>
        <div>
          <div className="ld-serif" style={{ fontSize: 22, lineHeight: 1.1, marginTop: 18 }}>{name}</div>
          <div className="ld-mono" style={{ fontSize: 10, color: 'var(--muted)', marginTop: 6, letterSpacing: '0.1em' }}>HOVER · TAP →</div>
        </div>
      </div>
      <div className="ld-skill-back">
        <div className="ld-mono" style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: 8 }}>// {name.toUpperCase()}</div>
        <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--text-soft)', margin: 0 }}>{desc}</p>
      </div>
    </div>
  );
};