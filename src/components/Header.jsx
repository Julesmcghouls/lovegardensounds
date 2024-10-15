import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar>
            <Navbar.Brand href="#home">Love Garden Sounds</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Header;
