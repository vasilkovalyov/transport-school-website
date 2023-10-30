export type ServiceCardProps = {
  _id: string;
  image?: string;
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
