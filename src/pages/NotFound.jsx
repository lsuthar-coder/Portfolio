// pages/NotFound.jsx

import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound({ theme }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`notfound-container ${
        isDark ? "dark-theme" : "light-theme"
      }`}
    >
      <div className="gradient-bg" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="content"
      >
        <motion.h1
          animate={{
            textShadow: isDark
              ? [
                  "0 0 20px rgba(168,85,247,0.4)",
                  "0 0 60px rgba(168,85,247,0.9)",
                  "0 0 20px rgba(168,85,247,0.4)",
                ]
              : [
                  "0 0 20px rgba(59,130,246,0.3)",
                  "0 0 60px rgba(59,130,246,0.6)",
                  "0 0 20px rgba(59,130,246,0.3)",
                ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          404
        </motion.h1>

        <motion.div
          className="floating-orb orb-1"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="floating-orb orb-2"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <p>The page you are looking for vanished into the void.</p>

        <div className="actions">
          <Link to="/" className="home-btn">
            <Home size={18} />
            Back Home
          </Link>

        </div>
      </motion.div>
    </div>
  );
}