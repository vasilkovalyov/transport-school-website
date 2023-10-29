import { SocialLinkProps } from '@/components/theme';

export type ThemeColorType = 'light' | 'dark';

export type CommonContactsType = ContactsType & SocialNetworksType;

export type ContactsType = {
  email: string;
  address: string;
  phone: string;
};

export type SocialNetworksType = {
  social_list: SocialLinkProps[];
};
