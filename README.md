# Leeladhar Suthar — Portfolio

Modern developer portfolio built with React, Vite, and Tailwind CSS. Features custom animations, dark/light theme, and interactive UI components.

**Live:** https://portfolio.lsuthar.in

---

## Tech Stack

- React 18
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
- React Icons
- Instrument Serif + Geist fonts
- GitHub Actions
- Azure Static Web Apps

---

## Features

- Dark / light theme toggle with CSS custom properties
- Custom animated cursor with lag effect
- Scroll reveal + stagger animations
- Interactive skill cards (hover to flip)
- Mobile-first navigation with fullscreen menu
- Animated hero with typewriter effect
- Project showcase with hover interactions
- Experience timeline
- Contact section
- Automated CI/CD via GitHub Actions → Azure Static Web Apps

---

## Project Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── CustomCursor.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Nav.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Stripe.jsx
│   ├── ThemeToggle.jsx
│   └── Typewriter.jsx
├── data/
│   ├── constant.js
│   ├── education.js
│   ├── experience.js
│   ├── nav.js
│   ├── projects.js
│   └── skills.js
├── hooks/
│   ├── MedaiaQueryHook.jsx
│   ├── RevealHook.jsx
│   └── ScrollSpyHook.jsx
├── logos/
│   └── index.jsx
├── pages/
│   └── Portfolio.jsx
├── styles/
│   └── global.css
├── App.jsx
├── index.css
└── main.jsx
```

---

## Local Development

```bash
git clone https://github.com/lsuthar-coder/Portfolio.git
cd Portfolio
npm install
npm run dev
# → http://localhost:5173
```

```bash
npm run build    # production build → dist/
npm run preview  # preview production build
```

---

## Deployment

Deployed on **Azure Static Web Apps** (free tier) via GitHub Actions.

Every push to `main` automatically:
1. Runs `npm ci`
2. Runs `vite build`
3. Deploys `dist/` to Azure Static Web Apps

Custom domain `portfolio.lsuthar.in` configured via Cloudflare DNS.

---

## Contact

- **GitHub:** https://github.com/lsuthar-coder
- **LinkedIn:** https://linkedin.com/in/leeladhar-suthar
- **Portfolio:** https://portfolio.lsuthar.in

---

## License

MIT