import type { ContentBlock as ContentBlockType } from '../../types';
import ContentBlock from './ContentBlock';

interface ContentRendererProps {
  contentBlocks: ContentBlockType[];
}

export default function ContentRenderer({ contentBlocks }: ContentRendererProps) {
  return (
    <div className="flex flex-col gap-8">
      {contentBlocks.map((block, index) => (
        <ContentBlock key={index} block={block} index={index} />
      ))}
    </div>
  );
}
