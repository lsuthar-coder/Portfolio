import { useReveal } from "../hooks/RevealHook";
import { PROJECTS } from "../data/projects";
import { ExternalLink, ArrowUpRight} from "lucide-react";

const ProjectRow = ({ p }) => (
  <a href={p.repo || '#'} target="_blank" rel="noreferrer"
    className="ld-project"
    style={{ color: 'inherit', textDecoration: 'none' }}
    data-cursor="hover">
    <div className="ld-mono" style={{ fontSize: 14, color: 'var(--muted)', letterSpacing: '0.1em' }}>{p.n}</div>
    <div>
      <h3 className="ld-serif ld-project-title" style={{ fontSize: 'clamp(28px, 4vw, 44px)', margin: 0, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
        {p.title}
      </h3>
      <div className="ld-mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.12em', marginTop: 8, textTransform: 'uppercase' }}>{p.role}</div>
      <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--text-soft)', maxWidth: 720, marginTop: 18 }}>{p.desc}</p>
      <div className="flex flex-wrap" style={{ gap: 6, marginTop: 18 }}>
        {p.stack.map((s) => (
          <span key={s} className="ld-mono" style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, border: '1px solid var(--line-strong)', color: 'var(--text-soft)' }}>{s}</span>
        ))}
      </div>
      <div className="flex items-center flex-wrap" style={{ gap: 18, marginTop: 16 }}>
        <span className="ld-mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 5 }}>
          {/* <Github size={12} /> REPO */}
        </span>
        {p.demo && (
          <span className="ld-mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 5 }}>
            <ExternalLink size={12} /> LIVE DEMO
          </span>
        )}
      </div>
    </div>
    <div className="ld-project-arrow-wrap" style={{ color: 'var(--text)' }}>
      <div className="ld-project-arrow"><ArrowUpRight size={32} /></div>
    </div>
  </a>
);

export const Projects = () => {
  const [ref, vis] = useReveal();
  return (
    <section id="work" ref={ref} className={`ld-reveal ${vis ? 'in' : ''}`} style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
        <div className="grid md:grid-cols-12 gap-8" style={{ marginBottom: 32 }}>
          <div className="md:col-span-3"><div className="ld-section-num">[ 03 / WORK ]</div></div>
          <div className="md:col-span-9">
            <h2 className="ld-serif" style={{ fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.05, margin: 0, letterSpacing: '-0.02em' }}>
              Things I've shipped, <i style={{ color: 'var(--accent)' }}>broken,</i><br />and rebuilt.
            </h2>
            <p className="ld-mono" style={{ fontSize: 12, color: 'var(--muted)', marginTop: 14, letterSpacing: '0.08em' }}>
              FOUR PROJECTS · MORE ON GITHUB
            </p>
          </div>
        </div>

        <div>{PROJECTS.map((p) => <ProjectRow key={p.n} p={p} />)}</div>

        <div style={{ marginTop: 36, textAlign: 'center' }}>
          <a href="https://github.com/lsuthar-coder" target="_blank" rel="noreferrer" className="ld-btn ld-btn-ghost">
            {/* <Github size={16} /> */ }See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};