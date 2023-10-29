import { ImageProps } from 'next/image';
import { BlockBaseInfoType } from '../types';

export type SectionWhoTeachProps = {
  image?: ImageProps;
  heading: string;
  teacherName?: string;
  rich_text?: string;
};

export type BlockWhoTeachFullInfoType = SectionWhoTeachProps &
  BlockBaseInfoType;
