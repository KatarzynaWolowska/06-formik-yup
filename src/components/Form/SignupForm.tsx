import { TextField, Stack, Box } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Button from './CustomButton'

const validationSchema = yup.object({
    email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required')
})

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2} maxWidth='500px' margin='auto'>
                <TextField
                    fullWidth
                    id='email'
                    name='email'
                    label='Email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id='password'
                    name='password'
                    label='Password'
                    type='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button color='primary' variant='contained' fullWidth type='submit'>
                    Submit
                </Button>
            </Stack>
        </form>
    )
}

export default SignupForm
