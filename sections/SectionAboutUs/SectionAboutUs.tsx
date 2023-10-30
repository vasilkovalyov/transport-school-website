import Image from 'next/image';
import { Container } from '@/components/theme';
import { SectionAboutUsProps } from './SectionAboutUs.type';

function SectionAboutUs({ image, heading, rich_text }: SectionAboutUsProps) {
  return (
    <section className="section-about-us">
      <Container className="section-about-us__container">
        <div className="section-about-us__text-content">
          <h2 className="section-about-us__heading">{heading}</h2>
          {rich_text ? (
            <div
              className="section-about-us__text"
              dangerouslySetInnerHTML={{ __html: rich_text }}
            ></div>
          ) : null}
        </div>
        {image ? (
          <div className="section-about-us__image">
            <Image src={image} alt={heading} width={700} height={600} />
          </div>
        ) : null}
      </Container>
    </section>
  );
}

export default SectionAboutUs;
