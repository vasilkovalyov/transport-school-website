import { SectionContactsProps } from './SectionContacts.type';
import { Container } from '@/components/theme';

function SectionContacts({
  heading,
  address,
  email,
  phone,
  map_url,
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
        {map_url ? (
          <div className="section-contact__image-map">
            <iframe
              src={map_url}
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

export default SectionContacts;
