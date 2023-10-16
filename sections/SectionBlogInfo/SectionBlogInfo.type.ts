import { ImageProps } from 'next/image';

export type SectionBlogInfoProps = {
  heading: string;
  createdAt: string;
  short_description?: string;
  rich_text?: string;
  image?: ImageProps;
};
