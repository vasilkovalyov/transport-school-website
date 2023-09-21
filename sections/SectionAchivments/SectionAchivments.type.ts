export type SectionAchivmentsProps = {
  heading: string;
  subheading: string;
  listAchivments: AchivmentProps[];
};

export type AchivmentProps = {
  _id: string;
  heading: string;
  text: string;
};
