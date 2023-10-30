import { BlockBaseInfoType } from '../types';

export type SectionContactsProps = {
  heading: string;
  email: string;
  address: string;
  phone: string;
  map_url?: string;
};

export type BlockContactsFullDataType = SectionContactsProps &
  BlockBaseInfoType;
