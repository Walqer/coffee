import styled from 'styled-components'

export const StyledHeader = styled.header<{ backgroundImage: string,padding: string }>`
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    color: #ffffff;
    padding: ${props => props.padding};
    text-align: center;
`