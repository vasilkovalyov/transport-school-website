import Image from 'next/image';
import { Container } from '@/components/theme';
import { SectionCourseForPeopleProps } from './SectionCourseForPeople.type';

function SectionCourseForPeople({
  heading,
  rich_text,
}: SectionCourseForPeopleProps) {
  return (
    <section className="section-course-for-people">
      <Container className="section-course-for-people__container">
        <h2 className="section-course-for-people__heading ta-c">{heading}</h2>
        {rich_text ? (
          <div className="section-course-for-people__body">
            <Image
              src="/images/decor-image.png"
              alt="decor-image"
              width={1137}
              height={931}
              className="section-course-for-people__decor-image"
            />
            {rich_text ? (
              <div
                className="section-course-for-people__text-content"
                dangerouslySetInnerHTML={{ __html: rich_text }}
              />
            ) : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

export default SectionCourseForPeople;
