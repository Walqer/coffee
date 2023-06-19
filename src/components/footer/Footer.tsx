import styled from "styled-components"
import {Navbar} from "../navbar/Navbar"
import {Beans} from "../beans/Beans"

const StyledFooter = styled.footer`
    padding-top: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    nav{
        margin-left: 73px;
    }
`

export function Footer() {
  return (
    <StyledFooter>
       <Navbar color="black"/>
        <Beans margin="30px 0" color="black"/>
    </StyledFooter>
  )
}