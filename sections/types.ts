import { BlockEnum } from './section-enum';

export type BlockBaseInfoType = {
  _id: string;
  block_order: number;
  block_page: string;
  block_name: BlockEnum;
};
