import {useReveal} from "../hooks/RevealHook"
export const About = () => {
  const [ref, vis] = useReveal();
  return (
    <section id="about" ref={ref} className={`ld-reveal ${vis ? 'in' : ''}`} style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3"><div className="ld-section-num">[ 01 / ABOUT ]</div></div>
          <div className="md:col-span-9">
            <h2 className="ld-serif" style={{ fontSize: 'clamp(34px, 5vw, 60px)', lineHeight: 1.05, margin: 0, marginBottom: 36, letterSpacing: '-0.02em' }}>
              An engineer who treats <i style={{ color: 'var(--accent)' }}>infrastructure</i> as a product —<br />
              with documentation, design, and care.
            </h2>

            <div className="grid md:grid-cols-2 gap-10" style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-soft)' }}>
              <div>
                <p style={{ marginTop: 0 }}>
                  I'm an Associate DevOps Engineer based in Bengaluru. At <span className="ld-accent">GoTo Technologies</span> I work on the Backstage developer portal — building plugins, fixing the unglamorous parts, and trying to make the team's day a little better.
                </p>
                <p>
                  On the side, I run a multi-cloud platform spanning OCI, AWS, and Azure on always-free tier. K3s clusters, Terraform-managed everything, services I've broken and rebuilt enough times to know them by heart.
                </p>
              </div>
              <div>
                <p style={{ marginTop: 0 }}>
                  I move between DevOps, backend, and frontend depending on what the work needs. I like the parts where systems meet — APIs, deployments, observability, the seams where things tend to fail in interesting ways.
                </p>
                <p>
                  Outside the screen: reading, learning Java properly, and slowly building a portfolio of things I'd want to maintain myself in five years.
                </p>
              </div>
            </div>

            <div style={{ marginTop: 44, paddingTop: 28, borderTop: '1px solid var(--line)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24 }}>
              {[
                ['Based', 'Bengaluru, IN'],
                ['Stack', 'TS · React · K8s'],
                ['Reading', 'Designing Data-Intensive Apps'],
                ['Email', 'leeladharsuthar80@gmail.com'],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="ld-mono" style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.15em', marginBottom: 6 }}>{k}</div>
                  <div className="ld-serif" style={{ fontSize: 16, fontStyle: 'italic', wordBreak: 'break-word' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};