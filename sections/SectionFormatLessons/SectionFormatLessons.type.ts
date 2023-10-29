import { ServiceCardProps } from '@/components/theme/ServiceCard/ServiceCard.type';
import { BlockBaseInfoType } from '../types';

export type SectionFormatLessonsProps = {
  heading: string;
  rich_text?: string;
  services: ServiceCardProps[];
  use_dark_theme?: boolean;
};

export type BlockFormatLessonsFullDataType = SectionFormatLessonsProps &
  BlockBaseInfoType;
