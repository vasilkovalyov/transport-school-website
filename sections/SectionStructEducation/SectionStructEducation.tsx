import { SectionStructEducationProps } from './SectionStructEducation.type';
import { Container } from '@/components/theme';

function SectionStructEducation({
  heading,
  struct_education_list,
}: SectionStructEducationProps) {
  return (
    <section className="section-struct-education">
      <Container className="section-struct-education__container">
        <h2 className="section-struct-education__heading">{heading}</h2>
        {struct_education_list && struct_education_list.length ? (
          <div className="section-struct-education__grid">
            {struct_education_list.map((item) => (
              <div key={item._id} className="section-struct-education__course">
                <h3 className="section-struct-education__course-heading">
                  {item.heading}
                </h3>
                <div dangerouslySetInnerHTML={{ __html: item.rich_text }} />

                {/* {item.list && item.list.length ? (
                  <ul className="section-struct-education__course-list">
                    {item.list.map((listItem, index) => (
                      <li
                        key={index}
                        className="section-struct-education__course-list-item"
                      >
                        {listItem}
                      </li>
                    ))}
                  </ul>
                ) : null} */}
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

export default SectionStructEducation;
