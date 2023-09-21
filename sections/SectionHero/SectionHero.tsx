import Image from 'next/image';
import { SectionHeroProps } from './SectionHero.type';
import { Container, Button } from '@/components/theme';

function SectionHero({ image, heading, subheading }: SectionHeroProps) {
  return (
    <section className="section-hero">
      <div className="section-hero__bg section-hero__bg--overlay">
        <Image
          {...image}
          src={image.src}
          alt={image.alt}
          className="section-hero__bg-image"
        />
      </div>
      <Container className="section-hero__container">
        <div className="section-hero__text-content ta-c text-light">
          <h1 className="section-hero__heading">{heading}</h1>
          {subheading ? (
            <p className="section-hero__subheading">{subheading}</p>
          ) : null}
        </div>
        <div className="section-hero__action">
          <Button href="/" className="section-hero__btn">
            ЗАПИСАТЬСЯ НА КУРС
          </Button>
          <Button href="/" className="section-hero__btn" variant="secondary">
            УЗНАТЬ БОЛЬШЕ О КУРСЕ
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default SectionHero;
