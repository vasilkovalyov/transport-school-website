import { Metadata } from 'next';

import {
  SectionHero,
  SectionFormatLessons,
  SectionContacts,
  SectionTeamEducation,
  SectionRequirement,
} from '@/sections';

export const metadata: Metadata = {
  title: 'Price page',
  description: 'price description',
};

export default function Price() {
  return (
    <>
      <SectionHero
        image={{
          src: '/images/hero-image-3.jpg',
          alt: 'hero image',
          fill: true,
        }}
        heading="Цены на наши курсы"
        subheading="Мы предлагаем теоретические, практические или комплексные обучающие программы в форме интенсива. У нас вы приобретёте все необходимые знания и навыки для получения работы дальнобойщика в США"
      />
      <SectionFormatLessons
        heading="Цены на наши услуги"
        subheading={`Мы предлагаем практические занятия в Нью-Йорке для водителей траков`}
        lessons={[
          {
            _id: '1',
            image: {
              src: '/images/auto-1.png',
              alt: 'STANDART',
              width: 193,
              height: 150,
            },
            heading: 'STANDART',
            topListInfo: [
              'Теоретические занятия',
              'Вопрос-ответ с наставником',
              '3 дня обучения',
              '6 академ-часов',
            ],
            price: '1800',
          },
          {
            _id: '2',
            image: {
              src: '/images/auto-1.png',
              alt: 'PLUS',
              width: 193,
              height: 166,
            },
            heading: 'PLUS',
            topListInfo: [
              'Теоретические занятия',
              'Вопрос-ответ с наставником',
            ],
            bottomListInfo: [
              'Практические занятия',
              'Помощь в регистрации своей компании',
              '5 дней обучения',
              '7,5 академ-часов',
            ],
            price: '2000',
          },
          {
            _id: '3',
            image: {
              src: '/images/auto-1.png',
              alt: 'PRACTIC',
              width: 135,
              height: 135,
            },
            heading: 'PRACTIC',
            topListInfo: ['Вопрос-ответ с наставником'],
            bottomListInfo: [
              'Практические занятия',
              '2 дня обучения',
              '3 академ-часов',
            ],
            price: '1000',
          },
        ]}
        themeColor="light"
      />

      <SectionTeamEducation
        heading="Обучение командами"
        subheading="Получите скидку на курс, если хотите обучить свою команду"
        listEducations={[
          {
            _id: '1',
            discount: '-10%',
            heading: 'От трех персон',
            type: 'STANDART',
          },
          {
            _id: '2',
            discount: '-15%',
            heading: 'От трех персон',
            type: `<i>STANDART</i>`,
          },
        ]}
      />
      <SectionRequirement
        heading="Требования к нашим ученикам"
        listRequirements={[
          {
            _id: '1',
            heading: 'Водительское удостоверение',
            image: {
              src: '/images/requirement-logo-1.png',
              alt: 'Водительское удостоверение',
            },
            text: 'Водительское удостоверениеНаличие действующего водительского удостоверения является обязательным. Требуется коммерческое (CDL) водительское удостоверение',
          },
          {
            _id: '2',
            heading: 'Возраст от 18+',
            image: {
              src: '/images/requirement-logo-2.png',
              alt: 'Возраст от 18+',
            },
            text: ' Для получения CDL в разных штатах могут быть разные возрастные ограничения, обычно не моложе 18-21 лет, в зависимости от типа транспортного средства и маршрута',
          },
          {
            _id: '3',
            heading: 'Разрешение на работу',
            image: {
              src: '/images/requirement-logo-3.png',
              alt: 'Разрешение на работу',
            },
            text: 'Для иностранных студентов может потребоваться подтверждение статуса резидента или разрешения на работу',
          },
          {
            _id: '4',
            heading: 'Медицинская аттестация',
            image: {
              src: '/images/requirement-logo-4.png',
              alt: 'Медицинская аттестация',
            },
            text: 'Пригодность к дальнобойному вождению определяется медицинской аттестацией, которая может включать физический осмотр и тесты',
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
