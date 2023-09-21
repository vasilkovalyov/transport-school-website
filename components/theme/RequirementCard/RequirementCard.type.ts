import { ImageProps } from 'next/image';

export type RequirementCardProps = {
  _id: string;
  image: ImageProps;
  heading: string;
  text: string;
};
