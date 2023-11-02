import { AxiosPromise } from 'axios';
import api from '@/axios/api';
import { LessonGroupType } from './CtaForm.type';

enum EndpointCtaFormEnum {
  GET_LESSONS = 'lessons-cut-down-info',
}

class CtaFormService {
  async getLessons(): Promise<AxiosPromise<{ lessons: LessonGroupType[] }>> {
    const response = await api.get(EndpointCtaFormEnum.GET_LESSONS);
    return response;
  }
}

export default CtaFormService;
