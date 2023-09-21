import Image from 'next/image';
import { Container } from '@/components/theme';
import { SectionAboutUsProps } from './SectionAboutUs.type';

function SectionAboutUs({ image, heading, text }: SectionAboutUsProps) {
  return (
    <section className="section-about-us">
      <Container className="section-about-us__container">
        <div className="section-about-us__text-content">
          <h2 className="section-about-us__heading">{heading}</h2>
          <div
            className="section-about-us__text"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        </div>
        <div className="section-about-us__image">
          <Image {...image} src={image.src} alt={image.alt} />
        </div>
      </Container>
    </section>
  );
}

export default SectionAboutUs;
