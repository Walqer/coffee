import { ReactNode } from 'react'
import styled from 'styled-components'

interface SectionTitleProps {
    fontSize: string
    color: string
    lineHeight: string
    margin: string
    children: ReactNode
}

const StyledSectionTitle = styled.h2<SectionTitleProps>`
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.lineHeight};
    color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    text-align: center;
`

export function SectionTitle({
    fontSize,
    color,
    margin,
    children,
    lineHeight,
}: SectionTitleProps) {
    return (
        <StyledSectionTitle
            lineHeight={lineHeight}
            margin={margin}
            fontSize={fontSize}
            color={color}
        >
            {children}
        </StyledSectionTitle>
    )
}
