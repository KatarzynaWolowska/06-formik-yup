import * as yup from 'yup'

const SignupSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('E-mail is required'),
    firstname: yup.string().min(5, 'Should be of minimum 5 characters length').required('First name is required'),
    surname: yup.string().min(5, 'Should be of minimum 5 characters length').required('Surname is required'),
    password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password'),
    consent: yup.boolean().oneOf([true], 'Required.')
})

export default SignupSchema
