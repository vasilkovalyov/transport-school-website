import Image from 'next/image';
import { RequirementCardProps } from './RequirementCard.type';

function RequirementCard({ image, heading, text }: RequirementCardProps) {
  return (
    <div className="requirement-card ta-c base-shadow">
      {image ? (
        <div className="requirement-card__image">
          <Image
            {...image}
            src={image.src}
            alt={image.alt}
            width={70}
            height={70}
          />
        </div>
      ) : null}
      <h5 className="requirement-card__heading font-light">{heading}</h5>
      {text ? <p className="requirement-card__text">{text}</p> : null}
    </div>
  );
}

export default RequirementCard;
