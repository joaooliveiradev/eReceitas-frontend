import styled from 'styled-components/macro'
import { Input } from 'ui/Input'
import { Button } from 'ui/Button'
import { FormEvent } from 'react'
type FormHomepageProps = {
    className?: string,
    onSubmit: (e: FormEvent<HTMLFormElement>) => void,
}
const FormHomepage = ({ className, onSubmit }: FormHomepageProps) => (
    <div className={className}>
        <form className={className} onSubmit={onSubmit}>
            <h1>eReceitas</h1>
            <Input labelText='Digite seu nome' typeInput='text' nameInputText='name' />
            <Input labelText='Digite sua senha' typeInput='password' nameInputText='password' />
            <Button>Enviar</Button>
        </form>
    </div>
)
const FormHomepageStyled = styled(FormHomepage)`
    width: 50rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    h1 {
        color: #F06D1B;
        font-size: 3.2rem;
    }
    button {
        width: 15rem;
        border: none;
        background-color: #F06D1B;
        color: white;
        border-radius: 6px;
        cursor: pointer;
        height: 4.5rem;
    }
`
export { FormHomepageStyled as FormHomepage }