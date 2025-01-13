import Header from "../../components/header/header.tsx";
import {Button} from "react-bootstrap";

export default function PageMain () {
    return (
        <>
            <Header />
            <main className="main">

                <section className="container">
                    <div className="main-section">
                        <div className="main_content">
                            <div className="main_container">
                                <h1 className="main_h1">Производитель деревянной упаковочной тары</h1>
                                <p className="main_p">Компания "Пилигрин" находится на передовом крае производства
                                    деревянной упаковки в Санкт-Петербурге и Ленинградской области.
                                    Наша приверженность качеству и инновациям гарантирует,
                                    что мы удовлетворяем разнообразные потребности наших клиентов.
                                </p>
                                <div className="main_buttons">
                                    <Button variant="dark" href="#">Узнать больше</Button>
                                    <Button variant="light" href="#">Контакты</Button>
                                </div>
                            </div>
                        </div>
                        <img className="main_img" alt="main-photo" src="/img/PlaceholderImage.jpg"/>
                    </div>
                </section>

            </main>
        </>

    )
}
