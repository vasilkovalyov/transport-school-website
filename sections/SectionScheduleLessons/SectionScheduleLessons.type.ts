import { ScheduleLessonProps } from '@/components/theme';
import { BlockBaseInfoType } from '../types';
import { UseLoadMoreProps } from '@/hooks/useLoadMorePosts';

export type SectionScheduleLessonsProps =
  UseLoadMoreProps<ScheduleLessonProps> & {
    heading: string;
  };

export type BlockScheduleLessonsFullDataType = SectionScheduleLessonsProps &
  BlockBaseInfoType;
