import cn from 'classnames';

import { SectionFormatLessonsProps } from './SectionFormatLessons.type';
import { LessonCard, Container } from '@/components/theme';

function SectionFormatLessons({
  heading,
  rich_text,
  lessons,
  themeColor = 'light',
}: SectionFormatLessonsProps) {
  const themeColorCn = cn({
    'section-format-lessons--light': themeColor === 'light',
  });
  return (
    <section className={cn('section-format-lessons', themeColorCn)}>
      <Container className="section-format-lessons__container">
        <div className="section-format-lessons__heading-content ta-c">
          <h2 className="section-format-lessons__heading">{heading}</h2>
          {rich_text ? (
            <p
              className="section-format-lessons__subheading-text"
              dangerouslySetInnerHTML={{ __html: rich_text }}
            />
          ) : null}
        </div>
        {lessons && lessons.length ? (
          <div className="education-cards-list">
            {lessons.map((lesson) => (
              <div className="education-cards-list__col" key={lesson._id}>
                <LessonCard {...lesson} />
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

export default SectionFormatLessons;
