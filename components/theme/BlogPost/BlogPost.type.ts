import { ImageProps } from 'next/image';

export type BlogPostProps = {
  _id: string;
  image?: ImageProps;
  heading: string;
  text?: string;
  slug: string;
};
