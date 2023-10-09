import PageService from '@/services/page-service';

import { renderBlocks } from '@/sections/blocks';
import { API_ROUTE, PAGE } from '@/axios/api-routes';

async function getData() {
  const service = new PageService();
  const response = await service.getPage(API_ROUTE.CONTACT_PAGE);
  return response.data;
}

export async function generateMetadata() {
  const service = new PageService();
  const response = await service.getSeoPage(PAGE.CONTACT);
  const { title, description, keywords } = response.data;
  return {
    title: title || 'Contact',
    description: description,
    keywords: keywords,
  };
}

export default async function Contact() {
  const data = await getData();

  return <>{data.body[0] !== null ? renderBlocks(data.body) : null}</>;
}
