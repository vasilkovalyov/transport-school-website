import Image from 'next/image';
import { SectionOurBenefitsProps } from './SectionOurBenefits.type';
import { Container } from '@/components/theme';

function SectionOurBenefits({
  image,
  heading,
  rich_text,
}: SectionOurBenefitsProps) {
  return (
    <section className="section-our-benefits">
      <div className="section-our-benefits__bg">
        {image ? (
          <Image
            src={image}
            alt={heading}
            fill
            className="section-our-benefits__bg-image"
          />
        ) : null}
      </div>
      <Container className="section-our-benefits__container">
        <div className="section-our-benefits__body">
          <h2 className="section-our-benefits__heading">{heading}</h2>
          {rich_text ? (
            <div dangerouslySetInnerHTML={{ __html: rich_text }} />
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export default SectionOurBenefits;
