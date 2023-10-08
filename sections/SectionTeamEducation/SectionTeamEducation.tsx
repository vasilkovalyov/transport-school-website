import { TeamEducatonCard, Container, Button } from '@/components/theme';
import { SectionTeamEducationProps } from './SectionTeamEducation.type';

function SectionTeamEducation({
  heading,
  subheading,
  education_list,
}: SectionTeamEducationProps) {
  return (
    <section className="section-team-education">
      <Container className="section-team-education__container">
        <div className="section-team-education__heading-content ta-c">
          <h2 className="section-team-education__heading">{heading}</h2>
          {subheading ? <p>{subheading}</p> : null}
        </div>
        {education_list && education_list.length ? (
          <>
            <div className="team-education-list">
              {education_list.map((educationCard) => (
                <div
                  key={educationCard._id}
                  className="team-education-list__col"
                >
                  <TeamEducatonCard {...educationCard} />
                </div>
              ))}
            </div>
            <div className="section-team-education__action">
              <Button href="/">ЗАПИСАТЬСЯ КОМАНДОЙ</Button>
            </div>
          </>
        ) : null}
      </Container>
    </section>
  );
}

export default SectionTeamEducation;
