import Image from 'next/image';
import { ServiceCardProps } from './ServiceCard.type';
import { Button } from '..';

function ServiceCard({
  image,
  heading,
  price,
  top_list_info,
  bottom_list_info,
}: ServiceCardProps) {
  return (
    <div className="service-card base-shadow ta-c">
      {image ? (
        <div className="service-card__image">
          <Image
            src={image}
            alt={heading}
            priority
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : null}
      <div className="service-card__body">
        <h3 className="service-card__heading">{heading}</h3>
        {top_list_info.length ? (
          <ul className="service-card__list ta-l">
            {top_list_info.map((item) => (
              <li key={item._id} className="service-card__item">
                {item.text}
              </li>
            ))}
          </ul>
        ) : null}
        {bottom_list_info.length ? (
          <ul className="service-card__list ta-l font-normal">
            {bottom_list_info.map((item) => (
              <li key={item._id} className="service-card__item">
                {item.text}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="service-card__action">
        <p className="service-card__price font-bold">{price}$</p>
        <Button href="/contact">ЗАПИСАТЬСЯ</Button>
      </div>
    </div>
  );
}

export default ServiceCard;
