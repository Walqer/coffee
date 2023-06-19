import { PropsWithChildren } from "react"
import styled from "styled-components"

const StyledMainTitle = styled.h1`
  font-size: 40px;
  margin: 0;
  margin-top: 119px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export function MainTitle({children}:PropsWithChildren) {
  return (
    <StyledMainTitle>{children}</StyledMainTitle>
  )
}