import { StyledButton } from './button.styles'
import { ButtonProps } from './button.types'

export function Button({ children }: ButtonProps) {
    return <StyledButton>{children}</StyledButton>
}
