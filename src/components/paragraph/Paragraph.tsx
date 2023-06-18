import { ReactNode } from "react";
import styled from "styled-components";

interface ParagraphProps{
    children: ReactNode;
    textAlign: string;
    margin: string;
}
const StyledParagraph = styled.p<ParagraphProps>`
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    text-align: ${props=> props.textAlign};
    margin: ${props => props.margin};

`
function Paragraph({children,textAlign,margin}:ParagraphProps) {
  return (
    <StyledParagraph margin={margin} textAlign={textAlign}>{children}</StyledParagraph>
  )
}
export default Paragraph