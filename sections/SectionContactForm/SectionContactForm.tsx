import { Container } from '@/components/theme';
import { SectionContactFormProps } from './SectionContactForm.type';
import Image from 'next/image';

function SectionContactForm({
  heading,
  image,
  form_heading,
  require_message,
  rich_text,
}: SectionContactFormProps) {
  return (
    <section className="section-contact-form">
      <Container className="container">
        <h3 className="section-contact-form__heading">{heading}</h3>
        {rich_text && (
          <p className="section-contact-form__subheading">{rich_text}</p>
        )}
        {form_heading && (
          <p className="section-contact-form__form-title">{form_heading}</p>
        )}
        <div className="section-contact-form__body">
          <div className="section-contact-form__form">
            {/* here should be embedded form */}
          </div>
          {image ? (
            <div className="section-contact-form__image">
              <Image
                {...image}
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
              />
            </div>
          ) : null}
          {require_message ? (
            <p className="section-contact-form__require-message">
              *{require_message}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export default SectionContactForm;
