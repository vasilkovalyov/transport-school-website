import { ImageProps } from 'next/image';

export type ReviewPersonProps = {
  _id: string;
  image: ImageProps;
  text: string;
  personName: string;
  rating: number;
};
