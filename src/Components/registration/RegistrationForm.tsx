import * as React from 'react';
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';
import Button from '@material-ui/core/Button';
//  import '../App.css'
import './form.css'
import * as Yup from 'yup'
import RadioButtonsGroup from '../styledComponents/Radio'
import {MUITextField} from '../styledComponents/MUITextField'
import {MUIDropBox, MUIDropBoxItem } from '../styledComponents/MUIDropBox'

 const GenderItems: MUIDropBoxItem[] = [
   {
     label: 'Male',
     value: 'Male'
   },
   {
     label: 'Female',
     value: 'Female'
   }
 ]

 const CountryItems: MUIDropBoxItem[] = [
  {
    label: 'Ethiopia',
    value: 'Ethiopia'
  },
  {
    label: 'Italy',
    value: 'Italy'
  },
  {
    label: 'USA',
    value: 'USA'
  },
  {
    label: 'England',
    value: 'England'
  }
]
 const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  telegramName: Yup.string()
    .min(5, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  channelName: Yup.string()
    .min(4, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  gender: Yup.string()
    .min(1, 'Too Short!')
    .max(6, 'Too Long!')
    .required('Required'),
  // birthday: Yup.date()
  //   .max(new Date(), 'This is a future time!')
  //   .required('Required'),
  // country: Yup.string()
  //   .min(4, 'Too Short!')
  //   .max(15, 'Too Long!')
  //   .required('Required'),
});

 interface MyFormValues {
   firstName: string;
   lastName: string; 
   telegramName: string;
   channelName: string;
   email: string;
   password: string;
   gender: string;
  //  birthday: any;
  //  country: string;
 }
 
 export const RegistrationForm: React.FC<MyFormValues> = () => {
   const initialValues: MyFormValues = { firstName: '', lastName: '', telegramName: '', channelName: '', 
   email:'', password:'', gender:''
  //  , country:''
  //   , birthday: Date.now(), 
};
  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          // console.log('acheaaaa',{ values, actions });
          // alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}>
        {({ errors, touched}) => (
        <Form className="form form-area">
          <div>
            <h2>{`Youtubers' Registration Form`}</h2>
          </div>

        <div className="field input">
             {/* <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" placeholder="First Name" onChange={handleChange} />
         </div> 
           {errors.firstName && touched.firstName && <div>{errors.firstName}</div>} */}
          <div>
            <MUITextField name="firstName" label="First Name" />
          </div>
        
          <div>
            <MUITextField name="lastName" label="Last Name" />
          </div>
              
          <div>
            <MUITextField name="email" label="Email" />
          </div>
            
          <div>
            <MUITextField name="password" label="Password" type="password" />
          </div>

          <div>
            <MUITextField name="telegramName" label="Telegram Name"  />
          </div>

          <div>
            <MUITextField name="channelName" label="Channel Name" />
          </div>

          <div>
            <MUIDropBox name="gender" label="Gender" items={GenderItems}/>
          </div> 

          {/* <div>
            <MUIDropBox name="country" label="Country" items={CountryItems}/>
          </div> */}

          <button type="submit">Submit</button>
        </div>
        </Form>
         )}
      </Formik>
    </div>
   )};