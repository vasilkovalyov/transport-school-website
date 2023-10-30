import { BlockBaseInfoType } from '../types';

export type SectionFaqProps = {
  heading: string;
  image?: string;
  list_faq?: FaqQuestionProps[];
};

export type FaqQuestionProps = {
  _id: string;
  heading: string;
  rich_text?: string;
};

export type BlockFaqDataType = SectionFaqProps & BlockBaseInfoType;
