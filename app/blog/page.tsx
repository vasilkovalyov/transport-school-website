import type { Metadata } from 'next';

import PageService from '@/services/page-service';

import { renderBlocks } from '@/sections/blocks';

async function getData() {
  const service = new PageService();
  const response = await service.getBlog();
  return response.data;
}

export const generateMetadata = (): Metadata => {
  return {
    title: `Blog`,
    description: 'Description',
  };
};

export default async function Blog() {
  const data = await getData();

  return <>{data.body[0] !== null ? renderBlocks(data.body) : null}</>;
}
