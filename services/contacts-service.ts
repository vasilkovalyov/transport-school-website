import api from '@/axios/api';
import { API_ROUTE } from '@/axios/api-routes';
import { ICommonContacts } from '@/types/common';
import { AxiosPromise } from 'axios';

class PageService {
  async getContacts(): Promise<AxiosPromise<ICommonContacts>> {
    const response = await api.get(API_ROUTE.CONTACTS);
    return response;
  }
}

export default PageService;
