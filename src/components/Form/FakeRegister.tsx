import { LinearProgress, Stack } from '@mui/material'
import { Form, Formik } from 'formik'
import SignupSchema from './schema/SignupSchema'
import Button from '../CustomInputs/CustomButton'
import CustomCheckbox from '../CustomInputs/CustomCheckbox'
import CustomTextField from '../CustomInputs/CustomTextField'

const FakeRegister = () => {
    const initialValues = {
        email: '',
        firstname: '',
        surname: '',
        password: '',
        confirmPassword: '',
        consent: false
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false)
                    alert(JSON.stringify(values, null, 2))
                }, 500)
            }}>
            {({ isSubmitting, errors, touched }) => (
                <Form noValidate>
                    <Stack spacing={2} maxWidth='600px' margin='auto'>
                        <CustomTextField name='email' type='email' label='E-mail' required />
                        <CustomTextField name='firstname' type='text' label='First name' required />
                        <CustomTextField name='surname' type='text' label='Surname' required />
                        <CustomTextField name='password' type='password' label='Password' required />
                        <CustomTextField name='confirmPassword' type='password' label='Confirm password' required />
                        <CustomCheckbox
                            name='consent'
                            label='Check the box indicating that you agree with the terms and conditions'
                            errors={errors['consent']}
                            touched={touched['consent']}
                            required
                        />

                        {isSubmitting && <LinearProgress />}
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            disabled={isSubmitting}
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
