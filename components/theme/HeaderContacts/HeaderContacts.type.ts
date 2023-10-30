import { ContactsType, SocialNetworksType } from '@/types/common';

export type HeaderContactsProps = SocialNetworksType &
  Pick<ContactsType, 'email' | 'phone'>;
