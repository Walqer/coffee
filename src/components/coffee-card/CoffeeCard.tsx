import { StyledCard } from "./coffee-card.styles"
import { CoffeeCardItem } from "./coffee-card.types"

export function CoffeeCard({ img, title, price }: CoffeeCardItem) {
    return (
        <StyledCard>
            <img src={img} alt={title} />
            <p>
                <span>{title}</span><br />
                <span>{price}$</span>
            </p>
        </StyledCard>
    )
}
