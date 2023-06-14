import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {Link} from "react-router-dom";

function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/posts">Me React App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Offcanvas
                        id={`nameNavbar-expand-xxl`}
                        aria-labelledby={`nameNavbarLabel-expand-xxl`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Col xs={6} md={4}>
                                <Image src="https://mdbootstrap.com/img/new/standard/city/041.webp" rounded fluid />
                            </Col>
                            <Offcanvas.Title id={`nameNavbarLabel-expand-xxl`}>
                                Nikita
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link to="/about">nikita.ushakov.02@outlook.com</Link>
                                <Link to="/posts">List of Posts</Link>
                                <Link to="/about">About me</Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;