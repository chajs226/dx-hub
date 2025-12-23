import { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import type { ImageBlock as ImageBlockType } from '../../types';

interface ImageBlockProps {
  data: ImageBlockType;
  index: number;
}

export default function ImageBlock({ data, index }: ImageBlockProps) {
  const { setExpandedMedia } = useApp();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = () => {
    setExpandedMedia({ type: 'image', url: data.url });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="my-8"
    >
      <div className="relative group rounded-lg overflow-hidden">
        {/* Loading skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-slate-700 animate-pulse" />
        )}

        {/* Image */}
        <img
          src={data.url}
          alt={data.caption || ''}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onClick={handleClick}
          className={`
            w-full h-auto rounded-lg cursor-zoom-in transition-all duration-300
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
            group-hover:scale-[1.02]
          `}
        />

        {/* Zoom overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-zoom-in"
          onClick={handleClick}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            className="bg-white/20 backdrop-blur-sm rounded-full p-4"
          >
            <ZoomIn size={32} className="text-white" />
          </motion.div>
        </div>
      </div>

      {/* Caption */}
      {data.caption && (
        <p className="text-sm text-slate-400 italic mt-3 text-center">
          {data.caption}
        </p>
      )}
    </motion.div>
  );
}
