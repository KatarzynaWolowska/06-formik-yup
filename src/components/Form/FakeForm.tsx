import { LinearProgress, Stack } from '@mui/material'
import { Form, Formik } from 'formik'
import FakeFormSchema from './schema/FakeFormSchema'
import Button from '../CustomInputs/CustomButton'
import CustomCheckbox from '../CustomInputs/CustomCheckbox'
import CustomTextField from '../CustomInputs/CustomTextField'

const FakeForm = () => {
    const initialValues = {
        firstname: '',
        age: '',
        city: '',
        volunteer: false,
        photoURL: '',
        postCode: '',
        phone: '',
        pesel: ''
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={FakeFormSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false)
                    alert(JSON.stringify(values, null, 2))
                }, 500)
            }}>
            {({ isSubmitting, errors, touched }) => (
                <Form noValidate>
                    <Stack spacing={2} maxWidth='600px' margin='auto'>
                        <CustomTextField name='firstname' type='text' label='First name' required />
                        <CustomTextField
                            name='age'
                            type='number'
                            label='Age'
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            required
                        />
                        <CustomTextField name='city' type='text' label='City' required />
                        <CustomTextField name='photoURL' type='url' label='URL to your photo' />
                        <CustomTextField name='postCode' type='text' label='Post code (__-___)' required />
                        <CustomTextField name='phone' type='text' label='Phone (+___________)' />
                        <CustomTextField name='pesel' type='text' label='PESEL' />
                        <CustomCheckbox
                            name='volunteer'
                            label='I want to become a volunteer'
                            errors={errors['volunteer']}
                            touched={touched['volunteer']}
                            required
                        />

                        {isSubmitting && <LinearProgress />}
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            disabled={isSubmitting}
                            style={{ margin: '1rem auto' }}>
                            Submit
                        </Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    )
}

export default FakeForm
