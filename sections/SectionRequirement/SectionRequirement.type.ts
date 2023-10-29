import { RequirementCardProps } from '@/components/theme';
import { BlockBaseInfoType } from '../types';

export type SectionRequirementProps = {
  heading: string;
  requirements_list: RequirementCardProps[];
};

export type BlockRequirementFullDataType = SectionRequirementProps &
  BlockBaseInfoType;
