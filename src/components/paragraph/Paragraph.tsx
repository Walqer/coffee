import { StyledParagraph } from "./paragraph.styles";
import { ParagraphProps } from "./paragraph.types";

export function Paragraph({children,textAlign,margin}:ParagraphProps) {
  return (
    <StyledParagraph margin={margin} textAlign={textAlign}>{children}</StyledParagraph>
  )
}