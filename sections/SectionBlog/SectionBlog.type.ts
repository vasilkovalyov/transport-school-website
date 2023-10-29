import { BlogPostProps } from '@/components/theme';
import { BlockBaseInfoType } from '../types';
import { UseLoadMoreProps } from '@/hooks/useLoadMorePosts';

export type SectionBlogProps = UseLoadMoreProps<BlogPostProps> & {
  heading: string;
};

export type BlockBlogFullDataType = SectionBlogProps & BlockBaseInfoType;
