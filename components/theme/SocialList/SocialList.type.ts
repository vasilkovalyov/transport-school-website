export type SocialListProps = {
  items: SocialLinkProps[];
  className?: string;
};

export type SocialLinkProps = {
  _id: string;
  name: string;
  path: string;
};
