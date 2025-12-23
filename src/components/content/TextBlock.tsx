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
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="prose prose-invert prose-lg max-w-none"
    >
      <p className="text-slate-300 leading-relaxed text-lg">
        {data.value}
      </p>
    </motion.div>
  );
}
