import { Input } from 'ui/Input'
import { Textarea } from 'ui/Textarea'
import { Button } from 'ui/Button'
import styled from 'styled-components/macro'
import { FormEvent } from 'react'
import { FormikErrors } from 'formik'
import { RecipeTypes } from 'resources/RecipeTypes'
type FormIngredientsProps = {
    className?: string,
    onSubmit: (e: FormEvent<HTMLFormElement>) => void,
    errors: FormikErrors<RecipeTypes>,
    isValid: boolean
}
const FormIngredients = ({ className, onSubmit, errors, isValid }: FormIngredientsProps) => {
    console.log('errors do yup', errors)
    return (
        <form className={className} onSubmit={onSubmit}>
            <Input labelText='Digite o nome do ingrediente' typeInput='text' nameInputText='ingrediente' error={errors.ingrediente} />
            <Input labelText='Digite a medida do ingrediente' typeInput='text' nameInputText='medida' error={errors.medida} />
            <Input labelText='Digite a quantidade do ingrediente' typeInput='number' nameInputText='quantidade' error={errors.quantidade}/>
            <Input labelText='Digite o preço do ingrediente' typeInput='number' nameInputText='preco' error={errors.preco} />
            <Textarea labelText='Digite o passo a passo da receita' textAreaName='preparo' error={errors.preparo} />
            <Button isValid={!isValid}>Enviar</Button>
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