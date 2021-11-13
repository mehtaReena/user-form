import * as Yup from "yup";

const validationsForm = {
  name: Yup.string()
  .required('please enter your name'),
  title: Yup.string()
  .required('please select something'),
desc: Yup.string()
   .max(50,'please describe yourself in not more than 50 words')
  .required('please describe yourself in not more than 50 words'),
email: Yup.string()
  .email('Email is invalid')
  .required('please enter your email address'),
password: Yup.string()
  .min(6, 'Password must be at least 6 characters')
  .required('please enter password'),

checked: Yup.array().min(1, "please select at least 1").nullable(),

gender: Yup.string().required("please select one"),

tandc: Yup.boolean()
  .oneOf([true], "You must accept the terms and conditions"),
  

}
  

export default validationsForm;
