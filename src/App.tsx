import {Beans} from './components/beans/Beans'
import {Button} from './components/button/Button'
import {Header} from './components/header/Header'
import {MainTitle} from './components/main-title/MainTitle'
import {SectionTitle} from './components/section-title/SectionTitle'
import backgroundImage from './assets/img/main-bg.jpg'
import paperBackground from './assets/img/paper-bg.jpg'
import {Section} from './components/section/Section'
import {Container} from './components/container/Container'
import {Paragraph} from './components/paragraph/Paragraph'
import {CoffeeCardList} from './components/coffee-card-list/CoffeeCardList'
import { CoffeeCardItem } from './components/coffee-card/CoffeeCard'
import solimoIMG from './assets/img/solimo.jpg'
import prestoIMG from './assets/img/presto.jpg'
import aromisticoIMG from './assets/img/aromistico.jpg'
import {Footer} from './components/footer/Footer'

const cardList: CoffeeCardItem[] = [
    {
        img: solimoIMG,
        price: 10.73,
        title: 'Solimo Coffee Beans 2 kg',
    },
    {
        img: prestoIMG,
        price: 15.99,
        title: 'Presto Coffee Beans 1 kg',
    },
    {
        img: aromisticoIMG,
        price: 6.99,
        title: 'AROMISTICO Coffee 1 kg',
    },
]

export function App() {
    return (
        <>
            <Header padding="54px 0 200px 0" background={backgroundImage}>
                <MainTitle>Everything You Love About Coffee</MainTitle>
                <Beans color="white" margin="11px 0px 21px 0" />
                <SectionTitle
                    lineHeight="35px"
                    margin="0  0 15px 0"
                    fontSize="24px"
                    color="#ffffff"
                >
                    We makes every day full of energy and taste
                </SectionTitle>
                <SectionTitle
                    lineHeight="35px"
                    margin="0  0 15px 0"
                    fontSize="24px"
                    color="#ffffff"
                >
                    Want to try our beans?
                </SectionTitle>
                <Button>More</Button>
            </Header>
            <Section background="none" padding="80px 0">
                <Container width="589px">
                    <SectionTitle
                        lineHeight="34.66px"
                        margin="0  0 12px 0"
                        fontSize="24px"
                        color="#000000"
                    >
                        About Us
                    </SectionTitle>
                    <Beans color="black" margin="0 0 27px 0" />
                    <Paragraph textAlign="center" margin="0 0 22px 0">
                        Extremity sweetness difficult behaviour he of. On
                        disposal of as landlord horrible. Afraid at highly
                        months do things on at. Situation recommend objection do
                        intention so questions. As greatly removed calling
                        pleased improve an. Last ask him cold feel met spot shy
                        want. Children me laughing we prospect answered
                        followed. At it went is song that held help face.
                    </Paragraph>
                    <Paragraph textAlign="center" margin="0 0 22px 0">
                        Now residence dashwoods she excellent you. Shade being
                        under his bed her, Much read on as draw. Blessing for
                        ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness
                        furniture set preserved far recommend. Did even but nor
                        are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </Paragraph>
                </Container>
            </Section>
            <Section padding="80px 0 110px 0" background={paperBackground}>
                <Container width="802px">
                    <SectionTitle
                        lineHeight="35px"
                        margin="0  0 30px 0"
                        fontSize="24px"
                        color="#000000"
                    >
                        Our best
                    </SectionTitle>
                    <CoffeeCardList data={cardList} />
                </Container>
            </Section>
            <Footer/>
        </>
    )
}


