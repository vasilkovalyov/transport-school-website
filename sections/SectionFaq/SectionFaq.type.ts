import { ImageProps } from 'next/image';
import { IBlockBaseInfo } from '../types';

export type SectionFaqProps = {
  heading: string;
  image?: ImageProps;
  list_faq?: FaqQuestionProps[];
};

export type FaqQuestionProps = {
  _id: string;
  heading: string;
  text: string;
};

export type BlockFaqDataType = SectionFaqProps & IBlockBaseInfo;
