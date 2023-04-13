import React from "react";
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import { Navbar } from "react-bootstrap";

const Navegacion = () => {
    return(
        <Navbar className="bg-danger">
            <Container>
                <Navbar.Brand>
                    <li>
                        <Link to="/">🍕 Pizzeria Mamma Mia!</Link>
                    </li>
                </Navbar.Brand>
                <Navbar.Brand>
                    <li>
                        <Link to="/carrito">🛒</Link>
                    </li>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
export default Navegacion