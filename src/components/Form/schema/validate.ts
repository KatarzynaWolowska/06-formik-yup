const validatePesel = (value: string) => {
    if (!value) return true

    const month = Number(value.substring(2, 4))
    const day = Number(value.substring(4, 6))
    const controlDigit = Number(value.substring(10, 11))

    if ((month > 12 && month < 21) || month < 1) {
        console.log('error1')
        return false
    }

    if (day < 1 || day > 31) {
        console.log('error2')
        return false
    }

    const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3]
    const digits = value.split('')

    let sum = 0

    weights.forEach((weight, i) => {
        sum += (Number(digits[i]) * weight) % 10
    })

    const calculatedControlDigit = (10 - (sum % 10)) % 10

    console.log(value)
    console.log(calculatedControlDigit)
    console.log(controlDigit)

    if (calculatedControlDigit !== controlDigit) {
        console.log('error3')
        return false
    }

    console.log('true')

    return true
}

export default validatePesel
