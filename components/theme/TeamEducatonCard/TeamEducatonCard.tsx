import { TeamEducatonCardProps } from './TeamEducatonCard.type';

function TeamEducatonCard({ heading, type, discount }: TeamEducatonCardProps) {
  return (
    <div className="team-education-card ta-c">
      <h5
        className="team-education-card__type"
        dangerouslySetInnerHTML={{ __html: type }}
      />
      <div className="team-education-card__body base-shadow">
        <h5 className="team-education-card__heading">{heading}</h5>
        <p className="team-education-card__price font-bold">{discount}%</p>
      </div>
    </div>
  );
}

export default TeamEducatonCard;
