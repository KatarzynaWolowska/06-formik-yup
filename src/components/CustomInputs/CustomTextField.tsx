import { TextField, Box } from '@mui/material'
import { ErrorMessage, Field } from 'formik'

interface CustomTextFieldProps {
    name: string
    type?: 'text' | 'password' | 'email'
    label: string
}

const CustomTextField = ({ name, type = 'text', label }: CustomTextFieldProps) => (
    <Box>
        <Field as={TextField} name={name} type={type} label={label} fullWidth />
        <ErrorMessage name={name} component='div' className='error' />
    </Box>
)

export default CustomTextField
