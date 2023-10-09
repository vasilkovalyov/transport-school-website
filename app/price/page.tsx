import PageService from '@/services/page-service';

import { renderBlocks } from '@/sections/blocks';
import { API_ROUTE, PAGE } from '@/axios/api-routes';

async function getData() {
  const service = new PageService();
  const response = await service.getPage(API_ROUTE.PRICE_PAGE);
  return response.data;
}

export async function generateMetadata() {
  const service = new PageService();
  const response = await service.getSeoPage(PAGE.PRICE);
  const { title, description, keywords } = response.data;
  return {
    title: title || 'Price',
    description: description,
    keywords: keywords,
  };
}

export default async function Price() {
  const data = await getData();

  return <>{data.body[0] !== null ? renderBlocks(data.body) : null}</>;
}
