import { TextField, Box } from '@mui/material'
import { ErrorMessage, Field } from 'formik'

interface CustomTextFieldProps {
    name: string
    type?: 'text' | 'password' | 'email' | 'number' | 'url'
    label: string
    onChange?: (e) => void
    inputProps?: unknown
    required?: boolean
}

const CustomTextField = ({ ...props }: CustomTextFieldProps) => (
    <Box>
        <Field as={TextField} {...props} fullWidth />
        <ErrorMessage name={props.name} component='div' className='error' />
    </Box>
)

export default CustomTextField
