import type { Metadata } from 'next';
import { SectionRelatedPosts, SectionCta } from '@/sections';
import SectionBlogInfo from '@/sections/SectionBlogInfo/SectionBlogInfo';
import api from '@/axios/api';
import { PageSingleBlogType } from './page.type';
import { AxiosResponse } from 'axios';

async function getData(
  slug: string
): Promise<AxiosResponse<PageSingleBlogType> | null> {
  try {
    const response = await api.get(`page/blog/${slug}`);
    return response;
  } catch (e) {
    return null;
  }
}

export const metadata: Metadata = {
  title: 'Post',
};

export default async function Post(props: { params: { slug: string } }) {
  const response = await getData(props.params.slug);

  if (!response?.data) {
    return null;
  }

  const { post, blockRelatedPosts, blockCta } = response?.data;

  return (
    <>
      <SectionBlogInfo
        heading={post.heading}
        createdAt={post.createdAt}
        short_description={post.short_description}
        rich_text={post.rich_text}
      />
      {blockRelatedPosts && blockRelatedPosts?.posts.length ? (
        <SectionRelatedPosts
          heading="Другие статьи"
          posts={blockRelatedPosts.posts}
        />
      ) : null}
      <SectionCta {...blockCta} />
    </>
  );
}
