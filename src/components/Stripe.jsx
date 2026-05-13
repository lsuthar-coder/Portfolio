import React from 'react';
import { Sparkle } from 'lucide-react';

export const Stripe = () => (
  <div className="ld-stripe">
    <div className="ld-marquee">
      {Array(2).fill(0).map((_, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 40, paddingRight: 40 }}>
          {['BUILDING IN BENGALURU', 'AVAILABLE FOR HIRE', 'OPEN TO REMOTE', 'MULTI-CLOUD · DEVOPS · FULL-STACK', 'CURRENTLY @ GOTO', "LET'S BUILD SOMETHING"].map((t) => (
            <React.Fragment key={t + i}>
              <span className="ld-serif" style={{ fontSize: 32, fontStyle: 'italic', lineHeight: 1, whiteSpace: 'nowrap' }}>{t}</span>
              <Sparkle size={20} />
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  </div>
);