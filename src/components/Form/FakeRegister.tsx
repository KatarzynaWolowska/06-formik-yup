import { LinearProgress, Stack } from '@mui/material'
import { Form, Formik } from 'formik'
import SignupSchema from '../../schema/SignUpSchema'
import Button from '../CustomInputs/CustomButton'
import CustomCheckbox from '../CustomInputs/CustomCheckbox'
import CustomTextField from '../CustomInputs/CustomTextField'

const FakeRegister = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                firstname: '',
                surname: '',
                password: '',
                confirmPassword: '',
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
                        <CustomTextField name='firstname' type='text' label='First name' />
                        <CustomTextField name='surname' type='text' label='Surname' />
                        <CustomTextField name='password' type='password' label='Password' />
                        <CustomTextField name='confirmPassword' type='password' label='Confirm password' />
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
                            Sign up
                        </Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    )
}

export default FakeRegister