import {Moon, Sun} from 'lucide-react';
export const ThemeToggle = ({ theme, setTheme }) => (
  <button
    className="ld-theme-toggle"
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    aria-label="Toggle theme"
    data-cursor="hover"
  >
    <div className="ld-theme-thumb">
      {theme === 'dark' ? <Moon size={12} /> : <Sun size={12} />}
    </div>
  </button>
);