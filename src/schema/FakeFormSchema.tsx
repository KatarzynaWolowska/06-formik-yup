import * as yup from 'yup'

const FakeFormSchema = yup.object({
    firstname: yup
        .string()
        .min(3, 'First name should be of minimum 3 characters length')
        .required('First name is required'),
    age: yup.number().min(18, 'Min 18 is required').max(98, 'Sorry, too old...').required('Age is required'),
    city: yup.string().min(3, 'City should be of minimum 3 characters length').required('City is required'),
    photoURL: yup.string().url('Invalid URL'),
    postCode: yup
        .string()
        .length(6, 'Valid format is __-___')
        .matches(/^[0-9]{2}-[0-9]{3}/, 'Valid format is __-___')
        .required('Post code is required'),
    phone: yup
        .string()
        .length(12, 'Must be exactly 11 digits. Add before +')
        .matches(/^\+\d{11}$/, 'Valid format is +___________'),
    volunteer: yup.boolean().oneOf([true], 'Required.'),
    pesel: yup
        .string()
        .matches(/^[0-9]{11}$/, 'PESEL must be exactly 11 digits')
        .test('pesel', 'Invalid PESEL', value => {
            if (!value) return true

            const month = Number(value.substring(2, 4))
            const day = Number(value.substring(4, 6))
            const controlDigit = Number(value.substring(10, 11))

            if ((month > 12 && month < 21) || month < 1) {
                return false
            }

            if (day < 1 || day > 31) {
                return false
            }

            const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3]
            const digits = value.split('')

            let sum = 0

            weights.map((weight, i) => {
                sum += (Number(digits[i]) * weight) % 10
            })

            const calculatedControlDigit = (10 - (sum % 10)) % 10

            if (calculatedControlDigit !== controlDigit) {
                return false
            }

            return true
        })
        .optional()
        .nullable()
})

export default FakeFormSchema
