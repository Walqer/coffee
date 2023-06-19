import { StyledBeans } from './beans.styles'
import { BeansProps } from './beans.types'

export function Beans({ color, margin }: BeansProps) {
    return <StyledBeans color={color} margin={margin} />
}
