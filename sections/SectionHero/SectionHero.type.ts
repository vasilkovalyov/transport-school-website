import { BlockBaseInfoType } from '../types';

export type SectionHeroProps = {
  image?: string;
  heading: string;
  subheading?: string;
  use_link_to_contact_page?: boolean;
  use_phone_cta?: boolean;
};

export type BlockHeroFullDataType = SectionHeroProps & BlockBaseInfoType;
