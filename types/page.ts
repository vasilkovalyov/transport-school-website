import {
  BlockAboutCourseFullDataType,
  BlockAboutFullDataType,
  BlockAboutUsFullDataType,
  BlockAchivmentsFullDataType,
  BlockContactFormFullDataType,
  BlockContactsFullDataType,
  BlockCourseForPeopleFullDataType,
  BlockCtaFullDataType,
  BlockFaqDataType,
  BlockFormatLessonsFullDataType,
  BlockHeroFullDataType,
  BlockOurBenefitsFullDataType,
  BlockRelatedBlogFullDataType,
  BlockRequirementFullDataType,
  BlockReviewFullDataType,
  BlockScheduleLessonsFullDataType,
  BlockStructEducationFullDataType,
  BlockTeamEducationFullDataType,
  BlockWhoTeachFullInfoType,
} from '@/sections';

export type PageType = {
  body: PageBlocksType[];
};

export type PageBlocksType =
  | BlockAboutCourseFullDataType
  | BlockAboutFullDataType
  | BlockAboutUsFullDataType
  | BlockAchivmentsFullDataType
  | BlockContactFormFullDataType
  | BlockContactsFullDataType
  | BlockCourseForPeopleFullDataType
  | BlockCtaFullDataType
  | BlockFaqDataType
  | BlockFormatLessonsFullDataType
  | BlockHeroFullDataType
  | BlockOurBenefitsFullDataType
  | BlockRelatedBlogFullDataType
  | BlockRequirementFullDataType
  | BlockReviewFullDataType
  | BlockScheduleLessonsFullDataType
  | BlockStructEducationFullDataType
  | BlockTeamEducationFullDataType
  | BlockWhoTeachFullInfoType;

export type ISeo = {
  title: string;
  description?: string;
  keywords?: string;
};
