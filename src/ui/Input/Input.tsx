import styled from 'styled-components/macro'
type inputProps = {
    labelText: string,
    typeInput: string,
    nameInputText: string,
    className?: string,
    error?: string,
}
const Input = ({ labelText, typeInput, nameInputText, className, error}: inputProps) => (
    <label htmlFor={nameInputText} className={className}>
        {labelText}
        <input id={nameInputText} type={typeInput} name={nameInputText} autoComplete="off" />
        {error && error}
    </label>
)
const StyledInput = styled(Input)`
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    font-weight: 300;
    input {
        margin-top: 1rem;
        font-size: 1.8rem;
        height: 4rem;
        padding: 1rem; 
        &:focus {
            outline: none;
        }
    }
`
export { StyledInput as Input }