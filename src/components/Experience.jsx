import { useReveal } from "../hooks/RevealHook";
import { EXPERIENCE } from "../data/experience";
import {EDUCATION} from "../data/education";
export const Experience = () => {
  const [ref, vis] = useReveal();
  return (
    <section id="experience" ref={ref} className={`ld-reveal ${vis ? 'in' : ''}`} style={{ padding: '100px 0', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
        <div className="grid md:grid-cols-12 gap-8" style={{ marginBottom: 48 }}>
          <div className="md:col-span-3"><div className="ld-section-num">[ 04 / PATH ]</div></div>
          <div className="md:col-span-9">
            <h2 className="ld-serif" style={{ fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.05, margin: 0, letterSpacing: '-0.02em' }}>
              The <i style={{ color: 'var(--accent)' }}>route</i> so far.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <div className="ld-mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.15em', marginBottom: 12 }}>WORK</div>
          </div>
          <div className="md:col-span-9">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} style={{ position: 'relative', paddingLeft: 28, paddingBottom: 40, borderLeft: '1px solid var(--line)' }}>
                <div style={{ position: 'absolute', left: -5, top: 4, width: 9, height: 9, borderRadius: '50%', background: 'var(--accent)' }} />
                <div className="flex items-baseline justify-between flex-wrap" style={{ gap: 12 }}>
                  <div>
                    <div className="flex items-center flex-wrap" style={{ gap: 12 }}>
                      <h3 className="ld-serif" style={{ fontSize: 26, margin: 0, lineHeight: 1.2 }}>{exp.role}</h3>
                      <span className="ld-mono" style={{ fontSize: 10, padding: '3px 8px', border: '1px solid var(--line-strong)', borderRadius: 999, color: 'var(--muted)', letterSpacing: '0.08em' }}>{exp.badge}</span>
                    </div>
                    <div className="ld-mono" style={{ fontSize: 12, color: 'var(--accent)', marginTop: 4, letterSpacing: '0.06em' }}>
                      @ {exp.org} — {exp.location}
                    </div>
                  </div>
                  <div className="ld-mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.12em' }}>{exp.date}</div>
                </div>
                <ul style={{ marginTop: 18, paddingLeft: 18, color: 'var(--text-soft)', fontSize: 14.5, lineHeight: 1.7 }}>
                  {exp.points.map((pt, j) => <li key={j} style={{ marginBottom: 4 }}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8" style={{ marginTop: 32 }}>
          <div className="md:col-span-3">
            <div className="ld-mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.15em', marginBottom: 12 }}>EDUCATION</div>
          </div>
          <div className="md:col-span-9">
            <div style={{ position: 'relative', paddingLeft: 28, borderLeft: '1px solid var(--line)' }}>
              <div style={{ position: 'absolute', left: -5, top: 4, width: 9, height: 9, borderRadius: '50%', background: 'var(--text)' }} />
              <div className="flex items-baseline justify-between flex-wrap" style={{ gap: 12 }}>
                <div>
                  <h3 className="ld-serif" style={{ fontSize: 22, margin: 0, lineHeight: 1.2 }}>{EDUCATION.degree}</h3>
                  <div className="ld-mono" style={{ fontSize: 12, color: 'var(--text-soft)', marginTop: 4 }}>{EDUCATION.org}</div>
                </div>
                <div className="ld-mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.12em' }}>{EDUCATION.date}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};