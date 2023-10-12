import { BlogPostProps } from '@/components/theme';
import { IBlockBaseInfo } from '../types';

export type SectionBlogProps = {
  heading: string;
  posts?: BlogPostProps[];
  next_page?: number | null;
  post_number?: number | null;
  current_page: number;
};

export type BlockBlogFullDataType = SectionBlogProps & IBlockBaseInfo;
