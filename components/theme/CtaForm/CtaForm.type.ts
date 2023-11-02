import { ShortLessonInfoProps } from '../ShortLessonInfo/ShortLessonInfo.type';

export type CtaFormFieldsType = {
  name: string;
  email: string;
  phone: string;
  group: string;
};

export type LessonGroupType = ShortLessonInfoProps;

export type LessonsSelectOption = {
  _id: string;
  name: string;
};
