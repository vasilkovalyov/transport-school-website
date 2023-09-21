import Image from 'next/image';
import Link from 'next/link';
import { MenuNavigation } from '../MenuNavigation';
import { menu } from './Header.data';
import { SocialList } from '..';
import { Container } from '../Container';

function Header() {
  return (
    <header className="header">
      <Container className="header__container">
        <Link href="/" className="header__logo">
          <Image
            src="/images/logo-header.png"
            alt="logo"
            width={125}
            height={45}
          />
        </Link>
        <MenuNavigation menu={menu} />
        <div className="header__contacts">
          <Link
            href="tel:+1 (347) 310-7483"
            className="header__contacts-tel font-bold"
          >
            <span className="header__contacts-tel-icon icon-phone"></span>
            <span className="header__contacts-tel-text">+1 (347) 310-7483</span>
          </Link>
          <SocialList
            items={[
              {
                _id: '1',
                name: 'instagram',
                path: '/',
              },
              {
                _id: '2',
                name: 'whatsapp',
                path: '/',
              },
            ]}
            className="header__contacts-social"
          />
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
