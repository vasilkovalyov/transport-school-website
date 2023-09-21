import type { Metadata } from 'next';

import { SectionContacts, SectionCta, SectionContactForm } from '@/sections';

export const metadata: Metadata = {
  title: 'Contact page',
  description: 'contact description',
};

export default function Contact() {
  return (
    <>
      <SectionContactForm
        heading="Записаться в автошколу"
        text="Мы приглашаем вас погрузиться в захватывающий мир кархолинга вместе с нами. Наши эксперты, с богатым опытом и страстью к этому искусству, помогут вам научиться раскрывать свой потенциал и взаимодействовать с окружающими на новом уровне. Наша трехлетняя история полна преуспевающих студентов, их успехов в области коммуникации и влияния, что служит неоспоримым свидетельством нашей эффективности."
        formHeading="Заполните форму, чтобы мы связались с вами для уточнения деталей."
        requireMessage="Отправляя форму, я соглашаюсь с правилами использования сайта и политикой конфиденциальности, а также даю согласие на обработку моих данных. Все данные защищены и используются только для связи с вами."
        image={{
          src: '/images/decor-image-2.png',
          alt: 'Записаться в автошколу',
        }}
      />
      <SectionContacts
        heading="Контакты"
        email="test.mail@gmail.com"
        address="3524 SILVERSIDE RD STE 35B WILMINGTON DE 19810"
        phone="+1 (347) 310-7483"
      />
      <SectionCta heading="Остались вопросы? Мы всегда на связи!" />
    </>
  );
}
