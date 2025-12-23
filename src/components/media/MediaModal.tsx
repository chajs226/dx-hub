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
            transition={{ duration: 0.2 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[95vw] max-h-[95vh] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="absolute -top-12 right-0 lg:-top-14 lg:-right-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-colors"
                aria-label="닫기"
              >
                <X size={24} className="text-white" />
              </motion.button>

              {/* Media content */}
              {expandedMedia.type === 'image' ? (
                <img
                  src={expandedMedia.url}
                  alt="확대된 이미지"
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
              ) : (
                <video
                  src={expandedMedia.url}
                  controls
                  autoPlay
                  className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                />
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
