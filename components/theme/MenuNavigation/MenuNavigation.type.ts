export type MenuNavigationProps = {
  menu: MenuItemProps[];
};

export type MenuItemProps = {
  id: string;
  path: string;
  name: string;
  submenu?: MenuItemProps[];
  currentPath?: string;
};
