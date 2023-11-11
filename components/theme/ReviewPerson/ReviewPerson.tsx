import Image from 'next/image';
import { ReviewPersonProps } from './ReviewPerson.type';

function ReviewPerson({ image, text, name, rating }: ReviewPersonProps) {
  return (
    <div className="review ta-c">
      {image ? (
        <div className="review__image">
          <Image src={image} alt={name} priority width={80} height={80} />
        </div>
      ) : null}
      <div className="review__text">
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <div className="review__bottom">
        <p className="review__author font-medium">{name}</p>
        <div className="review__rating">
          {Array.from(Array(rating).keys()).map((item) => (
            <span key={item} className="review__rating-item icon-star"></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewPerson;
