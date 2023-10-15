import cn from 'classnames';

import { SectionFormatLessonsProps } from './SectionFormatLessons.type';
import { ServiceCard, Container } from '@/components/theme';

function SectionFormatLessons({
  heading,
  rich_text,
  services,
  theme_color = 'light',
}: SectionFormatLessonsProps) {
  const themeColorCn = cn({
    'section-format-lessons--light': theme_color === 'light',
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
        {services && services.length ? (
          <div className="service-cards-list">
            {services.map((service) => (
              <div className="service-cards-list__col" key={service._id}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

export default SectionFormatLessons;
