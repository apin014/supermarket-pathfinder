import React from "react";
import { Dropdown, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return(
        <div style={{width: '100vw', height: '100vh', backgroundColor: 'lightgreen', paddingTop: '50vh'}}>
            <Container className="mw-100 p-0" style={{textAlign: 'center'}}>
                <Row>
                    <p1>Welcome to Supermarket Pathfinder!</p1>
                </Row>
                <Row>
                    <Dropdown>
                        <Dropdown.Toggle>
                            Select your starting location
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Location A</Dropdown.Item>
                            <Dropdown.Item>Location B</Dropdown.Item>
                            <Dropdown.Item>Location C</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
            </Container>
        </div>
    )
}

export default Home;