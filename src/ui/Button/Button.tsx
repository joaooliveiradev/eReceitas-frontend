import styled from 'styled-components/macro'
type ButtonProps = {
    className?: string,
    children: string,
}
const Button = ({ className, children }: ButtonProps) => (
    <button type="submit" className={className}>{children}</button>
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