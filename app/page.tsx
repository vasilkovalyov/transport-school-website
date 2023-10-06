import type { Metadata } from 'next';

import PageServices from '@/services/home-service';

import { renderBlocks } from '@/sections/blocks';

async function getData() {
  const service = new PageServices();
  const response = await service.getHome();
  return response.data;
}

export const generateMetadata = (): Metadata => {
  return {
    title: `Home`,
    description: 'Description',
  };
};

export default async function Home() {
  const data = await getData();

  return (
    <>
      {data.body[0] !== null ? renderBlocks(data.body) : null}
      {/* <SectionHero
        image={{
          src: '/images/hero-image-1.jpg',
          alt: 'hero image',
          fill: true,
        }}
        heading={data.body[0].heading}
        subheading={data.body[0].subheading}
        use_link_to_contact_page={data.body[0].use_link_to_contact_page}
        use_phone_cta={data.body[0].use_phone_cta}
      /> */}
      {/* <SectionHero
        image={{
          src: '/images/hero-image-1.jpg',
          alt: 'hero image',
          fill: true,
        }}
        heading={data.heading}
        subheading={data.subheading}
        use_link_to_contact_page={data.use_link_to_contact_page}
        use_phone_cta={data.use_phone_cta}
      />
      <SectionAboutUs
        heading="Кто мы?"
        text={`<p>В течение трех удивительных лет наша компания стала сверкающей жемчужиной на пути личностного и профессионального развития. Мы являемся пионерами в области обучения кархолингу - искусства, которое преображает обыденные слова и жесты в мощные инструменты эмоциональной связи и влияния.</p>
      <p>Мы приглашаем вас погрузиться в захватывающий мир кархолинга вместе с нами. Наши эксперты, с богатым опытом и страстью к этому искусству, помогут вам научиться раскрывать свой потенциал и взаимодействовать с окружающими на новом уровне. Наша трехлетняя история полна преуспевающих студентов, их успехов в области коммуникации и влияния, что служит неоспоримым свидетельством нашей эффективности.</p>
      <p>Давайте вместе создадим светлое будущее, в котором кархолинг станет вашим верным спутником на пути к достижению великих вершин. Добро пожаловать в увлекательный мир обучения кархолингу с нами!</p>`}
        image={{
          src: '/images/about-us-img.png',
          alt: 'about us image',
          width: 457,
          height: 536,
        }}
      />
      <SectionAboutCourse
        heading="Про курс"
        text={`<p>Наш курс обучения предназначен для частных предпренимателей, которых хотят открыть свой кахолинговый бизнес в США. Мы в короткий срок и очень подробно обучим предпринимателя всем тонкостям открытия бизнеса по дальнобойным перевозкам авто, углубимся в особенности работы водителя, специфику  для коммерческих перевозок и узнаем детально о докуметах и департаментах, которые необходимы для начала бизнеса.</p>
      <p>Так же мы предоставляем обучение для водителй, которых хотят изменить свой уровень дохода. Transport Business School  обеспечивает всестороннюю подготовку к профессиональной деятельности на дорогах. Студенты осваивают навыки безопасного и эффективного дальнобойного вождения, а также получают необходимые знания о правилах и регуляциях, способствующих успешной карьере в данной области.</p>
      <p>Максимально гибкая система подачи информации составляет от 1 до 5 дней, что позволяет пройти обучение в зависимости от вашей потребности и получить быстрый результат в короткие сроки.</p>`}
      />
      <SectionFormatLessons
        heading="Форматы обучения"
        subheading={`В курсе будет пак уроков, благодаря которым вы выйдете на доход минимум <strong><span class="text-primary">1200$</span> в неделю</strong>`}
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
      />
      <SectionFaq
        heading="Ответы на частые вопросы"
        image={{
          src: '/images/note pic.png',
          alt: 'note picture',
          width: 450,
          height: 648,
        }}
        questions={[
          {
            _id: '1',
            heading: 'Где и как проходит обучение?',
            text: `<p>Обучение проходит <strong><i>в Бруклине</i></strong>, штат <strong><i>Нью-Йорк.</i></strong> длительностью <strong><i>3-5 дней.</i></strong> Формат обучения очный. Начало обучения в зависимости от выбранного курса.</p>`,
          },
          {
            _id: '2',
            heading: 'Кто будет обучать?',
            text: `<p>Наш спикер - в прошлом опытный водитель, а на данный момент -  бизнесмен, который в короткий срок обучит вас всем тонкостям организации и ведения бизнеса в сфере кархолинг.</p>`,
          },
          {
            _id: '3',
            heading: 'Что нужно брать с собой?',
            text: `<p><strong><i>Driver License и хорошее настроение!</i></strong> А блокноты и ручки будут презентом от нас на первом занятии.</p>`,
          },
        ]}
      />
      <SectionAchivments
        heading="Наши достижения в цифрах"
        subheading="Реальные результаты говорят больше, нежели любое описание"
        listAchivments={[
          {
            _id: '1',
            heading: '1143',
            text: `выпускников нашей </br> школы за 3 года`,
          },
          {
            _id: '2',
            heading: '1023k$',
            text: `заработали суммарно </br> наши выпускники`,
          },
          {
            _id: '3',
            heading: '307',
            text: `успешно организованных и процветающих компаний`,
          },
        ]}
      /> */}
    </>
  );
}
