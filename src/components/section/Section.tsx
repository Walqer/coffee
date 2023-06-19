import { StyledSection } from "./section.styles";
import { SectionProps } from "./section.types";

export function Section({ padding, background, children }: SectionProps) {
    return (
        <StyledSection padding={padding} background={background}>
            {children}
        </StyledSection>
    )
}
