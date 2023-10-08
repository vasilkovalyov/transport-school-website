import { RequirementCardProps } from '@/components/theme';
import { IBlockBaseInfo } from '../types';

export type SectionRequirementProps = {
  heading: string;
  requirements_list: RequirementCardProps[];
};

export type BlockRequirementFullDataType = SectionRequirementProps &
  IBlockBaseInfo;
