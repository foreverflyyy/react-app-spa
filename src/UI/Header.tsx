import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SectionOffcanvas from "./SectionOffcanvas";
import {useState} from "react";

function Header() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>My React App</Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        onClick={() => setShowMenu(!showMenu)}
                    />
                    <SectionOffcanvas showMenu={showMenu} changeShowMenu={setShowMenu}/>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;