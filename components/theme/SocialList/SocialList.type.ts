export type SocialListProps = {
  items: SocialLinkProps[];
  className?: string;
};

export type SocialLinkProps = {
  _id: string;
  social_icon: string;
  social_url: string;
};
