import Image from 'next/image';
import { SectionHeroProps } from './SectionHero.type';
import { Container, Button } from '@/components/theme';

function SectionHero({
  image,
  heading,
  subheading,
  use_link_to_contact_page,
  use_phone_cta,
}: SectionHeroProps) {
  return (
    <section className="section-hero">
      <div className="section-hero__bg section-hero__bg--overlay">
        {image ? (
          <Image
            src={image}
            alt={heading}
            priority
            fill
            className="section-hero__bg-image"
          />
        ) : null}
      </div>
      <Container className="section-hero__container">
        <div className="section-hero__text-content ta-c text-light">
          <h1 className="section-hero__heading">{heading}</h1>
          {subheading ? (
            <p className="section-hero__subheading">{subheading}</p>
          ) : null}
        </div>
        <div className="section-hero__action">
          {use_link_to_contact_page ? (
            <Button href="/contact" className="section-hero__btn">
              ЗАПИСАТЬСЯ НА КУРС
            </Button>
          ) : null}
          {use_phone_cta ? (
            <Button
              href="/about-course"
              className="section-hero__btn"
              variant="secondary"
            >
              УЗНАТЬ БОЛЬШЕ О КУРСЕ
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export default SectionHero;
