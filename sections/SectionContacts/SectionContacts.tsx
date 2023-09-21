import { SectionContactsProps } from './SectionContacts.type';
import { Container } from '@/components/theme';

function SectionContacts({
  heading,
  address,
  email,
  phone,
}: SectionContactsProps) {
  return (
    <section className="section-contact">
      <Container className="section-contact__container">
        <h2 className="section-contact__heading ta-c">{heading}</h2>
        <div className="section-contact__body ta-c">
          <div className="section-contact__body-content">
            <a href={`mailto:${email}`} className="section-contact__link">
              {email}
            </a>
            <address className="section-contact__address">{address}</address>
            <a href={`tel:${phone}`} className="section-contact__link">
              {phone}
            </a>
          </div>
        </div>
        <div className="section-contact__image-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.960782163635!2d-75.54706202355773!3d39.807871492470845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fb58dc83cfed%3A0x299e91ccc31af45e!2zMzUyNCBTaWx2ZXJzaWRlIFJkICMzNWIsIFdpbG1pbmd0b24sIERFIDE5ODEwLCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e0!3m2!1suk!2sua!4v1693415676780!5m2!1suk!2sua"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </section>
  );
}

export default SectionContacts;
