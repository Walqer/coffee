import { StyledMainTitle } from "./main-title.styles"
import { MainTitleProps } from "./main-title.types"


export function MainTitle({children}:MainTitleProps) {
  return (
    <StyledMainTitle>{children}</StyledMainTitle>
  )
}