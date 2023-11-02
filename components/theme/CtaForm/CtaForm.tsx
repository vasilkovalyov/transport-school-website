'use client';
import { useEffect, useState } from 'react';

import cn from 'classnames';
import dayjs from 'dayjs';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../Button';
import ShortLessonInfo from '../ShortLessonInfo/ShortLessonInfo';
import { CtaFormFieldsType, LessonGroupType } from './CtaForm.type';
import schemaValidation from './CtaForm.validation';

import CtaFormService from './CtaForm.service';
import { lessonsGroup } from '@/utils/common';

const service = new CtaFormService();

const defaultValuesForm: CtaFormFieldsType = {
  name: '',
  email: '',
  phone: '',
  group: '',
};

export default function CtaForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [lessons, setLessons] = useState<LessonGroupType[]>([]);
  const [selectedLesson, setSelectedLesson] = useState<LessonGroupType | null>(
    null
  );

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CtaFormFieldsType>({
    mode: 'onSubmit',
    defaultValues: defaultValuesForm,
    resolver: yupResolver(schemaValidation),
  });

  function onSubmit(props: CtaFormFieldsType) {
    try {
      setLoading(true);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  async function loadLessons() {
    try {
      const response = await service.getLessons();
      setLessons(response.data.lessons);
    } catch (e) {
      console.log(e);
    }
  }

  function onHandleChangeGroup(idGroup: string) {
    const lesson = lessons.find((item) => item._id === idGroup);
    if (lesson) {
      setSelectedLesson(lesson);
    }
  }

  useEffect(() => {
    loadLessons();
  }, []);

  return (
    <form className="form">
      <div className="input-box">
        <label htmlFor="name" className="input-box__label">
          Имя
        </label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="name"
              type="text"
              placeholder="Name"
              className={cn('input-box__input', {
                'input-box__input--error': errors.name,
              })}
            />
          )}
        />
        {errors.name && (
          <p className="input-box__error-message">{errors.name.message}</p>
        )}
      </div>
      <div className="input-box">
        <label htmlFor="phone" className="input-box__label">
          Номер телефона
        </label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="phone"
              type="text"
              placeholder="Phone"
              className={cn('input-box__input', {
                'input-box__input--error': errors.name,
              })}
            />
          )}
        />
        {errors.phone && (
          <p className="input-box__error-message">{errors.phone.message}</p>
        )}
      </div>
      <div className="input-box">
        <label htmlFor="email" className="input-box__label">
          Ваш e-mail
        </label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="email"
              type="text"
              placeholder="Email"
              className={cn('input-box__input', {
                'input-box__input--error': errors.name,
              })}
            />
          )}
        />
        {errors.email && (
          <p className="input-box__error-message">{errors.email.message}</p>
        )}
      </div>
      <div className="input-box">
        <label htmlFor="group" className="input-box__label">
          Группа <span>(выберете урок чтоб узнать детали)</span>
        </label>
        <Controller
          name="group"
          control={control}
          render={({ field }) => (
            <select
              {...field}
              name="group"
              id="group"
              className={cn('input-box__select', {
                'input-box__select--error': errors.name,
              })}
              value={selectedLesson?._id}
              onChange={(e) => onHandleChangeGroup(e.currentTarget.value)}
            >
              <option value=""></option>
              {lessons.map((item) => (
                <option key={item._id} value={item._id}>
                  {`${dayjs(item.date_start_event).format('DD MMM YYYY')} ${
                    item.heading
                  }`}
                </option>
              ))}
            </select>
          )}
        />
        {errors.group && (
          <p className="input-box__error-message">{errors.group.message}</p>
        )}
        {selectedLesson ? <ShortLessonInfo {...selectedLesson} /> : null}
      </div>
      <Button isLoading={loading} onClick={handleSubmit(onSubmit)}>
        Записаться
      </Button>
    </form>
  );
}
