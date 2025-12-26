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
      <div className="relative group rounded-xl overflow-hidden border border-slate-800/50">
        {/* Loading skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-slate-800/50 animate-pulse" />
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
            w-full h-auto cursor-zoom-in transition-all duration-300
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
          `}
        />

        {/* Zoom overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 cursor-zoom-in"
          onClick={handleClick}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
            <ZoomIn size={16} className="text-white" />
            <span className="text-sm text-white font-medium">확대하기</span>
          </div>
        </div>
      </div>

      {/* Caption */}
      {data.caption && (
        <p className="text-sm text-slate-500 mt-3">
          {data.caption}
        </p>
      )}
    </motion.div>
  );
}
