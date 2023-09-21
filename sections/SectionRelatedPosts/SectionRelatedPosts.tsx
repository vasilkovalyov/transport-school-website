import { BlogPost, Container } from '@/components/theme';
import { SectionRelatedBlogProps } from './SectionRelatedPosts.type';

function SectionRelatedPosts({ heading, posts }: SectionRelatedBlogProps) {
  return (
    <section className="section-related-posts">
      <Container className="section-related-posts__container">
        <h3 className="section-related-posts__heading">{heading}</h3>
        {posts && posts.length ? (
          <div className="blog-list">
            {posts.map((post) => (
              <div key={post._id} className="blog-list__col">
                <BlogPost {...post} />
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

export default SectionRelatedPosts;
