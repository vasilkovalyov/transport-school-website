import Image from 'next/image';
import { SectionWhoTeachProps } from './SectionWhoTeach.type';
import { Container } from '@/components/theme';

function SectionWhoTeach({
  image,
  heading,
  teacherName,
  text,
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
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
          <div className="section-who-teach__image">
            <Image {...image} src={image.src} alt={image.alt} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionWhoTeach;
