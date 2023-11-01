import * as yup from 'yup'

const SignupSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password'),
    consent: yup.boolean().oneOf([true], 'Required.')
})

export default SignupSchema
