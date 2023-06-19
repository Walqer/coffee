import styled from 'styled-components'
import { CoffeeCard, CoffeeCardItem } from '../coffee-card/CoffeeCard'

interface CofeeCardListProps {
    data: CoffeeCardItem[]
}

const StyledCardList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export function CoffeeCardList({ data }: CofeeCardListProps) {
    return (
        <StyledCardList>
            {data.map((item) => {
                const { img, price, title } = item
                return <CoffeeCard key={title} img={img} price={price} title={title} />
            })}
        </StyledCardList>
    )
}
