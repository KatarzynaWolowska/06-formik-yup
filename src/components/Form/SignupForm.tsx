import { LinearProgress, Stack } from '@mui/material'
import { Form, Formik } from 'formik'
import SignupSchema from '../../schema/SignUpSchema'
import Button from '../CustomInputs/CustomButton'
import CustomCheckbox from '../CustomInputs/CustomCheckbox'
import CustomTextField from '../CustomInputs/CustomTextField'

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
                        <CustomTextField name='email' type='email' label='E-mail' />
                        <CustomTextField name='password' type='password' label='Password' />
                        <CustomCheckbox
                            name='consent'
                            label='Check the box indicating that you agree with the terms and conditions'
                            form={{ errors: errors, touched: touched }}
                        />

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
