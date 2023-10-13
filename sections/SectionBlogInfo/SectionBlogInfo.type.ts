import { ImageProps } from 'next/image';

export type SectionBlogInfoProps = {
  heading: string;
  date: string;
  short_description?: string;
  rich_text?: string;
  image?: ImageProps;
};
