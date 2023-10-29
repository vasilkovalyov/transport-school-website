import { BlockBaseInfoType } from '../types';

export type SectionAchivmentsProps = {
  heading: string;
  subheading?: string;
  list_achivments?: AchivmentProps[];
};

export type AchivmentProps = {
  _id: string;
  heading: string;
  text: string;
};

export type BlockAchivmentsFullDataType = SectionAchivmentsProps &
  BlockBaseInfoType;
