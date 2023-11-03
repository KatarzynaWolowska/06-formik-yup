import * as yup from 'yup'
import validatePesel from './validate'

const FakeFormSchema = yup.object({
    firstname: yup
        .string()
        .min(3, 'First name should be of minimum 3 characters length')
        .required('First name is required'),
    age: yup.number().min(18, 'Min 18 is required').max(98, 'Sorry, too old...').required('Age is required'),
    city: yup.string().min(3, 'City should be of minimum 3 characters length').required('City is required'),
    photoURL: yup.string().url('Invalid URL'),
    postCode: yup
        .string()
        .length(6, 'Valid format is __-___')
        .matches(/^[0-9]{2}-[0-9]{3}/, 'Valid format is __-___')
        .required('Post code is required'),
    phone: yup
        .string()
        .length(12, 'Must be exactly 11 digits. Add before +')
        .matches(/^\+\d{11}$/, 'Valid format is +___________'),
    volunteer: yup.boolean().oneOf([true], 'Required.'),
    pesel: yup
        .string()
        .matches(/^[0-9]{11}$/, 'PESEL must be exactly 11 digits')
        .test('pesel', 'Invalid PESEL', value => validatePesel(value))
        .optional()
        .nullable()
})

export default FakeFormSchema
