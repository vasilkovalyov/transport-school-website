import { BlogPostProps } from '@/components/theme';
import { IBlockBaseInfo } from '../types';

export type SectionRelatedBlogProps = {
  heading: string;
  posts: BlogPostProps[];
};

export type BlockRelatedBlogFullDataType = SectionRelatedBlogProps &
  IBlockBaseInfo;
