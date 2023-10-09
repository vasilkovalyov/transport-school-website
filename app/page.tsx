import PageService from '@/services/page-service';

import { renderBlocks } from '@/sections/blocks';
import { API_ROUTE, PAGE } from '@/axios/api-routes';

async function getData() {
  const service = new PageService();
  const response = await service.getPage(API_ROUTE.HOME_PAGE);
  return response.data;
}

export async function generateMetadata() {
  const service = new PageService();
  const response = await service.getSeoPage(PAGE.HOME);
  const { title, description, keywords } = response.data;
  return {
    title: title || 'Home',
    description: description,
    keywords: keywords,
  };
}

export default async function Home() {
  const data = await getData();

  return <>{data.body[0] !== null ? renderBlocks(data.body) : null}</>;
}
