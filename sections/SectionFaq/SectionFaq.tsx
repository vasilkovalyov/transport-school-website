import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/theme';
import { SectionFaqProps } from './SectionFaq.type';

function SectionFaq({ heading, image, list_faq }: SectionFaqProps) {
  return (
    <section className="section-faq">
      <Container>
        <h2 className="section-faq__heading">{heading}</h2>
        <div className="section-faq__body">
          <div className="section-faq__text-content">
            {list_faq?.length &&
              list_faq.map((item) => (
                <React.Fragment key={item._id}>
                  <h3>{item.heading}</h3>
                  {item.rich_text ? (
                    <div dangerouslySetInnerHTML={{ __html: item.rich_text }} />
                  ) : null}
                </React.Fragment>
              ))}
          </div>
          {image ? (
            <div className="section-faq__image">
              <Image src={image} alt={heading} width={450} height={540} />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export default SectionFaq;
