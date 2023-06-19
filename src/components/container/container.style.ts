import styled from "styled-components"

export const StyledContainer = styled.div<{width:string}>`
  max-width: ${props => props.width};
  margin: 0 auto;
`