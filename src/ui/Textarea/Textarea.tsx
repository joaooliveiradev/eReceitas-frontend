import styled from 'styled-components/macro'
type TextareaProps = {
    labelText: string,
    textAreaName: string,
    children?: string,
    className?: string,
    error?: string,
}
const Textarea = ({ labelText, textAreaName, children, className, error}: TextareaProps) => (
    <label htmlFor={textAreaName} className={className}>
        {labelText}
        <textarea id={textAreaName} name={textAreaName}>{children}</textarea>
        {error && error}
    </label>
)
const StyledTextArea = styled(Textarea)`
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    textarea {
        margin-top: 1rem;
        font-size: 1.8rem;
        padding: 1rem;
        height: 5rem;
        resize: none;
        &:focus {
            outline: none;
        }
    }
`
export { StyledTextArea as Textarea }