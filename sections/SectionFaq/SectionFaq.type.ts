import { ImageProps } from 'next/image';

export type SectionFaqProps = {
  heading: string;
  image: ImageProps;
  questions: FaqQuestionProps[];
};

export type FaqQuestionProps = {
  _id: string;
  heading: string;
  text: string;
};
