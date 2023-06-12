import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

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
                            <Offcanvas.Title id={`nameNavbarLabel-expand-xxl`}>
                                (avatar) Nikita
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/posts">nikita.ushakov.02@outlook.com</Nav.Link>
                                <Nav.Link href="/posts">List of Posts</Nav.Link>
                                <Nav.Link href="/about">About me</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;