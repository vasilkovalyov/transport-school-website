import { BlogPostProps } from '@/components/theme';
import { IBlockBaseInfo } from '../types';
import { IUseLoadMore } from '@/hooks/useLoadMorePosts';

export type SectionBlogProps = IUseLoadMore<BlogPostProps> & {
  heading: string;
};

export type BlockBlogFullDataType = SectionBlogProps & IBlockBaseInfo;
