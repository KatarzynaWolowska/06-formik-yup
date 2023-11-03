import { useState } from 'react'
import { LinearProgress, Stack } from '@mui/material'
import { Form, Formik } from 'formik'
import LoginSchema from './schema/LoginSchema'
import Button from '../CustomInputs/CustomButton'
import CustomCheckbox from '../CustomInputs/CustomCheckbox'
import CustomTextField from '../CustomInputs/CustomTextField'

const FakeLogin = () => {
    const [rememberMe, setRememberMe] = useState(false)

    const initialValues = {
        username: '',
        password: '',
        rememberMe: false
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false)

                    fetch('https://dummyjson.com/auth/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            username: 'atuny0',
                            password: '9uQFF1Lh'
                        })
                    })
                        .then(res => res.json())

                        .then(data => {
                            if (rememberMe) localStorage.setItem('dummyjsonToken', data.token)
                        })

                    alert(JSON.stringify(values, null, 2))
                }, 500)
            }}>
            {({ isSubmitting, errors, touched }) => (
                <Form noValidate>
                    <Stack spacing={2} maxWidth='600px' margin='auto'>
                        <CustomTextField name='username' type='text' label='Username' required />
                        <CustomTextField name='password' type='password' label='Password' required />
                        <CustomCheckbox
                            name='rememberMe'
                            label='Remember me'
                            checked={rememberMe}
                            errors={errors['rememberMe']}
                            touched={touched['rememberMe']}
                            onClick={() => setRememberMe(!rememberMe)}
                        />

                        {isSubmitting && <LinearProgress />}
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            disabled={isSubmitting}
                            style={{ margin: '1rem auto' }}>
                            Log in
                        </Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    )
}

export default FakeLogin
