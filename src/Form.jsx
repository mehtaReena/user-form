import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from "yup";
import validationsForm from './validationSchema';

function Form(props) {
    return (
        <div className='container'>
              <h1>FORM NO 2</h1>
          <Formik
            initialValues={{
              name: '',
              desc: '',
              email: '',
              password: '',
              checked: [],
              gender: '',
              tandc: false,
              title: '',
              color: ''
    
            }}
            validationSchema={
    
              Yup.object().shape(validationsForm
              )}
            onSubmit={values => {
              alert("Submitted!")
    
              console.log("validation ", values);
    
            }}
          >
            {({ handleSubmit, handleChange, handleReset, values, errors }) => {
              console.log(values)
              return (
                <form className='form' onSubmit={handleSubmit}>
                  <div className="form-group">
                      
                    <label htmlFor="name" className="label">NAME</label>
                    <input name="name" type="text" className={'form-control'}
                      onChange={handleChange} value={values.name} />
    
    
                  </div>
                  <span className="error">{errors.name}</span>
    
                  <div className="form-group">
                    <label htmlFor="password" className="label">PASSWORD</label>
                    <input name="password" type="password" className={'form-control'}
                      onChange={handleChange} value={values.password} />
    
    
                  </div>
                  <span className="error">{errors.password}</span>
    
    
    
                  <div className="form-group">
                    <label htmlFor="desc" className="label">DESCRIPTION</label>
                    <input name="desc" type="text" className={'form-control' + (errors.desc ? ' is-invalid' : '')}
                      onChange={handleChange} value={values.desc} />
    
    
                  </div>
                  <span className="error">{errors.desc}</span>
                  <div className="form-group">
                    <label htmlFor="email" className="label">EMAIL</label>
                    <input name="email" type="text" className={'form-control' + (errors.email ? ' is-invalid' : '')}
                      onChange={handleChange} value={values.email} />
    
    
                  </div>
                  <span className="error">{errors.email}</span>
    
                  <div className="form-group">
                    <label htmlFor="email" className="label">TITLE</label>
                    <select
                      name="title"
                      value={values.title}
                      onChange={handleChange}
    
                    >
                      <option value="" label=""  name="title" />
                      <option value="red" label="red"  name="title" />
                      <option value="blue" label="blue"   name="title"/>
                      <option value="green" label="green"   name="title"/>
                    </select>
                  </div>
                  <span className="error">{errors.title}</span>
    
    
                  <div className="form-group">
                  <label htmlFor="gender" className="label">GENDER</label>
                  <div role="group" aria-labelledby="radio-group">
                  <label className="left">
                      <Field type="radio" name="gender" value="male" />
                      <span className="option"> Male </span>
                    </label>
                    <label className="left">
                      <Field type="radio" name="gender" value="female" />
                      <span className="option"> Female </span>
                    </label>
    
                    {/* <ErrorMessage name="gender" component="div" className="invalid-feedback" /> */}
                  </div>
                  </div>
                  <span className="error">{errors.gender}</span>
    
    
                  <div className="form-group">
                  <label htmlFor="gender" className="label">HOBBIES</label>
                  <div role="group" aria-labelledby="checkbox-group">
                  <label className="left">
                      <Field type="checkbox" name="checked" value="One" />
                      <span className="option"> Cycling</span>
                    </label>
                    <label className="left">
                      <Field type="checkbox" name="checked" value="Two" />
                      <span className="option"> Reading</span>
                    </label>
                    <label className="left">
                      <Field type="checkbox" name="checked" value="Three" />
                      <span className="option">Dancing </span>
                    </label>
                    <label className="left">
                      <Field type="checkbox" name="checked" value="Three" />
                      <span className="option"> Traveling </span>
                    </label>
    
                  </div>
                  </div>
                  <span className="error">{errors.checked}</span>
    
                  <div className="footer">
    
    
                    <div className="form-group">
    
                      <Field type="checkbox" name="tandc" className="form-check-input" id="tandc" />
    
                           I ACCEPT TERMS AND CONDITIONS
                    
                      {/* <ErrorMessage name="tandc" component="div" className="invalid-feedback" /> */}
    
                    </div>
                    <span style={{color:"red"}}>{errors.tandc}</span>
                     <div className="actions">
                    <button className="button" type="submit">Submit</button>
                    {/* <button className="button" type="reset" onClick={handleReset}>Reset</button> */}
                  </div>
                  </div>
    
    
                </form>
    
              )
            }}
    
          </Formik>
        </div>
      );
    }
    

    

export default Form;