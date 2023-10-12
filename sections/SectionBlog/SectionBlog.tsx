'use client';
import { useState, useEffect } from 'react';
import { BlogPost, BlogPostProps, Container } from '@/components/theme';
import { SectionBlogProps } from './SectionBlog.type';
import { PAGE } from '@/axios/api-routes';
import api from '@/axios/api';

function SectionBlog({
  heading,
  posts,
  next_page,
  post_number,
  current_page,
}: SectionBlogProps) {
  const [postsData, setPostsData] = useState<BlogPostProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(current_page || 2);
  const [nextPage, setNextPage] = useState<number | null>(next_page || null);

  useEffect(() => {
    if (posts) {
      setPostsData(posts);
    }
  }, [posts]);

  async function loadPosts() {
    const response = await api.get('posts', {
      params: {
        size: post_number,
        page: currentPage,
      },
    });

    setPostsData([...postsData, ...response.data.posts]);
    setNextPage(response.data.next_page);
    setCurrentPage(response.data.current_page);
  }

  return (
    <section className="section-blog">
      <Container className="section-blog__container">
        <h2 className="section-blog__heading ta-c">{heading}</h2>
        {postsData && postsData.length ? (
          <div className="blog-list">
            {postsData.map((post) => (
              <div key={post._id} className="blog-list__col">
                <BlogPost {...post} slug={`${PAGE.BLOG}/${post._id}`} />
              </div>
            ))}
          </div>
        ) : null}
        {nextPage ? (
          <div className="section-blog__action ta-c">
            <button className="load-more" onClick={loadPosts}>
              Загрузить больше
            </button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

export default SectionBlog;
