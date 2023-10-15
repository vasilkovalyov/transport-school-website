export const shortDayNames: {
  number: number;
  name: string;
}[] = [
  {
    number: 0,
    name: 'Пн',
  },
  {
    number: 1,
    name: 'Вт',
  },
  {
    number: 2,
    name: 'Ср',
  },
  {
    number: 3,
    name: 'Чт',
  },
  {
    number: 4,
    name: 'Пт',
  },
  {
    number: 5,
    name: 'Сб',
  },
  {
    number: 6,
    name: 'Вс',
  },
];

export const lessonsGroup: Record<string, string> = {
  morning: 'Утренняя группа',
  midday: 'Дневная группа',
  night: 'Вечерняя группа',
};

export const lessonType: Record<string, string> = {
  online: 'онлайн',
  offline: 'оффлайн',
};
