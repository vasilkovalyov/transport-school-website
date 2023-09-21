import Image from 'next/image';
import Link from 'next/link';
import { BlogPostProps } from './BlogPost.type';

function BlogPost({ slug, image, heading, text }: BlogPostProps) {
  return (
    <div className="blog base-shadow">
      {image ? (
        <div className="blog__image">
          <Image {...image} src={image.src} alt={image.alt} />
        </div>
      ) : null}
      <div className="blog__body">
        <h6 className="blog__heading font-medium">
          <Link href={slug} className="blog__heading-link">
            {heading}
          </Link>
        </h6>
        <p className="blog__text">{text}</p>
        <Link href={slug} className="blog__link">
          читать далее
        </Link>
      </div>
    </div>
  );
}

export default BlogPost;
