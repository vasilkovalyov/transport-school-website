import { Button } from '..';
import { ScheduleLessonProps } from './ScheduleLesson.type';

const getLastsDayToEvent = (startDate: string): number => {
  const lastsDaysTime = new Date(startDate).getTime() - new Date().getTime();
  return Math.ceil(lastsDaysTime / (1000 * 3600 * 24));
};

function ScheduleLesson({
  heading,
  subheading,
  listInfo,
  startDate,
  currentCountPersons,
  totalCountPersons,
}: ScheduleLessonProps) {
  const [year, month, day] = startDate.split('-');

  return (
    <div className="schedule-lesson">
      <div className="schedule-lesson__body base-shadow">
        <div className="schedule-lesson__body-container">
          <div className="schedule-lesson__left">
            <h3 className="schedule-lesson__heading">{heading}</h3>
            <p className="schedule-lesson__subheading">{subheading}</p>
            {listInfo && listInfo.length ? (
              <ul className="schedule-lesson__list-info">
                {listInfo.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : null}
            <p className="schedule-lesson__registration-count">
              <strong>
                Занято мест: {currentCountPersons}/{totalCountPersons}
              </strong>
            </p>
          </div>
          <div className="schedule-lesson__right">
            <p className="schedule-lesson__date font-bold">
              {day}/{month}/{year}
            </p>
            <p className="schedule-lesson__days font-bold">
              {getLastsDayToEvent(startDate)} дней
            </p>
          </div>
        </div>
      </div>
      <div className="schedule-lesson__action">
        <Button href="#">ЗАПИСАТЬСЯ</Button>
      </div>
    </div>
  );
}

export default ScheduleLesson;
