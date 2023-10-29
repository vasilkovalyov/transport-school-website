import { TeamEducatonCardProps } from '@/components/theme';
import { BlockBaseInfoType } from '../types';

export type SectionTeamEducationProps = {
  heading: string;
  subheading?: string;
  education_list?: TeamEducatonCardProps[];
};

export type BlockTeamEducationFullDataType = SectionTeamEducationProps &
  BlockBaseInfoType;
