import { BlogPostProps } from '@/components/theme';
import { SectionCtaProps } from '@/sections';
import { SectionBlogInfoProps } from '@/sections/SectionBlogInfo';

export type PageSingleBlogType = {
  post: SectionBlogInfoProps;
  blockRelatedPosts?: {
    posts: BlogPostProps[];
  };
  blockCta: SectionCtaProps;
};
