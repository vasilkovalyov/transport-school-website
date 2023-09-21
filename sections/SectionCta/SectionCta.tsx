import { SectionCtaProps } from './SectionCta.type';
import { Button, Container } from '@/components/theme';

function SectionCta({ heading }: SectionCtaProps) {
  return (
    <section className="section-cta-questions ta-c">
      <Container className="section-cta-questions__container">
        <h2 className="section-cta-questions__heading">{heading}</h2>
        <div className="section-cta-questions__action">
          <Button href="/" className="section-cta-questions__btn">
            ЗАПИСАТЬСЯ НА КУРС
          </Button>
          <Button
            href="tel:+1243323454"
            className="section-cta-questions__btn"
            variant="secondary"
          >
            ПОЗВОНИТЬ +1 (347) 310-7483
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default SectionCta;
