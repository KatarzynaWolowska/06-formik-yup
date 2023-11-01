import * as yup from 'yup'

const FakeFormSchema = yup.object({
    firstname: yup
        .string()
        .min(5, 'This field should be of minimum 5 characters length')
        .required('This field is required'),
    age: yup.number().min(18, 'Min 18 is required').max(98, 'Sorry, too old...').required('This field is required'),
    city: yup.string().min(3, 'This field should be of minimum 3 characters length').required('This field is required'),
    photoURL: yup.string().url('Invalid URL'),
    postCode: yup
        .string()
        .length(6, 'Valid format is __-___')
        .matches(/^[0-9]{2}-[0-9]{3}/, 'Valid format is __-___')
        .required('This field is required'),
    phone: yup
        .string()
        .length(12, 'Valid format is +___________')
        .matches(/^\+\d{11}$/, 'Valid format is +___________'),
    pesel: yup.string().matches(/^\d{11}$/, 'This field should be of 11 characters length'),
    volunteer: yup.boolean().required('This field is required')
})

export default FakeFormSchema
