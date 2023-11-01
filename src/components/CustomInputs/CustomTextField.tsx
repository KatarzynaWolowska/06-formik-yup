import { TextField, Box } from '@mui/material'
import { ErrorMessage, Field } from 'formik'

interface CustomTextFieldProps {
    name: string
    type?: 'text' | 'password' | 'email'
    label: string
    onChange?: (e) => void
}

const CustomTextField = ({ ...props }: CustomTextFieldProps) => (
    <Box>
        <Field as={TextField} {...props} fullWidth />
        <ErrorMessage name={props.name} component='div' className='error' />
    </Box>
)

export default CustomTextField
