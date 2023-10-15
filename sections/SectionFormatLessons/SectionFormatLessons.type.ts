import { ServiceCardProps } from '@/components/theme/ServiceCard/ServiceCard.type';
import { ThemeColorType } from '@/types/common';
import { IBlockBaseInfo } from '../types';

export type SectionFormatLessonsProps = {
  heading: string;
  rich_text?: string;
  services: ServiceCardProps[];
  theme_color?: ThemeColorType;
};

export type BlockFormatLessonsFullDataType = SectionFormatLessonsProps &
  IBlockBaseInfo;
