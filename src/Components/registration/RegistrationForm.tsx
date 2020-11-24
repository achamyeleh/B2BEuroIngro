import * as React from 'react';
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';
import Button from '@material-ui/core/Button';
//  import '../App.css'
import './form.css'
import * as Yup from 'yup'
import RadioButtonsGroup from '../fields/Radio'
import {MUITextField} from '../fields/MUITextField'
import {MUIDropBox, MUIDropBoxItem } from '../fields/MUIDropBox'
import axios from 'axios'

 const CategoryItems: MUIDropBoxItem[] = [
   {
     label: 'react',
     value: 'react'
   },
   {
     label: 'redux',
     value: 'redux'
   }
 ]

 const SignupSchema = Yup.object().shape({
  id: Yup.string()
    .min(3, 'Too Short!')
    .max(250, 'Too Long!')
    .required('Required'),
  author: Yup.string()
    .min(3, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  body: Yup.string()
    .min(5, 'Too Short!')
    .max(250, 'Too Long!')
    .required('Required'),
  category: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  timestamp: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  title: Yup.string()
    .min(4, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required')
});

 interface MyFormValues {
  id: string;
  author: string;
  body: string;
  category?: string;
  timestamp?: number;
  title: string;
 }
 
 export const RegistrationForm: React.FC<MyFormValues> = () => {
   const initialValues: MyFormValues = { id: '', author: '', body: '', 
   title:''
};
  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
        axios.post('http://140.238.218.219:3001/posts', values, {
        headers: {
        'Authorization': 'Bearer ' + 'B2B',
      }
    }).then(res => {
      console.log('response === ', res)
    })
          console.log('acheaaaa',{ values, actions });
          alert(JSON.stringify(values, null, 2));

          actions.setSubmitting(false);
        }}>
        {({ errors, touched}) => (
        <Form className="form form-area">
          <div>
            <h2>{`Youtubers' Registration Form`}</h2>
          </div>

        <div className="field input">
          <div>
            <MUITextField name="id" label="id" />
          </div>
          <div>
            <MUITextField name="author" label="author" />
          </div>
        
          <div>
            <MUITextField name="body" label="body" />
          </div>
            
          <div>
            <MUIDropBox name="category" label="category" items= {CategoryItems} />
          </div>

          <div>
            <MUITextField name="timestamp" label="timestamp" />
          </div>

          <div>
            <MUITextField name="title" label="title" />
          </div>  

          <button type="submit">Submit</button>
        </div>
        </Form>
         )}
      </Formik>
    </div>
   )};

   