import PageService from '@/services/page-service';

import { renderBlocks } from '@/sections/blocks';
import { API_ROUTE, PAGE } from '@/axios/api-routes';
import { SectionServerError } from '@/sections';

const PAGE_NAME = 'Price';

async function getData() {
  try {
    const service = new PageService();
    const response = await service.getPage(API_ROUTE.PRICE_PAGE);
    return response.data;
  } catch (e) {
    return null;
  }
}

export async function generateMetadata() {
  try {
    const service = new PageService();
    const response = await service.getSeoPage(PAGE.PRICE);
    const { title, description, keywords } = response.data;
    return {
      title: title || PAGE_NAME,
      description: description,
      keywords: keywords,
    };
  } catch (e) {
    return {
      title: PAGE_NAME,
    };
  }
}

export default async function Price() {
  const data = await getData();

  if (data === null) {
    return <SectionServerError />;
  }

  return <>{data.body[0] !== null ? renderBlocks(data.body) : null}</>;
}
