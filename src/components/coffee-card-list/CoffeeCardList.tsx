import { CoffeeCard } from '../coffee-card/CoffeeCard'
import { StyledCardList } from './coffee-card-list.styles'
import { CofeeCardListProps } from './coffee-card-list.types'

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
