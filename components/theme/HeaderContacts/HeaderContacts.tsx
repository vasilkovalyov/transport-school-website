import Link from 'next/link';
import { SocialList } from '..';
import { HeaderContactsProps } from './HeaderContacts.type';

function HeaderContacts({ phone, social_list }: HeaderContactsProps) {
  return (
    <>
      {phone ? (
        <Link href={`tel:${phone}`} className="header__contacts-tel font-bold">
          <span className="header__contacts-tel-icon icon-phone"></span>
          <span className="header__contacts-tel-text">{phone}</span>
        </Link>
      ) : null}
      {social_list.length ? (
        <SocialList
          items={[social_list[0], social_list[1]]}
          className="header__contacts-social"
        />
      ) : null}
    </>
  );
}

export default HeaderContacts;
