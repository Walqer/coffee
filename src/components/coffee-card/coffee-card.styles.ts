import styled from 'styled-components'

export const StyledCard = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    width: 220px;
    height: 240px;
    background: rgba(255, 255, 255, 0.65);
    border-radius: 8px;
    p{
        margin: 15px 0px 7px 0;;
        text-align: right;
        font-size: 14px;
        span{
            margin-bottom: 17px;
            display: inline-block;
        }
        &:last-child{
            
            font-weight: bold;
        }
    }
    img{
        margin-top: 23px;
        object-fit: cover;
    }
`