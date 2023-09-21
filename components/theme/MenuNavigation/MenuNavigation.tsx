'use client';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import cn from 'classnames';
import { MenuNavigationProps, MenuItemProps } from './MenuNavigation.type';

function MenuItem({ id, name, path, submenu, currentPath }: MenuItemProps) {
  return (
    <li
      className={cn({
        'has-children': submenu?.length,
      })}
    >
      <Link
        href={path}
        className={cn({
          active: currentPath === path,
        })}
      >
        {name}
      </Link>
      {submenu && submenu.length ? (
        <ul>
          {submenu.map((subItem) => (
            <MenuItem key={subItem.name} {...subItem} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

function MenuNavigation({ menu }: MenuNavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="header__navigation">
      <ul className="header__navigation-list">
        {menu.map((item) => (
          <MenuItem key={item.id} {...item} currentPath={pathname} />
        ))}
      </ul>
    </nav>
  );
}

export default MenuNavigation;
