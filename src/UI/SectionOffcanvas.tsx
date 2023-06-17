import React from 'react';
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import {Offcanvas} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

interface SectionOffcanvasProps {
    showMenu: boolean
    changeShowMenu: (val: boolean) => void;
}

const SectionOffcanvas = ({showMenu, changeShowMenu}: SectionOffcanvasProps) => {
    const toggleMenu = () => {
        changeShowMenu(!showMenu)
    }

    const handleClose = () => changeShowMenu(false)

    return (
        <Navbar.Offcanvas
            id={`nameNavbar-expand-xxl`}
            aria-labelledby={`nameNavbarLabel-expand-xxl`}
            placement="start"
            show={showMenu}
            onHide={handleClose}
        >
            <Offcanvas.Header closeButton>
                <Image src="https://i.ibb.co/1ddPg9R/myAvatar.png" rounded fluid />
                <Offcanvas.Title id={`nameNavbarLabel-expand-xxl`}>
                    Nikita
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav onClick={handleClose} className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} onClick={toggleMenu} to={'/about'}>nikita.ushakov.02@outlook.com</Nav.Link>
                    <Nav.Link as={Link} onClick={toggleMenu} to={'/posts'}>List of Posts</Nav.Link>
                    <Nav.Link as={Link} onClick={toggleMenu} to={'/about'}>About me</Nav.Link>
                </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
    );
};

export default SectionOffcanvas;