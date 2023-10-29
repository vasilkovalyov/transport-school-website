import { ReviewPersonProps } from '@/components/theme';
import { BlockBaseInfoType } from '../types';

export type SectionReviewProps = {
  heading: string;
  reviews?: ReviewPersonProps[];
};

export type BlockReviewFullDataType = SectionReviewProps & BlockBaseInfoType;
