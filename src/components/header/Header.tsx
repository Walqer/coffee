
import {Navbar} from '../navbar/Navbar'
import {Container} from '../container/Container'
import { HeaderProps } from './header.types'
import { StyledHeader } from './header.styles'




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
