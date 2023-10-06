import { IBlockHero } from '@/sections/SectionHero/SectionHero.type';

export interface IPage {
  seo: ISeo;
  body: IPageBlocks;
}

export type IPageBlocks = [IBlockHero];

export type ISeo = {
  title: string;
  description: string;
};
