import { MenuItemProps } from '../MenuNavigation';

export const menu: MenuItemProps[] = [
  {
    id: '1',
    path: '/',
    name: 'Главная',
  },
  {
    id: '2',
    path: '/about-course',
    name: 'Про курс',
    submenu: [
      {
        id: '2-1',
        path: '/schedule',
        name: 'Расписане',
      },
      {
        id: '2-2',
        path: '/price',
        name: 'Цены',
      },
    ],
  },
  {
    id: '3',
    path: '/blog',
    name: 'Блог',
  },
  {
    id: '4',
    path: '/company',
    name: 'Про нас',
  },
  {
    id: '5',
    path: '/contact',
    name: 'Контакты',
  },
];
