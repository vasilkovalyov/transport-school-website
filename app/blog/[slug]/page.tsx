import type { Metadata } from 'next';
import { SectionRelatedPosts, SectionCta } from '@/sections';
import SectionBlogInfo from '@/sections/SectionBlogInfo/SectionBlogInfo';
import api from '@/axios/api';
import { PageSingleBlogType } from './page.type';
import { AxiosResponse } from 'axios';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postSeo = await api.get(`post-seo/${params.slug}`);
  const { title, description, keywords } = postSeo.data;

  return {
    title: title || 'post',
    description: description || 'post description',
    keywords: keywords || 'post keywords',
  };
}

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
        image={post.image}
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
