import { ImageProps } from 'next/image';
import { BlockEnum } from '../section-enum';

export type SectionHeroProps = {
  image?: ImageProps;
  heading: string;
  subheading?: string;
  use_link_to_contact_page?: boolean;
  use_phone_cta?: boolean;
};

export interface IBlockHero extends SectionHeroProps {
  _id: string;
  block_order: number;
  block_page: string;
  block_name: BlockEnum;
}
