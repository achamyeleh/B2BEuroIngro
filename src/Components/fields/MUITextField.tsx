import React from 'react';
import {ErrorMessage, Field} from 'formik'
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import '../../App.css'

interface MUITextFieldProps {
    name: string;
    label: string;
    type?:string;
}

export const MUITextField: React.FC<MUITextFieldProps> =({name, label, type="text"}) => {
return (
    <div className="FormikField">
        <Field
          required
          autoComplete="off"
          as={TextField}
          label={label}
          name={name}
          fullWidth
          type={type}
          helperText={<ErrorMessage name={name}/>}
        />
    </div>
)
}

MUITextField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string
}
