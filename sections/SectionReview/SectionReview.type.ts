import { ReviewPersonProps } from '@/components/theme';
import { IBlockBaseInfo } from '../types';

export type SectionReviewProps = {
  heading: string;
  reviews?: ReviewPersonProps[];
};

export type BlockReviewFullDataType = SectionReviewProps & IBlockBaseInfo;
