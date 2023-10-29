import { ImageProps } from 'next/image';
import { BlockBaseInfoType } from '../types';

export type SectionAboutUsProps = {
  image?: ImageProps;
  heading: string;
  rich_text?: string;
};

export type BlockAboutUsFullDataType = SectionAboutUsProps & BlockBaseInfoType;
