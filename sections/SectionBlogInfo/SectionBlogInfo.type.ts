import { ImageProps } from 'next/image';
import { IBlockBaseInfo } from '../types';

export type SectionBlogInfoProps = {
  heading: string;
  date: string;
  largeText: string;
  text: string;
  image: ImageProps;
};

export type BlockBlogInfoFullDataType = SectionBlogInfoProps & IBlockBaseInfo;
