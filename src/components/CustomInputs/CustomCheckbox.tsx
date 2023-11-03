import { FormControlLabel, Checkbox, Box } from '@mui/material'
import { ErrorMessage, Field } from 'formik'

interface CustomCheckboxProps {
    name: string
    label: string
    errors: string
    touched: boolean
    checked?: boolean
    required?: boolean
    onClick?: (e) => void
}

const CustomCheckbox = ({ name, label, touched, errors, ...props }: CustomCheckboxProps) => (
    <Box>
        <Field
            type='checkbox'
            name={name}
            as={FormControlLabel}
            control={<Checkbox style={{ color: errors && touched ? '#f44' : undefined }} />}
            label={label}
            {...props}
        />
        <ErrorMessage name={name} component='div' className='error' />
    </Box>
)

export default CustomCheckbox
