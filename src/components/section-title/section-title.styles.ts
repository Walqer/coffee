import styled from 'styled-components'
import { SectionTitleProps } from './section-title.types'

export const StyledSectionTitle = styled.h2<SectionTitleProps>`
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.lineHeight};
    color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    text-align: center;
`