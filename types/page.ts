import { SocialLinkProps } from '@/components/theme';
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

export interface IPage {
  seo?: ISeo | null;
  body: IPageBlocks;
}

export type IPageBlocks =
  | [
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
      BlockWhoTeachFullInfoType
    ]
  | [];

export type ISeo = {
  title: string;
  description: string;
};
