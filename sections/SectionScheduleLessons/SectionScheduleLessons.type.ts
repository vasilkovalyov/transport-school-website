import { ScheduleLessonProps } from '@/components/theme';
import { IBlockBaseInfo } from '../types';
import { IUseLoadMore } from '@/hooks/useLoadMorePosts';

export type SectionScheduleLessonsProps = IUseLoadMore<ScheduleLessonProps> & {
  heading: string;
};

export type BlockScheduleLessonsFullDataType = SectionScheduleLessonsProps &
  IBlockBaseInfo;
