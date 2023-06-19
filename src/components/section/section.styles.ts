import styled from 'styled-components'
import { SectionProps } from './section.types'

export const StyledSection = styled.section<SectionProps>`
    padding: ${props=> props.padding};
    background-image: url(${props=> props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
`