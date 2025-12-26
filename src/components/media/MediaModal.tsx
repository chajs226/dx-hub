import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function MediaModal() {
  const { expandedMedia, setExpandedMedia } = useApp();

  const closeModal = () => {
    setExpandedMedia(null);
  };

  // ESC key handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (expandedMedia) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [expandedMedia]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (expandedMedia) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [expandedMedia]);

  return (
    <AnimatePresence>
      {expandedMedia && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 cursor-pointer"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative max-w-[95vw] max-h-[95vh] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={closeModal}
                className="absolute -top-14 right-0 flex items-center gap-2 px-4 py-2 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/50 backdrop-blur-md rounded-lg transition-colors focus-ring"
                aria-label="닫기"
              >
                <X size={18} className="text-slate-300" />
                <span className="text-sm text-slate-300 hidden sm:inline">닫기</span>
                <span className="text-xs text-slate-500 hidden lg:inline">(ESC)</span>
              </motion.button>

              {/* Media content */}
              {expandedMedia.type === 'image' ? (
                <img
                  src={expandedMedia.url}
                  alt="확대된 이미지"
                  className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl border border-slate-800/50"
                />
              ) : (
                <video
                  src={expandedMedia.url}
                  controls
                  autoPlay
                  className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border border-slate-800/50"
                />
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
