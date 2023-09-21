import { Container } from '@/components/theme';
import { SectionContactFormProps } from './SectionContactForm.type';
import Image from 'next/image';

function SectionContactForm({
  heading,
  text,
  formHeading,
  image,
  requireMessage,
}: SectionContactFormProps) {
  return (
    <section className="section-contact-form">
      <Container className="container">
        <h3 className="section-contact-form__heading">{heading}</h3>
        <p className="section-contact-form__subheading">{text}</p>
        <p className="section-contact-form__form-title">{formHeading}</p>
        <div className="section-contact-form__body">
          <div className="section-contact-form__form">
            {/* here should be embedded form */}
          </div>
          <div className="section-contact-form__image">
            <Image
              {...image}
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
            />
          </div>
          <p className="section-contact-form__require-message">
            *{requireMessage}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default SectionContactForm;
