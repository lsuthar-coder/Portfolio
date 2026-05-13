import { useState, useEffect } from "react";
import { ROLES } from "../data/constant";

export const Typewriter = () => {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('typing');
  useEffect(() => {
    const word = ROLES[idx];
    let t;
    if (phase === 'typing') {
      if (text.length < word.length) t = setTimeout(() => setText(word.slice(0, text.length + 1)), 65);
      else t = setTimeout(() => setPhase('hold'), 200);
    } else if (phase === 'hold') {
      t = setTimeout(() => setPhase('deleting'), 1600);
    } else {
      if (text.length > 0) t = setTimeout(() => setText(word.slice(0, text.length - 1)), 30);
      else { setIdx((idx + 1) % ROLES.length); setPhase('typing'); }
    }
    return () => clearTimeout(t);
  }, [text, phase, idx]);
  return <span><span className="ld-accent">{text}</span><span className="ld-caret" /></span>;
};