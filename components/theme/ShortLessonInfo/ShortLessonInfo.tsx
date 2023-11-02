import dayjs from 'dayjs';
import { lessonType, lessonsGroup, shortDayNames } from '@/utils/common';
import { ShortLessonInfoProps } from './ShortLessonInfo.type';

export default function ShortLessonInfo({
  date_start_event,
  days,
  heading,
  max_people,
  students,
  time_start,
  time_end,
  type_group,
  type_lesson,
}: ShortLessonInfoProps) {
  return (
    <ul className="lesson-short-info">
      <li className="lesson-short-info__heading">
        Урок - <strong>{heading}</strong>
      </li>
      <li className="lesson-short-info__type-group">
        Группа - <strong>{lessonsGroup[type_group]}</strong>
      </li>
      <li className="lesson-short-info__date">
        Дата урока -{' '}
        <strong>{dayjs(date_start_event).format('DD MMM YYYY')}</strong>
      </li>
      <li className="lesson-short-info__time">
        Время урока -{' '}
        <strong>
          {time_start} - {time_end}
        </strong>
      </li>
      <li className="lesson-short-info__students">
        Студенты -{' '}
        <strong>
          {students} / {max_people}
        </strong>
      </li>
      <li className="lesson-short-info__type-lessons">
        Тип урока - <strong>{lessonType[type_lesson]}</strong>
      </li>
      <li className="lesson-short-info__days">
        Дни уроков -{' '}
        <strong>
          {days.map((day, index) => {
            return `${shortDayNames[day].name}${
              days.length - 1 !== index ? ', ' : ''
            }`;
          })}
        </strong>
      </li>
    </ul>
  );
}
