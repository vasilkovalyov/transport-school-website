import { SectionCtaProps } from './SectionCta.type';
import { Button, Container } from '@/components/theme';

function SectionCta({
  heading,
  use_link_to_contact_page,
  use_phone_cta,
  phone,
}: SectionCtaProps) {
  return (
    <section className="section-cta-questions ta-c">
      <Container className="section-cta-questions__container">
        <h2 className="section-cta-questions__heading">{heading}</h2>
        <div className="section-cta-questions__action">
          {use_link_to_contact_page ? (
            <Button href="/contact" className="section-cta-questions__btn">
              ЗАПИСАТЬСЯ НА КУРС
            </Button>
          ) : null}
          {use_phone_cta && phone ? (
            <Button
              href={`tel:${phone}`}
              className="section-cta-questions__btn"
              variant="secondary"
            >
              ПОЗВОНИТЬ {phone}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export default SectionCta;
