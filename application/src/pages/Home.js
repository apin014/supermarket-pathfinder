import React from "react";
import { Dropdown, Container, Row } from "react-bootstrap";
import WebFont from "webfontloader";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    React.useEffect(() => {
        WebFont.load({
          google: {
            families: ['Kanit', 'Barlow']
          }
        });
      }, []);

    return(
        <div style={{width: '100vw', height: '100vh', backgroundColor: '#77b178', paddingTop: '45vh'}}>
            <Container className="mw-100 p-0" style={{textAlign: 'center', width: '100%', height: '100%', overflow: 'auto'}}>
                <Row style={{paddingBottom: '1rem', fontFamily: 'Kanit', fontSize: '2rem', fontWeight: 'bolder'}}>
                    <p1>Welcome to Supermarket Pathfinder!</p1>
                </Row>
                <Row>
                    <Dropdown>
                        <Dropdown.Toggle style={{fontFamily: 'Barlow', backgroundColor: 'lightyellow', color: 'gray'}}>
                            Select your starting location
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{fontFamily: 'Barlow', backgroundColor: 'lightyellow'}}>
                            <Dropdown.Item href={`pathfinder/${1}`}>Location A</Dropdown.Item>
                            <Dropdown.Item href={`pathfinder/${2}`}>Location B</Dropdown.Item>
                            <Dropdown.Item href={`pathfinder/${3}`}>Location C</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
            </Container>
        </div>
    )
}

export default Home;