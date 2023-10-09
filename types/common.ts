import { SocialLinkProps } from '@/components/theme';

export type ThemeColorType = 'light' | 'dark';

export interface ICommonContacts extends IContacts, ISocialNetworks {}

export interface IContacts {
  email: string;
  address: string;
  phone: string;
}

export interface ISocialNetworks {
  social_list: SocialLinkProps[];
}
