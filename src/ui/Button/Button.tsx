import styled from 'styled-components/macro'
type ButtonProps = {
    className?: string,
    children: string,
    isValid?: boolean
}
const Button = ({ className, children, isValid}: ButtonProps) => (
    <button type="submit" className={className} disabled={isValid}>{children}</button>
)
const StyledButton = styled(Button)`
    margin-top: 0.5rem;
    font-size: 1.8rem;
    background-color: #F06D1B;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    height: 4.5rem;
    border: none;
`
export { StyledButton as Button }