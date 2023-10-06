import api from '@/axios/api';
import { API_ROUTE } from '@/axios/api-routes';
import { IPage } from '@/types/page';
import { AxiosPromise } from 'axios';

class PageServices {
  async getHome(): Promise<AxiosPromise<IPage>> {
    const response = await api.get(API_ROUTE.HOME_PAGE);
    return response;
  }
}

export default PageServices;
