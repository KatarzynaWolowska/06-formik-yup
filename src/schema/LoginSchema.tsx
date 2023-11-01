import * as yup from 'yup'

const LoginSchema = yup.object({
    username: yup.string().required('This field is required'),
    password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
    consent: yup.boolean()
})

export default LoginSchema
