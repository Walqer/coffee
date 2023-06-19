import { StyledContainer } from "./container.style";
import { ContainerProps } from "./container.types";

export function Container({children,width}:ContainerProps) {
  return (
    <StyledContainer width={width}>{children}</StyledContainer>
  )
}