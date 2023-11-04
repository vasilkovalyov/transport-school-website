import { AxiosPromise } from 'axios';
import api from '@/axios/api';
import { CtaFormFieldsType, LessonGroupType } from './CtaForm.type';

enum EndpointCtaFormEnum {
  GET_LESSONS = 'lessons-form-events',
  REGISTER_STUDENT = 'student',
}

class CtaFormService {
  async getLessons(): Promise<AxiosPromise<{ lessons: LessonGroupType[] }>> {
    const response = await api.get(EndpointCtaFormEnum.GET_LESSONS);
    return response;
  }

  async registerStudent(
    props: CtaFormFieldsType
  ): Promise<AxiosPromise<{ message: string }>> {
    const response = await api.patch(EndpointCtaFormEnum.REGISTER_STUDENT, {
      ...props,
    });
    return response;
  }
}

export default CtaFormService;
