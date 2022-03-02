import styled from 'styled-components/macro'
type inputProps = {
    labelText?: string,
    typeInput?: string,
    nameInputText?: string,
    className?: string,
    errors?: string
}
const Input = ({ labelText, typeInput, nameInputText, className, errors }: inputProps) => (
    <label htmlFor={nameInputText} className={className}>
        {labelText}
        <input id={nameInputText} type={typeInput} name={nameInputText} autoComplete="off" />
        {errors && <span>{errors}</span>}
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
    span {
        color: red;
        padding-top: 0.5rem;
        padding-left: 1rem;
    }
`
export { StyledInput as Input }