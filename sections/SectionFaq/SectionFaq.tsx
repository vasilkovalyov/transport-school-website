import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/theme';
import { SectionFaqProps } from './SectionFaq.type';

function SectionFaq({ heading, image, questions }: SectionFaqProps) {
  return (
    <section className="section-faq">
      <Container>
        <h2 className="section-faq__heading">{heading}</h2>
        <div className="section-faq__body">
          <div className="section-faq__text-content">
            {questions &&
              questions.map((item) => (
                <React.Fragment key={item._id}>
                  <h3>{item.heading}</h3>
                  <div dangerouslySetInnerHTML={{ __html: item.text }}></div>
                </React.Fragment>
              ))}
          </div>
          <div className="section-faq__image">
            <Image {...image} src={image.src} alt={image.alt} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionFaq;
