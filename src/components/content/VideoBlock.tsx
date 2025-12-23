import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import type { VideoBlock as VideoBlockType } from '../../types';

interface VideoBlockProps {
  data: VideoBlockType;
  index: number;
}

export default function VideoBlock({ data, index }: VideoBlockProps) {
  const { setExpandedMedia } = useApp();

  const handleExpand = () => {
    setExpandedMedia({ type: 'video', url: data.url });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="my-8"
    >
      <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-800 group">
        <video
          src={data.url}
          controls
          preload="metadata"
          className="w-full h-full"
        />

        {/* Expand button */}
        <button
          onClick={handleExpand}
          className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
          aria-label="전체화면으로 보기"
        >
          <Maximize2 size={20} className="text-white" />
        </button>
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
