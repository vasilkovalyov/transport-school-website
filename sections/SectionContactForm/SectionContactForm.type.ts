import { ImageProps } from 'next/image';
import { BlockBaseInfoType } from '../types';

export type SectionContactFormProps = {
  heading: string;
  image?: ImageProps;
  rich_text?: string;
  form_heading?: string;
  require_message?: string;
};

export type BlockContactFormFullDataType = SectionContactFormProps &
  BlockBaseInfoType;
