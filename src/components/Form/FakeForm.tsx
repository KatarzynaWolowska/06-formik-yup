import { LinearProgress, Stack } from '@mui/material'
import { Form, Formik } from 'formik'
import FakeFormSchema from '../../schema/FakeFormSchema'
import Button from '../CustomInputs/CustomButton'
import CustomCheckbox from '../CustomInputs/CustomCheckbox'
import CustomTextField from '../CustomInputs/CustomTextField'

const FakeForm = () => {
    return (
        <Formik
            initialValues={{
                firstname: '',
                age: '',
                city: '',
                volunteer: false,
                photoURL: '',
                postCode: '',
                phone: '',
                pesel: ''
            }}
            validationSchema={FakeFormSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false)
                    alert(JSON.stringify(values, null, 2))
                }, 500)
            }}>
            {({ submitForm, isSubmitting, errors, touched }) => (
                <Form>
                    <Stack spacing={2} maxWidth='600px' margin='auto'>
                        <CustomTextField name='firstname' type='text' label='First name' />
                        <CustomTextField
                            name='age'
                            type='number'
                            label='Age'
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        />
                        <CustomTextField name='city' type='text' label='City' />
                        <CustomTextField name='photoURL' type='url' label='URL to your photo' />
                        <CustomTextField name='postCode' type='text' label='Post code (__-___)' />
                        <CustomTextField name='phone' type='text' label='Phone (+___________)' />
                        <CustomTextField name='pesel' type='text' label='PESEL' />

                        <CustomCheckbox
                            name='volunteer'
                            label='volunteer'
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

export default FakeForm
