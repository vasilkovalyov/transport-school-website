import { BlockBaseInfoType } from '../types';

export type SectionStructEducationProps = {
  heading: string;
  struct_education_list: {
    _id: string;
    heading: string;
    rich_text: string;
  }[];
};

export type BlockStructEducationFullDataType = SectionStructEducationProps &
  BlockBaseInfoType;
