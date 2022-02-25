import { Input } from 'ui/Input'
import { Button } from 'ui/Button'
import styled from 'styled-components/macro'
import { FormEvent } from 'react'
type FormRecipeProps = {
    className?: string,
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void,
}
const FormRecipe = ({ className, onSubmit }: FormRecipeProps) => {
    return (
        <form className={className} onSubmit={onSubmit}>
            <Input labelText='' typeInput='hidden' nameInputText='id' />
            <Input labelText='Digite o nome da sua receita' typeInput='text' nameInputText='receita' />
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