import { BlockBaseInfoType } from '../types';

export type SectionAboutCourseProps = {
  heading: string;
  rich_text?: string;
};

export type BlockAboutCourseFullDataType = SectionAboutCourseProps &
  BlockBaseInfoType;
