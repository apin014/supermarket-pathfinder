import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useEffect} from 'react';
import WebFont from 'webfontloader';
import './Components.css';

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
            boxShadow: '0px 8px 8px -6px grey',
        },
        text:{
            fontFamily:'Barlow',
            fontWeight:'Bolder'
        },
        title: {
            fontFamily:'Kanit',
            fontWeight: 'Bolder'
        },
        image:{
            height:'3rem',
            width:'3rem'
        }
    }

    return (
        <Navbar style={styles.bar} expand="lg" sticky="top" className='navbar'>
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src={require('./sp_logo_small.png')} alt='Pathfinder' style={styles.image} />
                    <span style={styles.title}>Supermarket Pathfinder</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-example" />
                <Navbar.Collapse id="navbar-example">
                <Nav>
                    <Nav.Link
                    href='/'
                    style={styles.text}
                    >Home</Nav.Link>
                    <NavDropdown
                    id="nav-dropdown-example"
                    title="Select Starting Point"
                    menuVariant="light"
                    style={styles.text}
                    >
                        <NavDropdown.Item href={`/pathfinder/${'A'}`}>
                        Location A
                        </NavDropdown.Item>
                        <NavDropdown.Item href={`/pathfinder/${'B'}`}>
                        Location B
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;