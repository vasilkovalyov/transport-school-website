'use client';
import { useState } from 'react';

import cn from 'classnames';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../Button';
import { CtaFormFieldsType } from './CtaForm.type';
import schemaValidation from './CtaForm.validation';

const defaultValuesForm: CtaFormFieldsType = {
  name: '',
  email: '',
  phone: '',
  group: '',
};

export default function CtaForm() {
  const [loading, setLoading] = useState<boolean>(false);
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
          Группа
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
            >
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          )}
        />
        {errors.group && (
          <p className="input-box__error-message">{errors.group.message}</p>
        )}
      </div>
      <Button isLoading={loading} onClick={handleSubmit(onSubmit)}>
        Записаться
      </Button>
    </form>
  );
}
