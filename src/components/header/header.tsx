import { Nav, Navbar } from "react-bootstrap";

export default function Header () {
    return (
        <header>
            <Navbar bg="light" data-bs-theme="light">
                <Navbar.Brand href="#home" className="">LOGO</Navbar.Brand>
                <Nav className="me-auto nav-links">
                    <Nav.Link href="#pricing">Главная страница</Nav.Link>
                    <Nav.Link href="#home">Наша продукция</Nav.Link>
                    <Nav.Link href="#features">Контакты</Nav.Link>
                </Nav>
            </Navbar>
        </header>
    )
}
