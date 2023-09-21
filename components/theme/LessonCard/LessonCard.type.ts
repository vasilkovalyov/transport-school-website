import { ImageProps } from 'next/image';

export type LessonCardProps = {
  _id: string;
  image: ImageProps;
  heading: string;
  topListInfo: string[];
  bottomListInfo?: string[];
  price: string;
};
