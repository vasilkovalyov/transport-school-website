import Carousel from '@/components/theme/Carousel/Carousel';
import { SectionReviewProps } from './SectionReview.type';
import { ReviewPerson, Container } from '@/components/theme';

function SectionReview({ heading, reviews }: SectionReviewProps) {
  return (
    <section className="section-review">
      <Container className="section-review__container">
        <h2 className="section-review__heading ta-c">{heading}</h2>
        {reviews && (
          <Carousel
            className="review-carousel"
            settings={{
              spaceBetween: 40,
            }}
            slides={reviews.map((review) => (
              <ReviewPerson key={review._id} {...review} />
            ))}
          />
        )}
      </Container>
    </section>
  );
}

export default SectionReview;
