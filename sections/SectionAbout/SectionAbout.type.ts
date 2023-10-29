import { ImageProps } from 'next/image';
import { BlockBaseInfoType } from '../types';

export type SectionAboutProps = {
  heading: string;
  rich_text?: string;
};

export type BlockAboutFullDataType = SectionAboutProps & BlockBaseInfoType;
