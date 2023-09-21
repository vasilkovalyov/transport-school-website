import { LessonCardProps } from '@/components/theme/LessonCard/LessonCard.type';
import { ThemeColorType } from '@/types/common';

export type SectionFormatLessonsProps = {
  heading: string;
  subheading: string;
  lessons: LessonCardProps[];
  themeColor?: ThemeColorType;
};
