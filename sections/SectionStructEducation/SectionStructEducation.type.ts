import { IBlockBaseInfo } from '../types';

export type SectionStructEducationProps = {
  heading: string;
  listEducations: {
    _id: string;
    heading: string;
    list: string[];
  }[];
};

export type BlockStructEducationFullDataType = SectionStructEducationProps &
  IBlockBaseInfo;
