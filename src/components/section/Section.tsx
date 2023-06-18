import { ReactNode } from 'react'
import styled from 'styled-components'

interface SectionProps {
    padding: string
    background: string
    children: ReactNode
}
const StyledSection = styled.section<SectionProps>`
    padding: ${props=> props.padding};
    background-image: url(${props=> props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
`
function Section({ padding, background, children }: SectionProps) {
    return (
        <StyledSection padding={padding} background={background}>
            {children}
        </StyledSection>
    )
}
export default Section
