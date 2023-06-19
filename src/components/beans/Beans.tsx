import styled from 'styled-components'
import beans from '../../assets/icons/beans.svg'
import beansBlack from '../../assets/icons/beans_black.svg'

interface BeansProps {
    color: 'white' | 'black'
    margin: string
}
const StyledBeans = styled.div<BeansProps>`
    display: inline-block;
    width: 40px;
    height: 40px;
    background-image: ${(props) =>
        props.color === 'white' ? `url(${beans})` : `url(${beansBlack})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: ${(props) => props.margin};
    position: relative;
    &::before {
        top: 14px;
        right: 60px;
        position: absolute;
        display: inline-block;
        content: '';
        background-color: ${(props) => props.color};
        width: 60px;
        border: 1px solid ${(props) => props.color};
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
    &::after {
        top: 14px;
        left: 60px;
        position: absolute;
        display: inline-block;
        content: '';
        background-color: ${(props) => props.color};
        width: 60px;
        border: 1px solid ${(props) => props.color};
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
`

export function Beans({ color, margin }: BeansProps) {
    return <StyledBeans color={color} margin={margin} />
}

