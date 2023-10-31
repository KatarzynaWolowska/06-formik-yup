interface CustomCheckboxProps {
    field: any
    form: {
        touched: any
        errors: any
    }
}

const CustomCheckbox = ({ field, form: { touched, errors }, ...props }: CustomCheckboxProps) => (
    <div>
        <input type='text' {...field} {...props} />
        {touched[field.name] && errors[field.name] && <div className='error'>{errors[field.name]}</div>}
    </div>
)

export default CustomCheckbox
