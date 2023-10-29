import { BlogPostProps } from '@/components/theme';
import { BlockBaseInfoType } from '../types';

export type SectionRelatedBlogProps = {
  heading: string;
  posts: BlogPostProps[];
};

export type BlockRelatedBlogFullDataType = SectionRelatedBlogProps &
  BlockBaseInfoType;
