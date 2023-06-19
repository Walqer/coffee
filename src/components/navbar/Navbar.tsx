import { StyledNavbar } from "./navbar.styles";
import { NavbarProps } from "./navbar.types";

export function Navbar({ color }: NavbarProps) {
    return (
        <StyledNavbar color={color}>
            <ul>
                <li>
                    <a href="/">Coffee house</a>
                </li>
                <li>
                    <a href="/our-coffee">Our coffee</a>
                </li>
                <li>
                    <a href="/pleasure">For your pleasure</a>
                </li>
            </ul>
        </StyledNavbar>
    )
}
