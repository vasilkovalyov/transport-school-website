import Image from 'next/image';
import { SectionBlogInfoProps } from './SectionBlogInfo.type';
import { Container } from '@/components/theme';
import monthes from '@/constants/month-names';

function SectionBlogInfo({
  heading,
  date,
  image,
  short_description,
  rich_text,
}: SectionBlogInfoProps) {
  const [year, month, day] = date.split('T')[0].split('-');
  return (
    <section className="section-article-info">
      <Container className="section-article-info__container">
        <h1 className="section-article-info__heading h3">{heading}</h1>
        <p className="section-article-info__date text-grey font-medium">
          {day} {monthes[+month - 1]} {year}
        </p>
        {image ? (
          <div className="section-article-info__image">
            <Image
              {...image}
              src={image.src}
              alt={image.alt}
              width={840}
              height={640}
            />
          </div>
        ) : null}
        <p className="section-article-info__large-text">{short_description}</p>
        {rich_text ? (
          <div
            className="section-article-info__text-content"
            dangerouslySetInnerHTML={{ __html: rich_text }}
          />
        ) : null}
      </Container>
    </section>
  );
}

export default SectionBlogInfo;
