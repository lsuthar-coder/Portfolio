import { Typewriter } from "./Typewriter";
import { ArrowRight, ChevronDown } from "lucide-react";

export const Hero = () => (
  <section id="home" style={{ position: 'relative', minHeight: '100vh', paddingTop: 120, paddingBottom: 80 }}>
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <div className="ld-mesh-1" style={{ position: 'absolute', top: '20%', left: '60%', width: 600, height: 600, background: 'radial-gradient(circle, var(--accent-dim) 0%, transparent 60%)', filter: 'blur(40px)' }} />
      <div className="ld-mesh-2" style={{ position: 'absolute', top: '40%', left: '10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(128,122,109,0.08) 0%, transparent 60%)', filter: 'blur(60px)' }} />
    </div>

    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
      <div className="ld-mono ld-rise ld-rise-1" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.2em', marginBottom: 22 }}>
        [ 00 / INDEX ] — BENGALURU, IN · AVAILABLE FOR HIRE
      </div>

      <div className="flex items-baseline gap-3 ld-rise ld-rise-2" style={{ marginBottom: 6, flexWrap: 'wrap' }}>
        <span className="ld-mono ld-muted" style={{ fontSize: 13 }}>$ whoami —</span>
        <span className="ld-mono" style={{ fontSize: 14, color: 'var(--text-soft)' }}><Typewriter /></span>
      </div>

      <h1 className="ld-hero-name ld-rise ld-rise-3">
        Leeladhar<br /><i>Suthar.</i>
      </h1>

      <div className="grid md:grid-cols-12 gap-6" style={{ marginTop: 56 }}>
        <div className="md:col-span-7 ld-rise ld-rise-4">
          <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--text-soft)', maxWidth: 580, fontFamily: 'var(--serif)', fontStyle: 'italic' }}>
            I build the boring infrastructure that makes the exciting things possible — multi-cloud platforms, developer portals, and the pipelines that quietly hold them together.
          </p>
          <div className="flex flex-wrap gap-3" style={{ marginTop: 30 }}>
            <button onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })} className="ld-btn ld-btn-primary">
              See the work <ArrowRight size={16} />
            </button>
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="ld-btn ld-btn-ghost">
              Get in touch
            </button>
          </div>
        </div>

        <div className="md:col-span-5 md:col-start-8 ld-rise ld-rise-5" style={{ borderLeft: '1px solid var(--line)', paddingLeft: 22 }}>
          <div className="ld-mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.15em', marginBottom: 18 }}>// CURRENT STATE</div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <div className="ld-mono" style={{ fontSize: 10, color: 'var(--muted)', marginBottom: 5 }}>LAST ROLE</div>
              <div style={{ fontSize: 14, color: 'var(--text)' }}>Associate DevOps Engineer</div>
              <div className="ld-mono" style={{ fontSize: 11, color: 'var(--accent)', marginTop: 2 }}>@ GoTo Technologies</div>
            </div>
            <div>
              <div className="ld-mono" style={{ fontSize: 10, color: 'var(--muted)', marginBottom: 5 }}>EXPERIENCE</div>
              <div style={{ fontSize: 14, color: 'var(--text)' }}>1.5 years</div>
              <div className="ld-mono" style={{ fontSize: 11, color: 'var(--accent)', marginTop: 2 }}>professional + projects</div>
            </div>
            <div>
              <div className="ld-mono" style={{ fontSize: 10, color: 'var(--muted)', marginBottom: 5 }}>FOCUS</div>
              <div style={{ fontSize: 14, color: 'var(--text)' }}>K8s · Terraform · Multi-Cloud</div>
            </div>
            <div>
              <div className="ld-mono" style={{ fontSize: 10, color: 'var(--muted)', marginBottom: 5 }}>STATUS</div>
              <div style={{ fontSize: 14, color: 'var(--text)' }}>Open to opportunities</div>
              <div className="ld-mono" style={{ fontSize: 11, color: 'var(--accent)', marginTop: 2 }}>SDE · DevOps · Full-Stack</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: -50, left: 24, display: 'flex', alignItems: 'center', gap: 10, color: 'var(--muted)' }}>
        <div className="ld-bounce"><ChevronDown size={16} /></div>
        <span className="ld-mono" style={{ fontSize: 11, letterSpacing: '0.15em' }}>SCROLL</span>
      </div>
    </div>
  </section>
);