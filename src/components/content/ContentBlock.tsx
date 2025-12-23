import type { ContentBlock as ContentBlockType } from '../../types';
import TextBlock from './TextBlock';
import ImageBlock from './ImageBlock';
import VideoBlock from './VideoBlock';

interface ContentBlockProps {
  block: ContentBlockType;
  index: number;
}

export default function ContentBlock({ block, index }: ContentBlockProps) {
  switch (block.type) {
    case 'text':
      return <TextBlock data={block} index={index} />;
    case 'image':
      return <ImageBlock data={block} index={index} />;
    case 'video':
      return <VideoBlock data={block} index={index} />;
    default:
      return null;
  }
}
