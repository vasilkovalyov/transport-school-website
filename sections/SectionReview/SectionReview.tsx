import { SectionReviewProps } from './SectionReview.type';
import { ReviewPerson, Container } from '@/components/theme';

function SectionReview({ heading, listReviews }: SectionReviewProps) {
  return (
    <section className="section-review">
      <Container className="section-review__container">
        <h2 className="section-review__heading ta-c">{heading}</h2>
        <div className="review-carousel swiper js-review-carousel">
          <div className="swiper-wrapper">
            {listReviews &&
              listReviews.map((review) => (
                <div key={review._id} className="swiper-slide">
                  <ReviewPerson {...review} />
                </div>
              ))}
          </div>
          <div className="simple-slider__controls">
            <div className="container">
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionReview;
