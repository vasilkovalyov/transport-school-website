import Image from 'next/image';
import Link from 'next/link';
import { menu } from './Footer.data';
import { SocialList } from '../SocialList';
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

async function Footer() {
  const data = await getData();

  return (
    <footer className="footer">
      <Container className="footer__container">
        <div className="footer__left">
          <div className="footer__logo">
            <Image
              src="/images/logo-footer.png"
              alt="tbs"
              width={190}
              height={68}
            />
          </div>
        </div>
        <div className="footer__center">
          <nav className="footer__navigation">
            <ul className="footer__nav-list">
              {menu.map(({ id, name, path }) => (
                <li key={id} className="footer__nav-list-item">
                  <Link
                    href={path}
                    className="footer__nav-list-link text-light"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer__contacts">
            {data ? (
              <>
                {data.address ? (
                  <div className="footer__contacts-item">
                    <address className="footer__contacts-address font-medium text-white">
                      {data.address}
                    </address>
                  </div>
                ) : null}
                {data.phone ? (
                  <p className="footer__contacts-item">
                    <a
                      href={`tel:${data.phone}`}
                      className="footer__contacts-link font-medium"
                    >
                      {data.phone}
                    </a>
                  </p>
                ) : null}
                {data.email ? (
                  <p className="footer__contacts-item">
                    <a
                      href={`mailto:${data.email}`}
                      className="footer__contacts-link font-medium"
                    >
                      {data.email}
                    </a>
                  </p>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
        <div className="footer__right">
          {data && data.social_list.length ? (
            <SocialList items={data.social_list} />
          ) : null}
          <p>
            <Link href="#" className="footer__cta-link font-black">
              ЗАРЕГЕСТРИРОВАТЬСЯ НА ОБУЧЕНИЕ
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;
