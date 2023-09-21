import Image from 'next/image';
import { ReviewPersonProps } from './ReviewPerson.type';

function ReviewPerson({ image, text, personName, rating }: ReviewPersonProps) {
  return (
    <div className="review base-shadow ta-c">
      <div className="review__image">
        <Image {...image} src={image.src} alt={image.alt} />
      </div>
      <div className="review__text">
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <div className="review__bottom">
        <p className="review__author font-medium">{personName}</p>
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
