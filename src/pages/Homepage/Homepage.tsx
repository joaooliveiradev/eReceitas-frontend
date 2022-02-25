import styled from 'styled-components/macro'
import { FormHomepage } from 'shared/FormHomepage'
import { useNavigate } from 'react-router-dom'
import * as icon from 'assets/index'
import { useFormik } from 'formik'
const formFields = {
    name: '',
    password: '',
}
const Homepage = ({ className }: { className?: string }) => {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: formFields,
        onSubmit: value => {
            console.log('Valores do formulário Homepage: ', value)
            navigate('./dashboard')
        }
    });
    return (
        <div className={className}>
            <icon.ChiefSVG />
            <FormHomepage onSubmit={formik.handleSubmit} />
        </div>
    )
}
const StyledHomepage = styled(Homepage)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    align-items: center;
    justify-items: center;
`
export { StyledHomepage as Homepage }