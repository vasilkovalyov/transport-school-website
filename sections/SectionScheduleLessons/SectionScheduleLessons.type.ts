import { ScheduleLessonProps } from '@/components/theme';
import { IBlockBaseInfo } from '../types';

export type SectionScheduleLessonsProps = {
  heading: string;
  listScheduleLessons?: ScheduleLessonProps[];
};

export type BlockScheduleLessonsFullDataType = SectionScheduleLessonsProps &
  IBlockBaseInfo;
