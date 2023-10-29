import api from '@/axios/api';
import { API_ROUTE, PAGE } from '@/axios/api-routes';
import { PageType, ISeo } from '@/types/page';
import { AxiosPromise } from 'axios';

class PageService {
  async getPage(pageName: API_ROUTE): Promise<AxiosPromise<PageType>> {
    const response = await api.get(pageName);
    return response;
  }

  async getSeoPage(pageName: PAGE): Promise<AxiosPromise<ISeo>> {
    const response = await api.get(`/seo/${pageName}`);
    return response;
  }
}

export default PageService;
