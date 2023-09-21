import { ScheduleLesson, Container } from '@/components/theme';
import { SectionScheduleLessonsProps } from './SectionScheduleLessons.type';

function SectionScheduleLessons({
  heading,
  listScheduleLessons,
}: SectionScheduleLessonsProps) {
  return (
    <section className="section-schedule-lessons">
      <Container className="section-schedule-lessons__container">
        <h2 className="section-schedule-lessons__heading ta-c">{heading}</h2>
        <div className="section-schedule-lessons__body">
          {listScheduleLessons.map((scheduleLesson) => (
            <ScheduleLesson key={scheduleLesson._id} {...scheduleLesson} />
          ))}
        </div>
        <div
          className="section-schedule-lessons__action ta-c"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <button className="load-more">Загрузить больше</button>
        </div>
      </Container>
    </section>
  );
}

export default SectionScheduleLessons;
