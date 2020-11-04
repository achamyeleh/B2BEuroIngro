import React, {ReactNode} from 'react';
import {Field, ErrorMessage, FieldInputProps} from 'formik'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { InputLabel } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText'
import '../App.css'
import { RecentActorsRounded } from '@material-ui/icons';
import { string } from 'yup';

export interface MUIDropBoxItem {
    label: string;
    value: string;
}

interface MUIDropBoxProps {
    name:string
    items:MUIDropBoxItem[];
    label: string;
}

interface MUIDropBoxFieldProps extends FieldInputProps<string> {
    children: ReactNode;
    label: string;
    errorString?: string
}
const MUIDropBoxField:React.FC<MUIDropBoxFieldProps> =({children, label, errorString, value, name , onChange, onBlur}) => {
    return (
    <FormControl fullWidth>
    <InputLabel > {label}</InputLabel>
    <Select name={name} value={value} onChange={onChange} onBlur={onBlur}>
    {children}
    </Select>
    <FormHelperText>{errorString}</FormHelperText>
    </FormControl>
    )

}
export const MUIDropBox: React.FC<MUIDropBoxProps> =({name, items, label}) => {
return (
    <div className="FormikSelect">
       <Field name={name}  as={MUIDropBoxField} 
       label ={label}
       errorString={<ErrorMessage name={name} />}>

{ items.map(item=>
            <MenuItem key={item.value} value={item.value}> {item.label} </MenuItem>)
        }
       </Field>
        {/* <MUIDropBoxField label={label}>
        { items.map(item=>
            <MenuItem key={item.value} value={item.value}> {item.label} </MenuItem>)
        }
        </MUIDropBoxField> */}
        {/* <FormControl fullWidth>
        <InputLabel > {label}</InputLabel>
        <Select>
        { items.map(item=>
            <MenuItem key={item.value} value={item.value}> {item.label} </MenuItem>)
        }
        </Select>
        <FormHelperText>Required!</FormHelperText>
        </FormControl> */}




       
    </div>
)
}

