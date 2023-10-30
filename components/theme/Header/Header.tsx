import Image from 'next/image';
import Link from 'next/link';
import { MenuNavigation } from '../MenuNavigation';
import { menu } from './Header.data';
import { SocialList } from '..';
import { Container } from '../Container';
import ContactsService from '@/services/contacts-service';

async function getData() {
  try {
    const service = new ContactsService();
    const response = await service.getContacts();
    return response.data;
  } catch (e) {
    return {
      email: '',
      address: '',
      phone: '',
      social_list: [],
    };
  }
}

async function Header() {
  const data = await getData();

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
          {data ? (
            <>
              {data.phone ? (
                <Link
                  href={data.phone}
                  className="header__contacts-tel font-bold"
                >
                  <span className="header__contacts-tel-icon icon-phone"></span>
                  <span className="header__contacts-tel-text">
                    {data.phone}
                  </span>
                </Link>
              ) : null}
              {data.social_list.length ? (
                <SocialList
                  items={[data.social_list[0], data.social_list[1]]}
                  className="header__contacts-social"
                />
              ) : null}
            </>
          ) : null}
        </div>
        <button className="hamburger js-header-toggler" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </Container>
    </header>
  );
}

export default Header;
