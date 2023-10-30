import { BlockBaseInfoType } from '../types';

export type SectionAboutUsProps = {
  image?: string;
  heading: string;
  rich_text?: string;
};

export type BlockAboutUsFullDataType = SectionAboutUsProps & BlockBaseInfoType;
