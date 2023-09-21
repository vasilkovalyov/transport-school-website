import { BlogPost, Container } from '@/components/theme';
import { SectionBlogProps } from './SectionBlog.type';

function SectionBlog({ heading, posts }: SectionBlogProps) {
  return (
    <section className="section-blog">
      <Container className="section-blog__container">
        <h2 className="section-blog__heading ta-c">{heading}</h2>
        {posts && posts.length ? (
          <div className="blog-list">
            {posts.map((post) => (
              <div key={post._id} className="blog-list__col">
                <BlogPost {...post} />
              </div>
            ))}
          </div>
        ) : null}
        <div className="section-blog__action ta-c">
          <button className="load-more">Загрузить больше</button>
        </div>
      </Container>
    </section>
  );
}

export default SectionBlog;
