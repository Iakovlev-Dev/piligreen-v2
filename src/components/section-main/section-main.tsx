import {Button} from "react-bootstrap";

export default function SectionMain() {
    return (
        <section className="container">
            <div className="section-main">
                <div className="main_content">
                    <div className="main_container">
                        <h1 className="main_h1">Производитель деревянной упаковочной тары</h1>
                        <p className="main_p">Компания "Пилигрин" является производителем
                            деревянной упаковки в Санкт-Петербурге и Ленинградской области.
                            Наша приверженность качеству и инновациям гарантирует,
                            что мы удовлетворяем разнообразные потребности наших клиентов.
                        </p>
                        <div className="main_buttons">
                            <Button variant="dark" href="#">Подробнее</Button>
                            <Button variant="light" href="#">Контакты</Button>
                        </div>
                    </div>
                </div>
                <img className="main_img" alt="main-photo" src="/img/PlaceholderImage.jpg"/>
            </div>
        </section>
    )
}
