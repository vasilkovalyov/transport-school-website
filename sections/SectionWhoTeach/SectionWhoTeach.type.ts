import { BlockBaseInfoType } from '../types';

export type SectionWhoTeachProps = {
  image?: string;
  heading: string;
  teacherName?: string;
  rich_text?: string;
};

export type BlockWhoTeachFullInfoType = SectionWhoTeachProps &
  BlockBaseInfoType;
