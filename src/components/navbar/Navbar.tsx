import styled, { css } from 'styled-components'

import beans from '../../assets/icons/coffee-beans.svg'
import beansBlack from '../../assets/icons/coffee-beans_black.svg'

interface NavbarProps {
    color: 'black' | 'white'
}

const StyledNavbar = styled.nav<{ color: NavbarProps['color'] }>`
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        a {
            color: ${(props) => props.color};
            text-decoration: none;
            margin-right: 40px;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        li {
            position: relative;
            &:first-child::before {
                position: absolute;
                content: ${(props) => props.color === 'white'
                        ? css`url(${beans})`
                        : css`url(${beansBlack})`};
                width: 35px;
                height: 35px;
                left: -31px;
                top: -24px;
            }
        }
    }
`

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
