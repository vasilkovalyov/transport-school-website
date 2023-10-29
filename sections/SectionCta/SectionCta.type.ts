import { BlockBaseInfoType } from '../types';

export type SectionCtaProps = {
  heading: string;
  use_link_to_contact_page?: boolean;
  use_phone_cta?: boolean;
  phone?: string;
};

export type BlockCtaFullDataType = SectionCtaProps & BlockBaseInfoType;
