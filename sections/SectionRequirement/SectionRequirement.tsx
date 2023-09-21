import { RequirementCard, Container } from '@/components/theme';
import { SectionRequirementProps } from './SectionRequirement.type';

function SectionRequirement({
  heading,
  listRequirements,
}: SectionRequirementProps) {
  return (
    <section className="section-requirement">
      <Container className="section-requirement__container">
        <h2 className="section-requirement__heading ta-c">{heading}</h2>
        {listRequirements && listRequirements.length ? (
          <div className="requirement-list">
            {listRequirements.map((requirementItem) => (
              <div key={requirementItem._id} className="requirement-list__col">
                <RequirementCard {...requirementItem} />
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

export default SectionRequirement;
