import Image from 'next/image';
import { SectionWhoTeachProps } from './SectionWhoTeach.type';
import { Container } from '@/components/theme';

function SectionWhoTeach({
  image,
  heading,
  teacherName,
  rich_text,
}: SectionWhoTeachProps) {
  return (
    <section className="section-who-teach">
      <Container className="section-who-teach__container">
        <h2 className="section-who-teach__heading ta-c">{heading}</h2>
        <div className="section-who-teach__body">
          <div className="section-who-teach__text-content">
            <h3 className="section-who-teach__teacher-name font-medium">
              {teacherName}
            </h3>
            {rich_text ? (
              <div dangerouslySetInnerHTML={{ __html: rich_text }} />
            ) : null}
          </div>
          {image ? (
            <div className="section-who-teach__image">
              <Image {...image} src={image.src} alt={image.alt} />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export default SectionWhoTeach;
