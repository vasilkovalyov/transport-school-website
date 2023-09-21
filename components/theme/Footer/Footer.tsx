import Image from 'next/image';
import Link from 'next/link';
import { menu } from './Footer.data';
import { SocialList } from '..';
import { Container } from '../Container';

function Footer() {
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
            <div className="footer__contacts-item">
              <address className="footer__contacts-address font-medium text-white">
                3524 SILVERSIDE RD STE 35B WILMINGTON DE 19810
              </address>
            </div>
            <p className="footer__contacts-item">
              <a
                href="tel:+1 (347) 310-7483"
                className="footer__contacts-link font-medium"
              >
                +1 (347) 310-7483
              </a>
            </p>
            <p className="footer__contacts-item">
              <a
                href="mailto:transbuisschool.info@gmail.com"
                className="footer__contacts-link font-medium"
              >
                transbuisschool.info@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer__right">
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
              {
                _id: '3',
                name: 'facebook',
                path: '/',
              },
            ]}
          />
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
