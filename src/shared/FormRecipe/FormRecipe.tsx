import { Input } from 'ui/Input'
import { Button } from 'ui/Button'
import styled from 'styled-components/macro'
import { useFormik } from 'formik'
import { RecipeType } from 'resources/types'
import { RecipeSchema } from 'schemas/Schemas'
type FormRecipeProps = {
    className?: string,
}
const formFields: RecipeType = {
    id: 0,
    name: '',
    ingredients: []
}
/*
    TODO: Não deixar salvar uma receita sem nenhum ingrediente no array
*/ 
const FormRecipe = ({ className }: FormRecipeProps) => {
    const formik = useFormik({
        initialValues: formFields,
        onSubmit: value => {
            console.log('valores form recipe', value)
        },
        validationSchema: RecipeSchema,
        validateOnChange: true,
    });
    return (
        <form className={className} onSubmit={formik.handleSubmit} onChange={formik.handleChange}>
            <Input labelText='' typeInput='hidden' nameInputText='id' />
            <Input labelText='Digite o nome da sua receita' typeInput='text' nameInputText='name' errors={formik.errors.name} />
            <Input labelText='' typeInput='hidden' nameInputText='ingredients' />
            <Button>Salvar Receita</Button>
        </form>
    )
}
const StyledFormRecipe = styled(FormRecipe)`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    width: 50rem;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    grid-area: formRecipe;
    button {
        padding: 0rem 3rem;
    }
`
export { StyledFormRecipe as FormRecipe }