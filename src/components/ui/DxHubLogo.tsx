import { motion } from 'framer-motion';

/**
 * DX HUB Logo Component - Seoul Asan Medical Center CI
 *
 * Design Concept:
 * - "A" (Asan) + "D" (Digital) combined mark representing Medical + Digital Innovation
 * - Geometric fusion of two letterforms creating a unified symbol
 * - ASAN GREEN color scheme from official CI (Pantone 3155C)
 * - Modern, sophisticated design language
 *
 * Colors: Seoul Asan Medical Center Official CI
 * - ASAN GREEN: #006450 (C100, M15, Y45, K40)
 * - ASAN Light Green: #6B9B8A (C60, M5, Y30, K20)
 * - ASAN Orange: #FF8C00 (Accent)
 */
export default function DxHubLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center gap-3"
    >
      {/* Logo Mark: A+D Combined Symbol */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Outer hexagonal frame (representing connectivity/hub) */}
        <motion.path
          d="M22 3L38 12V32L22 41L6 32V12L22 3Z"
          fill="url(#hexagonBg)"
          fillOpacity="0.08"
          stroke="url(#hexagonStroke)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        />

        {/* A+D Combined Mark - Main Element */}
        <motion.g
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {/* "A" Shape - Asan Medical */}
          {/* Left diagonal of A */}
          <path
            d="M14 30L19 14C19.2 13.4 19.8 13 20.5 13H20.8"
            stroke="url(#asanGreen)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Right diagonal of A */}
          <path
            d="M30 30L25 14C24.8 13.4 24.2 13 23.5 13H23.2"
            stroke="url(#asanGreen)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* A crossbar - connects to D */}
          <path
            d="M17 23H27"
            stroke="url(#greenToOrange)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* "D" Shape - Digital (integrated with A) */}
          {/* Curved right side of D, starting from A's right leg */}
          <path
            d="M27 23C27 26 25 28.5 22 28.5C19 28.5 17 26 17 23"
            stroke="url(#asanGreenLight)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </motion.g>

        {/* Digital accent dots - representing data/innovation */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {/* Top right accent */}
          <motion.circle
            cx="33"
            cy="16"
            r="1.8"
            fill="#6B9B8A"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.4, delay: 1 }}
          />
          {/* Bottom left accent */}
          <motion.circle
            cx="11"
            cy="28"
            r="1.8"
            fill="#6B9B8A"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.4, delay: 1.1 }}
          />
          {/* Pulsing innovation indicator */}
          <motion.circle
            cx="33"
            cy="28"
            r="1.5"
            fill="#FF8C00"
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.g>

        {/* Gradients */}
        <defs>
          {/* Hexagon background gradient */}
          <linearGradient id="hexagonBg" x1="6" y1="3" x2="38" y2="41" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#006450" />
            <stop offset="100%" stopColor="#004A3C" />
          </linearGradient>

          {/* Hexagon stroke gradient */}
          <linearGradient id="hexagonStroke" x1="6" y1="3" x2="38" y2="41" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6B9B8A" />
            <stop offset="50%" stopColor="#006450" />
            <stop offset="100%" stopColor="#6B9B8A" />
          </linearGradient>

          {/* Main ASAN GREEN gradient */}
          <linearGradient id="asanGreen" x1="14" y1="13" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#006450" />
            <stop offset="50%" stopColor="#00523F" />
            <stop offset="100%" stopColor="#006450" />
          </linearGradient>

          {/* Light green for D curve */}
          <linearGradient id="asanGreenLight" x1="17" y1="23" x2="27" y2="28.5" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6B9B8A" />
            <stop offset="100%" stopColor="#006450" />
          </linearGradient>

          {/* Green to orange transition for crossbar */}
          <linearGradient id="greenToOrange" x1="17" y1="23" x2="27" y2="23" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#006450" />
            <stop offset="70%" stopColor="#007A5E" />
            <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Text labels */}
      <div className="flex flex-col">
        <motion.h1
          className="text-xl font-bold bg-gradient-to-r from-asan-green via-asan-green to-asan-green-light bg-clip-text text-transparent leading-tight tracking-tight"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            // Fallback for browsers that don't support bg-clip-text perfectly
            color: '#006450',
          }}
        >
          DX HUB
        </motion.h1>
        <motion.p
          className="text-xs text-slate-400 leading-tight"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          디지털정보혁신본부 AI 아카이브
        </motion.p>
      </div>
    </motion.div>
  );
}
