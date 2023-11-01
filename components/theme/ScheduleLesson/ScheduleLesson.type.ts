export type ScheduleLessonProps = {
  _id: string;
  heading: string;
  type_group: string;
  type_lesson: string;
  days: number[];
  time_start: string;
  time_end: string;
  date_start_event: string;
  createdAt: string;
  students: number;
  max_people: number;
};
