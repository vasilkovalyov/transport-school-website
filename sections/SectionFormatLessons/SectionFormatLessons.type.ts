import { LessonCardProps } from '@/components/theme/LessonCard/LessonCard.type';
import { ThemeColorType } from '@/types/common';
import { IBlockBaseInfo } from '../types';

export type SectionFormatLessonsProps = {
  heading: string;
  rich_text?: string;
  lessons?: LessonCardProps[];
  themeColor?: ThemeColorType;
};

export type BlockFormatLessonsFullDataType = SectionFormatLessonsProps &
  IBlockBaseInfo;
