import { useEffect, useState } from "react";
export const useMediaQuery = (q) => {
  const [match, setMatch] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(q);
    const update = () => setMatch(m.matches);
    update();
    m.addEventListener('change', update);
    return () => m.removeEventListener('change', update);
  }, [q]);
  return match;
};

