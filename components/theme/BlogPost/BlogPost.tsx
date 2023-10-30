import Image from 'next/image';
import Link from 'next/link';
import { BlogPostProps } from './BlogPost.type';

function BlogPost({ slug, image, heading, short_description }: BlogPostProps) {
  return (
    <div className="blog base-shadow">
      {image ? (
        <div className="blog__image">
          <Image
            src={image}
            alt={heading}
            priority
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : null}
      <div className="blog__body">
        <h6 className="blog__heading font-medium">
          <Link href={slug} className="blog__heading-link">
            {heading}
          </Link>
        </h6>
        <p className="blog__text">
          {short_description?.split(' ').splice(0, 16).join(' ')}...
        </p>
        <Link href={slug} className="blog__link">
          читать далее
        </Link>
      </div>
    </div>
  );
}

export default BlogPost;
