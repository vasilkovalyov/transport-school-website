import { BlogPostProps } from '@/components/theme';
import { SectionCtaProps } from '@/sections';
import { SectionBlogInfoProps } from '@/sections/SectionBlogInfo';

export interface IPageSingleBlog {
  post: SectionBlogInfoProps;
  blockRelatedPosts?: {
    posts: BlogPostProps[];
  };
  blockCta: SectionCtaProps;
}
