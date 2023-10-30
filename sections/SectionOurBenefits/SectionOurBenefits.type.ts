import { BlockBaseInfoType } from '../types';

export type SectionOurBenefitsProps = {
  image?: string;
  heading: string;
  rich_text?: string;
};

export type BlockOurBenefitsFullDataType = SectionOurBenefitsProps &
  BlockBaseInfoType;
