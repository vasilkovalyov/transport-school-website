import { Button } from '..';
import { ScheduleLessonProps } from './ScheduleLesson.type';
import {
  lessonsGroup,
  lessonType,
  shortDayNames,
} from './ScheduleLesson.utils';

const getLastsDayToEvent = (startDate: string): number => {
  const lastsDaysTime = new Date(startDate).getTime() - new Date().getTime();
  return Math.ceil(lastsDaysTime / (1000 * 3600 * 24));
};

function ScheduleLesson({
  heading,
  date_start_event,
  day_end,
  day_start,
  time_end,
  time_start,
  type_group,
  type_lesson,
  current_count_persons,
  total_count_persons,
}: ScheduleLessonProps) {
  const [year, month, day] = date_start_event.split('-');

  return (
    <div className="schedule-lesson">
      <div className="schedule-lesson__body base-shadow">
        <div className="schedule-lesson__body-container">
          <div className="schedule-lesson__left">
            <h3 className="schedule-lesson__heading">{heading}</h3>
            <p className="schedule-lesson__subheading">
              {lessonsGroup[type_group]}
            </p>
            <ul className="schedule-lesson__list-info">
              <li>{lessonType[type_lesson]}</li>
              <li>
                {shortDayNames[parseInt(day_start)].name}-
                {shortDayNames[parseInt(day_end)].name}
              </li>
              <li>
                {time_start} - {time_end}
              </li>
            </ul>
            {total_count_persons ? (
              <p className="schedule-lesson__registration-count">
                <strong>
                  Занято мест: {current_count_persons}/{total_count_persons}
                </strong>
              </p>
            ) : null}
          </div>
          <div className="schedule-lesson__right">
            <p className="schedule-lesson__date font-bold">
              {day}/{month}/{year}
            </p>
            <p className="schedule-lesson__days font-bold">
              {getLastsDayToEvent(date_start_event)} дней
            </p>
          </div>
        </div>
      </div>
      <div className="schedule-lesson__action">
        <Button href="/contact">ЗАПИСАТЬСЯ</Button>
      </div>
    </div>
  );
}

export default ScheduleLesson;
