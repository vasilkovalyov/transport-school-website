import { Metadata } from 'next';

import {
  SectionHero,
  SectionContacts,
  SectionScheduleLessons,
} from '@/sections';

export const metadata: Metadata = {
  title: 'Schedule page',
  description: 'schedule description',
};

export default function Schedule() {
  return (
    <>
      <SectionHero
        image={{
          src: '/images/hero-schedule-img.jpg',
          alt: 'hero image',
          fill: true,
        }}
        heading="Расписание занятий"
        subheading="Мы предлагаем теоретические, практические или комплексные
    обучающие программы в форме интенсива. У нас вы приобретёте все
    необходимые знания и навыки для построения собственного бизенеса
    по кархолингу в США"
      />

      <SectionScheduleLessons
        heading="Расписание занятий"
        listScheduleLessons={[
          {
            _id: '1',
            heading: 'PLUS',
            subheading: 'Вечерняя группа',
            listInfo: ['Оффлайн', 'Пн, Ср, Пт', '7 p.m. - 8 p.m.'],
            startDate: '2023-10-09',
            currentCountPersons: 17,
            totalCountPersons: 20,
          },
          {
            _id: '2',
            heading: 'STANDART',
            subheading: 'Вечерняя группа',
            listInfo: ['Оффлайн', 'Пн, Ср, Пт', '7 p.m. - 8 p.m.'],
            startDate: '2023-10-02',
            currentCountPersons: 17,
            totalCountPersons: 20,
          },
          {
            _id: '3',
            heading: 'PRACTIC',
            subheading: 'Вечерняя группа',
            listInfo: ['Оффлайн', 'Пн, Ср, Пт', '7 p.m. - 8 p.m.'],
            startDate: '2023-11-14',
            currentCountPersons: 17,
            totalCountPersons: 20,
          },
        ]}
      />

      <SectionContacts
        heading="Контакты"
        email="test.mail@gmail.com"
        address="3524 SILVERSIDE RD STE 35B WILMINGTON DE 19810"
        phone="+1 (347) 310-7483"
      />
    </>
  );
}
