import { Input } from 'ui/Input'
import { Textarea } from 'ui/Textarea'
import { Button } from 'ui/Button'
import styled from 'styled-components/macro'
import { useFormik } from 'formik'
import { IngredientsType } from 'resources/types'
import { IngredientsSchema } from 'schemas/Schemas'
const formFields: IngredientsType = {
    name: '',
    measure: '',
    quantity: 0,
    price: 0,
    prepare: '',
}
type FormIngredientsProps = {
    className?: string,
}
const FormIngredients = ({ className }: FormIngredientsProps) => {
    console.log('ingredientsd')
    const formik = useFormik({
        initialValues: formFields,
        onSubmit: value => {
            console.log('valores form ingredientes', value)
        },
        validationSchema: IngredientsSchema,
        validateOnChange: true,
    });
    return (
        <form className={className} onSubmit={formik.handleSubmit} onChange={formik.handleChange} >
            <Input labelText='Digite o nome do ingrediente' typeInput='text' nameInputText='name' errors={formik.errors.name} />
            <Input labelText='Digite a medida do ingrediente' typeInput='text' nameInputText='measure' errors={formik.errors.measure} />
            <Input labelText='Digite a quantidade do ingrediente' typeInput='number' nameInputText='quantity' errors={formik.errors.quantity} />
            <Input labelText='Digite o preço do ingrediente' typeInput='number' nameInputText='price' errors={formik.errors.price} />
            <Textarea labelText='Digite o passo a passo da receita' textAreaName='prepare' errors={formik.errors.prepare} />
            <Button>Enviar</Button>
        </form>
    )
}
const StyledFormIngredients = styled(FormIngredients)`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    width: 50rem;
    height: 100%;
    justify-content: center;
    gap: 1.5rem;
    grid-area: formIngredients;
`
export { StyledFormIngredients as FormIngredients }