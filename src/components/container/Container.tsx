import { ReactNode } from "react"
import styled from "styled-components"

const StyledContainer = styled.div<{width:string}>`
  max-width: ${props => props.width};
  margin: 0 auto;
`
interface ContainerProps{
  children: ReactNode,
  width: string,
}
function Container({children,width}:ContainerProps) {
  return (
    <StyledContainer width={width}>{children}</StyledContainer>
  )
}
export default Container