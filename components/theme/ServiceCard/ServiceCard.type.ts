import { ImageProps } from 'next/image';

export type ServiceCardProps = {
  _id: string;
  image?: ImageProps;
  heading: string;
  price: number;
  top_list_info: {
    _id: string;
    text: string;
  }[];
  bottom_list_info: {
    _id: string;
    text: string;
  }[];
};
