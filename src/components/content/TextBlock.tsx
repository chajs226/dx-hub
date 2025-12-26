import { motion } from 'framer-motion';
import type { TextBlock as TextBlockType } from '../../types';

interface TextBlockProps {
  data: TextBlockType;
  index: number;
}

export default function TextBlock({ data, index }: TextBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="prose prose-invert max-w-none"
    >
      <p className="text-slate-400 leading-relaxed text-base">
        {data.value}
      </p>
    </motion.div>
  );
}
