import { BlockEnum } from './section-enum';

import {
  SectionHero,
  SectionAbout,
  SectionAboutCourse,
  SectionAboutUs,
  SectionAchivments,
  SectionBlog,
  SectionContactForm,
  SectionContacts,
  SectionCourseForPeople,
  SectionCta,
  SectionFaq,
  SectionFormatLessons,
  SectionOurBenefits,
  SectionRelatedPosts,
  SectionRequirement,
  SectionReview,
  SectionScheduleLessons,
  SectionStructEducation,
  SectionTeamEducation,
  SectionWhoTeach,
} from '.';
import { IPageBlocks } from '@/types/page';

type IRegistryItem = {
  [key in BlockEnum | string]: React.FunctionComponent | object | any;
};

export const blockComponents: IRegistryItem = {
  [BlockEnum.BlockAbout]: SectionAbout,
  [BlockEnum.BlockHero]: SectionHero,
  [BlockEnum.BlockAboutCourse]: SectionAboutCourse,
  [BlockEnum.BlockAboutUs]: SectionAboutUs,
  [BlockEnum.BlockScheduleLessons]: SectionScheduleLessons,
  [BlockEnum.BlockFormatLessons]: SectionFormatLessons,
  [BlockEnum.BlockFaq]: SectionFaq,
  [BlockEnum.BlockAchivments]: SectionAchivments,
  [BlockEnum.BlockBenefits]: SectionOurBenefits,
  [BlockEnum.BlockContactForm]: SectionContactForm,
  [BlockEnum.BlockTeamEducation]: SectionTeamEducation,
  [BlockEnum.BlockRequirement]: SectionRequirement,
  [BlockEnum.BlockContacts]: SectionContacts,
  [BlockEnum.BlockCourseForPeople]: SectionCourseForPeople,
  [BlockEnum.BlockCta]: SectionCta,
  [BlockEnum.BlockOurBenefits]: SectionOurBenefits,
  [BlockEnum.BlockStructEducation]: SectionStructEducation,
  [BlockEnum.BlockWhoTeach]: SectionWhoTeach,
  [BlockEnum.BlockSchedule]: SectionScheduleLessons,
  [BlockEnum.BlockReview]: SectionReview,
  [BlockEnum.BlockBlog]: SectionBlog,
  [BlockEnum.BlockRelatedPosts]: SectionRelatedPosts,
};

export function renderBlocks(blocks: IPageBlocks[]) {
  if (!blocks.length) return [];
  return blocks.map((block) => {
    if (!block) return null;
    if (blockComponents[block.block_name] === undefined) return null;
    const Component = blockComponents[block.block_name];

    return <Component key={block._id} {...block} />;
  });
}
