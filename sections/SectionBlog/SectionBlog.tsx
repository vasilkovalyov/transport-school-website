'use client';
import { BlogPost, Container } from '@/components/theme';
import { SectionBlogProps } from './SectionBlog.type';
import { PAGE } from '@/axios/api-routes';
import { useLoadMorePosts } from '@/hooks/useLoadMorePosts';

function SectionBlog({
  heading,
  posts,
  next_page,
  post_number,
}: SectionBlogProps) {
  const { loading, postList, nextPage, onLoadMore } = useLoadMorePosts({
    apiUrl: 'posts',
    posts,
    next_page: next_page,
    post_number: post_number,
  });

  return (
    <section className="section-blog">
      <Container className="section-blog__container">
        <h2 className="section-blog__heading ta-c">{heading}</h2>
        {postList && postList.length ? (
          <div className="blog-list">
            {postList.map((post) => (
              <div key={post._id} className="blog-list__col">
                <BlogPost {...post} slug={`${PAGE.BLOG}/${post.slug}`} />
              </div>
            ))}
          </div>
        ) : null}
        {nextPage ? (
          <div className="section-blog__action ta-c">
            <button
              className="load-more"
              disabled={loading}
              onClick={onLoadMore}
            >
              {loading ? 'Загрузка...' : 'Загрузить больше'}
            </button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

export default SectionBlog;
