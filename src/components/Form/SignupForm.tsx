import { TextField, LinearProgress, Stack, Box, FormControlLabel, Checkbox } from '@mui/material'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import Button from './CustomButton'

const SignupSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
    consent: yup.boolean().oneOf([true], 'Required.')
})

const SignupForm = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                consent: false
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false)
                    alert(JSON.stringify(values, null, 2))
                }, 500)
            }}>
            {({ submitForm, isSubmitting, errors, touched }) => (
                <Form>
                    <Stack spacing={2} maxWidth='600px' margin='auto'>
                        <Box>
                            <Field as={TextField} name='email' type='email' label='Email' fullWidth />
                            <ErrorMessage name='email' component='div' className='error' />
                        </Box>
                        <Box>
                            <Field as={TextField} name='password' type='password' label='Password' fullWidth />
                            <ErrorMessage name='password' component='div' className='error' />
                        </Box>
                        <Box>
                            <Field
                                type='checkbox'
                                name='consent'
                                as={FormControlLabel}
                                control={
                                    <Checkbox
                                        style={{ color: errors.consent && touched.consent ? '#f44' : undefined }}
                                    />
                                }
                                label='Check the box indicating that you agree with the terms and conditions'
                            />
                            <ErrorMessage name='consent' component='div' className='error' />
                        </Box>
                        {isSubmitting && <LinearProgress />}
                        <Button
                            variant='contained'
                            color='primary'
                            disabled={isSubmitting}
                            onClick={submitForm}
                            style={{ margin: '1rem auto' }}>
                            Submit
                        </Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    )
}

export default SignupForm
