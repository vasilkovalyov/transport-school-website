import api from '@/axios/api';
import { API_ROUTE } from '@/axios/api-routes';
import { IPage } from '@/types/page';
import { AxiosPromise } from 'axios';

class PageService {
  async getHome(): Promise<AxiosPromise<IPage>> {
    const response = await api.get(API_ROUTE.HOME_PAGE);
    return response;
  }

  async getAboutCourse(): Promise<AxiosPromise<IPage>> {
    const response = await api.get(API_ROUTE.ABOUT_COURSE_PAGE);
    return response;
  }

  async getBlog(): Promise<AxiosPromise<IPage>> {
    const response = await api.get(API_ROUTE.BLOG_PAGE);
    return response;
  }

  async getCompany(): Promise<AxiosPromise<IPage>> {
    const response = await api.get(API_ROUTE.COMPANY_PAGE);
    return response;
  }

  async getContact(): Promise<AxiosPromise<IPage>> {
    const response = await api.get(API_ROUTE.CONTACT_PAGE);
    return response;
  }

  async getPrice(): Promise<AxiosPromise<IPage>> {
    const response = await api.get(API_ROUTE.PRICE_PAGE);
    return response;
  }

  async getSchedule(): Promise<AxiosPromise<IPage>> {
    const response = await api.get(API_ROUTE.SCHEDULE_PAGE);
    return response;
  }
}

export default PageService;
