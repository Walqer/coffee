import {Navbar} from "../navbar/Navbar"
import {Beans} from "../beans/Beans"
import { StyledFooter } from "./footer.styles"


export function Footer() {
  return (
    <StyledFooter>
       <Navbar color="black"/>
        <Beans margin="30px 0" color="black"/>
    </StyledFooter>
  )
}