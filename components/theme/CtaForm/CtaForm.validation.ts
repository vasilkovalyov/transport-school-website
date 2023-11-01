import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required('Name is required'),
  phone: yup
    .string()
    .matches(
      /^(?:\+?\d{1,4})?[-. (]*\d{1,4}[-. )]*\d{1,9}$/g,
      'Invalid phone number format'
    )
    .required('Phone is required'),
  email: yup.string().email().required('Invalid email format'),
  group: yup.string().required('Group is required'),
});
