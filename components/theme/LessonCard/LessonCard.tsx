import Image from 'next/image';
import { LessonCardProps } from './LessonCard.type';
import { Button } from '..';

function LessonCard({
  image,
  heading,
  price,
  topListInfo,
  bottomListInfo,
}: LessonCardProps) {
  return (
    <div className="education-card base-shadow ta-c">
      <div className="education-card__image">
        <Image {...image} src={image.src} alt={image.alt} />
      </div>
      <div className="education-card__body">
        <h3 className="education-card__heading">{heading}</h3>
        {topListInfo && topListInfo.length ? (
          <ul className="education-card__list ta-l">
            {topListInfo.map((item, index) => (
              <li key={index} className="education-card__item">
                {item}
              </li>
            ))}
          </ul>
        ) : null}
        {bottomListInfo && bottomListInfo.length ? (
          <ul className="education-card__list ta-l font-normal">
            {bottomListInfo.map((item, index) => (
              <li key={index} className="education-card__item">
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="education-card__action">
        <p className="education-card__price font-bold">{price}$</p>
        <Button href="/">ЗАПИСАТЬСЯ</Button>
      </div>
    </div>
  );
}

export default LessonCard;
