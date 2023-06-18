import { PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: transparent;
    border: 1px solid #ffffff;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 3px;
    color: #ffffff;
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    padding: 5px 42px;
    cursor: pointer;
    &:hover {
        background-color: #ffffff;
        color: #000000;
    }
`

function Button({ children }: PropsWithChildren) {
    return <StyledButton>{children}</StyledButton>
}
export default Button
