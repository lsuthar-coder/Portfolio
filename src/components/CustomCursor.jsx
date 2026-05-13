import { useRef, useEffect } from 'react';
import {useMediaQuery} from '../hooks/MedaiaQueryHook';

const CustomCursor = () => {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const isCoarse = useMediaQuery('(hover: none), (pointer: coarse)');

  useEffect(() => {
    if (isCoarse) return;
    let raf = null;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e) => {
      tx = e.clientX; ty = e.clientY;
      if (dotRef.current) { dotRef.current.style.left = tx + 'px'; dotRef.current.style.top = ty + 'px'; }
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const loop = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      if (ringRef.current) { ringRef.current.style.left = cx + 'px'; ringRef.current.style.top = cy + 'px'; }
      if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) raf = requestAnimationFrame(loop);
      else raf = null;
    };
    const onOver = (e) => {
      const t = e.target.closest('a, button, [data-cursor="hover"]');
      if (ringRef.current) ringRef.current.classList.toggle('hover', !!t);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isCoarse]);

  if (isCoarse) return null;
  return (<>
    <div ref={ringRef} className="ld-cursor" />
    <div ref={dotRef} className="ld-cursor-dot" />
  </>);
};

export default CustomCursor;