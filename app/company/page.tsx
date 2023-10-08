import type { Metadata } from 'next';

import PageService from '@/services/page-service';

import { renderBlocks } from '@/sections/blocks';

async function getData() {
  const service = new PageService();
  const response = await service.getCompany();
  return response.data;
}

export const generateMetadata = (): Metadata => {
  return {
    title: `Company`,
    description: 'Description',
  };
};

export default async function Company() {
  const data = await getData();

  return <>{data.body[0] !== null ? renderBlocks(data.body) : null}</>;
}
