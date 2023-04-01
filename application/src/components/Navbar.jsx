import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useEffect} from 'react';
import WebFont from 'webfontloader';

function MyNavbar() {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Kanit', 'Barlow']
          }
        });
      }, []);

    const styles = {
        bar:{
            backgroundColor:'#77B178',
            boxShadow: '0px 8px 8px -6px #5f4698'
        },
        text:{
            fontFamily:'Kanit',
            fontWeight:'Bolder'
        },
        image:{
            height:'64px',
            width:'64px'
        }
    }

    return (
        <Navbar style={styles.bar} expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src={require('./sp_logo_small.png')} alt='Pathfinder' style={styles.image} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-example" />
                <Navbar.Collapse id="navbar-example">
                <Nav>
                    <Nav.Link
                    href='#home'
                    style={styles.text}
                    >Home</Nav.Link>
                    <NavDropdown
                    id="nav-dropdown-example"
                    title="Dropdown"
                    menuVariant="light"
                    style={styles.text}
                    >
                        <NavDropdown.Item href="#action/3.1">
                        Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                        Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                        Something
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;