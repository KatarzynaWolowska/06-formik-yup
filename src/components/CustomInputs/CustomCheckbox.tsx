import { FormControlLabel, Checkbox, Box } from '@mui/material'
import { ErrorMessage, Field } from 'formik'

interface CustomCheckboxProps {
    name: string
    label: string
    form: {
        errors?: any
        touched?: any
    }
    checked?: boolean
    onClick?: (e) => void
}

const CustomCheckbox = ({ name, label, form: { touched, errors }, ...props }: CustomCheckboxProps) => (
    <Box>
        <Field
            type='checkbox'
            name={name}
            as={FormControlLabel}
            control={<Checkbox style={{ color: errors[name] && touched[name] ? '#f44' : undefined }} />}
            label={label}
            {...props}
        />
        <ErrorMessage name='consent' component='div' className='error' />
    </Box>
)

export default CustomCheckbox
