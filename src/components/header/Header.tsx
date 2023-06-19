import styled from 'styled-components'
import { ReactNode } from 'react'
import {Navbar} from '../navbar/Navbar'
import {Container} from '../container/Container'

const StyledHeader = styled.header<{ backgroundImage: string,padding: string }>`
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    color: #ffffff;
    padding: ${props => props.padding};
    text-align: center;
`
interface HeaderProps{
    background: string;
    padding: string;
    children: ReactNode;
}

export function Header({background,padding, children}:HeaderProps ){
    return (
        <StyledHeader padding={padding} backgroundImage={background}>
            <Container width='1081px'>
                <Navbar color="white" />
                {children}
            </Container>
        </StyledHeader>
    )
}
