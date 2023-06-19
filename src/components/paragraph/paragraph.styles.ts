import styled from "styled-components";
import { ParagraphProps } from "./paragraph.types";

export const StyledParagraph = styled.p<ParagraphProps>`
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    text-align: ${props=> props.textAlign};
    margin: ${props => props.margin};

`