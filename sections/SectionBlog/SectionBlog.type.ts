import { BlogPostProps } from '@/components/theme';
import { IBlockBaseInfo } from '../types';

export type SectionBlogProps = {
  heading: string;
  posts?: BlogPostProps[];
};

export type BlockBlogFullDataType = SectionBlogProps & IBlockBaseInfo;
