import Image from 'next/image';
import { SectionOurBenefits } from './SectionOurBenefits.type';
import { Container } from '@/components/theme';

function SectionOurBenefits({ image, heading, listInfo }: SectionOurBenefits) {
  return (
    <section className="section-our-benefits">
      <div className="section-our-benefits__bg">
        <Image
          {...image}
          src={image.src}
          alt={image.alt}
          className="section-our-benefits__bg-image"
        />
      </div>
      <Container className="section-our-benefits__container">
        <div className="section-our-benefits__body">
          <h2 className="section-our-benefits__heading">{heading}</h2>
          {listInfo && listInfo.length ? (
            <ul>
              {listInfo.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export default SectionOurBenefits;
