import Image from 'next/image';
import { Container } from '@/components/theme';
import { SectionAboutCourseProps } from './SectionAboutCourse.type';

function SectionAboutCourse({ heading, text }: SectionAboutCourseProps) {
  return (
    <section className="section-about-course">
      <Container className="section-about-course__container ta-c">
        <h2 className="section-about-course__heading">{heading}</h2>
        <div
          className="section-about-course__text-content"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <div className="section-about-course__image">
          <Image
            src="/images/arrow.png"
            alt="arrow image"
            width={165}
            height={165}
          />
        </div>
      </Container>
    </section>
  );
}

export default SectionAboutCourse;
