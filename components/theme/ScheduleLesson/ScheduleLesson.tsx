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
  days,
  time_end,
  time_start,
  type_group,
  type_lesson,
  students = 0,
  max_people,
}: ScheduleLessonProps) {
  const [year, month, day] = date_start_event.split('-');

  const getDays = (days: number[]) => {
    if (days.length === 2) {
      return `${shortDayNames[days[0]].name} - ${shortDayNames[days[1]].name}`;
    }
    let daysStr = '';
    days.forEach((day) => {
      daysStr += shortDayNames[day].name + ', ';
    });
    return daysStr;
  };

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
              <li>{getDays(days)}</li>
              <li>
                {time_start} - {time_end}
              </li>
            </ul>
            {max_people ? (
              <p className="schedule-lesson__registration-count">
                <strong>
                  Занято мест: {students} / {max_people}
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
