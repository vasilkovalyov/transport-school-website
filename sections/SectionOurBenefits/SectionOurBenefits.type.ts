import { ImageProps } from 'next/image';
import { BlockBaseInfoType } from '../types';

export type SectionOurBenefitsProps = {
  image?: ImageProps;
  heading: string;
  rich_text?: string;
};

export type BlockOurBenefitsFullDataType = SectionOurBenefitsProps &
  BlockBaseInfoType;
