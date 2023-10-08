import { ReviewPersonProps } from '@/components/theme';
import { IBlockBaseInfo } from '../types';

export type SectionReviewProps = {
  heading: string;
  listReviews?: ReviewPersonProps[];
};

export type BlockReviewFullDataType = SectionReviewProps & IBlockBaseInfo;
