import cn from 'classnames';
import { SectionAchivmentsProps } from './SectionAchivments.type';
import { Container } from '@/components/theme';

function SectionAchivments({
  heading,
  subheading,
  list_achivments,
}: SectionAchivmentsProps) {
  return (
    <section className="section-achivment">
      <Container>
        <div className="section-achivment__heading-content ta-c">
          <h2>{heading}</h2>
          {subheading ? (
            <p>
              <i>{subheading}</i>
            </p>
          ) : null}
        </div>
        {list_achivments && list_achivments.length ? (
          <div className="section-achivment__body">
            {list_achivments.map((item, index) => (
              <div key={item._id} className="achivment ta-c">
                <p
                  className={cn('achivment__heading font-bold', {
                    'achivment__heading--large': index === 0,
                    'achivment__heading--medium': index === 1,
                    'achivment__heading--small': index === 2,
                  })}
                >
                  {item.heading}
                </p>
                <p
                  className="achivment__text font-bold"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

export default SectionAchivments;
