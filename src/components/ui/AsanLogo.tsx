import { motion } from 'framer-motion';

/**
 * Seoul Asan Medical Center Logo Component
 * Displays the official AMC logo in the top-right corner
 * Reduced size and opacity for visual hierarchy (service brand first)
 */
export default function AsanLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-4 right-6 z-50 lg:top-6 lg:right-8"
    >
      <a
        href="https://www.amc.seoul.kr"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label="Seoul Asan Medical Center"
      >
        <img
          src="/amc_ke_color.gif"
          alt="Seoul Asan Medical Center"
          className="h-8 w-auto opacity-70 hover:opacity-90 transition-opacity duration-300 lg:h-9"
        />
      </a>
    </motion.div>
  );
}
