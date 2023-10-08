import { Container } from '@/components/theme';
import { SectionAboutProps } from './SectionAbout.type';

function SectionAbout({ heading, rich_text }: SectionAboutProps) {
  return (
    <section className="section-about">
      <Container className="section-about__container">
        <div className="section-about__body">
          <div className="section-about__text-content">
            <h2>{heading}</h2>
            {rich_text ? (
              <div dangerouslySetInnerHTML={{ __html: rich_text }} />
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionAbout;
