'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { MenuNavigation } from '../MenuNavigation';
import { menu } from './Header.data';
import { Container } from '../Container';
import HeaderContacts from '../HeaderContacts/HeaderContacts';
import { CommonContactsType } from '@/types/common';

import ContactsService from '@/services/contacts-service';

const service = new ContactsService();

const navActiveCn = 'nav-active';

function Header() {
  const pathname = usePathname();
  const [contacts, setContacts] = useState<CommonContactsType | null>(null);
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  async function loadContacts() {
    const response = await service.getContacts();
    setContacts(response.data);
  }

  useEffect(() => {
    loadContacts();
  }, []);

  useEffect(() => {
    document.body.classList.remove(navActiveCn);
  }, [pathname]);

  useEffect(() => {
    if (activeMenu) {
      document.body.classList.add(navActiveCn);
    } else {
      document.body.classList.remove(navActiveCn);
    }
  }, [activeMenu]);
  return (
    <header className="header">
      <Container className="header__container">
        <Link href="/" className="header__logo">
          <Image
            src="/images/logo-header.png"
            alt="logo"
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <MenuNavigation menu={menu} />
        <div className="header__contacts">
          {contacts ? <HeaderContacts {...contacts} /> : null}
        </div>
        <button
          className={cn('hamburger', { active: activeMenu })}
          type="button"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </Container>
    </header>
  );
}

export default Header;
