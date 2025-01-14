import {Button, Card} from "react-bootstrap";

export default function SectionSolutions() {
    return (
        <section className="container">
            <div className="section-solutions">
                <div className="solutions_content">
                    <h2 className="solutions_h2">Комплексные решения для Ваших нужд</h2>
                    <div className="solutions_cards">
                            <Card className="solutions_card">
                                <Card.Img className="solutions_img" variant="top" src="/img/PlaceholderImage.jpg"/>
                                <Card.Body className="solutions_body">
                                    <Card.Title className="solutions_title">Производство и продажа деревянной тары</Card.Title>
                                    <Card.Text className="solutions_text">
                                        Компания "Пилигрин" специализируется на производстве высококачественных деревянных упаковок, специально разработанных для вас.
                                    </Card.Text>
                                    <Button variant="primary" className="solutions_btn">Подробнее</Button>
                                </Card.Body>
                            </Card>
                            <Card className="solutions_card">
                                <Card.Img className="solutions_img" variant="top" src="/img/PlaceholderImage.jpg"/>
                                <Card.Body className="solutions_body">
                                    <Card.Title className="solutions_title">Изготовление тары по чертежам</Card.Title>
                                    <Card.Text className="solutions_text">
                                        Мы изготовим для вас уникальную тару по Вашему чертежу.
                                    </Card.Text>
                                    <Button variant="primary" className="solutions_btn">Подробнее</Button>
                                </Card.Body>
                            </Card>
                            <Card className="solutions_card">
                                <Card.Img className="solutions_img" variant="top" src="/img/PlaceholderImage.jpg"/>
                                <Card.Body className="solutions_body">
                                    <Card.Title className="solutions_title">Защитите ваши товары противогрибковой обработкой</Card.Title>
                                    <Card.Text className="solutions_text">
                                        Мы предлагаем противогрибковую обработку, чтобы защитить ваши продукты от плесени и разложения.
                                    </Card.Text>

                                    <Button variant="primary" className="solutions_btn">Подробнее</Button>
                                </Card.Body>
                            </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
