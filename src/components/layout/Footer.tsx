import { motion } from 'framer-motion';

/**
 * Footer Component
 *
 * Displays copyright information and Seoul Asan Medical Center branding
 * Provides institutional credibility while maintaining service brand hierarchy
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-auto border-t border-asan-gray-light/10 bg-gradient-to-b from-transparent to-slate-950/30 backdrop-blur-sm"
    >
      <div className="px-8 py-6 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Copyright and Links */}
        <div className="flex flex-col items-center lg:items-start gap-2">
          <p className="text-xs text-slate-400">
            &copy; {currentYear} Seoul Asan Medical Center. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://www.amc.seoul.kr/asan/privacy/privacy.do"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-primary-400 transition-colors duration-200"
            >
              개인정보처리방침
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="https://www.amc.seoul.kr/asan/terms/terms.do"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-primary-400 transition-colors duration-200"
            >
              이용약관
            </a>
          </div>
        </div>

        {/* Institution Branding */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden lg:block">
            <p className="text-xs font-medium text-slate-400">Powered by</p>
            <p className="text-sm font-semibold text-slate-300">
              디지털정보혁신본부
            </p>
          </div>
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
              className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 lg:h-12"
            />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
