import { BlockBaseInfoType } from '../types';

export type SectionCourseForPeopleProps = {
  heading: string;
  rich_text?: string;
};

export type BlockCourseForPeopleFullDataType = SectionCourseForPeopleProps &
  BlockBaseInfoType;
