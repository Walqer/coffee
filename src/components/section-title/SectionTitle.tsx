import { StyledSectionTitle } from "./section-title.styles";
import { SectionTitleProps } from "./section-title.types";

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
