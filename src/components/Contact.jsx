import { useState } from "react";
import { useReveal } from "../hooks/RevealHook";
import { GrLinkedin } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import {
  Check,
  Copy,
  Phone,
  Send,
  Download,
  MapPin
} from "lucide-react";
export const Contact = () => {
  const [ref, vis] = useReveal();
  const [copied, setCopied] = useState(false);
  const email = 'leeladharsuthar80@gmail.com';
  const phone = '+91 80039 45658';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    "A Quick Note After Visiting Your Portfolio"
  )}&body=${encodeURIComponent(
    `Hi Leeladhar,

Your portfolio stood out immediately — especially the balance between engineering depth and visual polish.

Thought I’d reach out and start a conversation.

About me:
[Your intro]

Why I’m reaching out:
[Message]

Looking forward to connecting.

Best,
[Your Name]`
  )}`;
  
  const telLink = `tel:${phone.replace(/\s|\+/g, m => m === '+' ? '+' : '')}`;

  const copyEmail = (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <section id="contact" ref={ref} className={`ld-reveal ${vis ? 'in' : ''}`} style={{ padding: '120px 0 80px', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3"><div className="ld-section-num">[ 05 / CONTACT ]</div></div>
          <div className="md:col-span-9">
            <h2 className="ld-serif" style={{ fontSize: 'clamp(40px, 7vw, 96px)', lineHeight: 0.95, margin: 0, letterSpacing: '-0.03em' }}>
              Let's <i style={{ color: 'var(--accent)' }}>build</i><br />something.
            </h2>

            <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--text-soft)', maxWidth: 560, marginTop: 28, fontFamily: 'var(--serif)', fontStyle: 'italic' }}>
              Hiring, collaborating, or just want to talk infrastructure? I read every message and reply within a day or two.
            </p>

            <div className="grid md:grid-cols-2 gap-6" style={{ marginTop: 48 }}>
              <a href={mailtoLink}
                style={{ display: 'block', textAlign: 'left', padding: '24px', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 4, color: 'inherit', textDecoration: 'none', transition: 'border-color .3s' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--line)'}
                data-cursor="hover">
                <div className="flex items-center justify-between" style={{ marginBottom: 14 }}>
                  <div className="ld-mono" style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.15em' }}>EMAIL</div>
                  <span
                    role="button"
                    onClick={copyEmail}
                    style={{ color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: 999, border: '1px solid var(--line)', transition: 'border-color .25s, background .25s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-soft)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.background = 'transparent'; }}
                    data-cursor="hover"
                    title="Copy email"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </span>
                </div>
                <div className="ld-serif" style={{ fontSize: 22, lineHeight: 1.2, wordBreak: 'break-all' }}>{email}</div>
                <div className="ld-mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 12 }}>{copied ? 'COPIED ✓' : 'TAP TO COMPOSE'}</div>
              </a>

              <a href={telLink}
                style={{ display: 'block', padding: '24px', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 4, textDecoration: 'none', color: 'inherit', transition: 'border-color .3s' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--line)'}
                data-cursor="hover">
                <div className="flex items-center justify-between" style={{ marginBottom: 14 }}>
                  <div className="ld-mono" style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.15em' }}>PHONE</div>
                  <Phone size={16} style={{ color: 'var(--accent)' }} />
                </div>
                <div className="ld-serif" style={{ fontSize: 22, lineHeight: 1.2 }}>{phone}</div>
                <div className="ld-mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 12 }}>TAP TO CALL</div>
              </a>
            </div>

            <div className="flex flex-wrap" style={{ gap: 12, marginTop: 28 }}>
              <a href={mailtoLink} className="ld-btn ld-btn-primary" data-cursor="hover">
                <Send size={16} /> Send a mail
              </a>
              <a href="./Leeladhar_Suthar_Resume.pdf" download className="ld-btn ld-btn-ghost" data-cursor="hover">
                <Download size={16} /> Download resume
              </a>
              <a href="https://linkedin.com/in/leeladhar-suthar" target="_blank" rel="noreferrer" className="ld-btn ld-btn-ghost" data-cursor="hover">
                <GrLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/lsuthar-coder" target="_blank" rel="noreferrer" className="ld-btn ld-btn-ghost" data-cursor="hover">
                <ImGithub /> GitHub
              </a>
            </div>

            <div style={{ marginTop: 48, paddingTop: 28, borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 8, color: 'var(--muted)' }}>
              <MapPin size={14} />
              <span className="ld-mono" style={{ fontSize: 12, letterSpacing: '0.1em' }}>BENGALURU · KARNATAKA · IN — 12.97°N, 77.59°E</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
