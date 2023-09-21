import { ImageProps } from 'next/image';

export type SectionBlogInfoProps = {
  heading: string;
  date: string;
  largeText: string;
  text: string;
  image: ImageProps;
};
