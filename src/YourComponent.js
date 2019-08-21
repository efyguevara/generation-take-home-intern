import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Navs from './Navs'
import Maps from './Maps';
import Favorites from './Favorites';
let divStyle = {
  border: 'black',
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 20
};


function YourComponent(props) {

  return (
    <div id="divYourComponent" style={divStyle}>
      <Container-fluid>
        <Navs />
        <Row>
          <Col xs={12} md={12} lg={8} xl={8} className="showMap">
            <Maps/>
          </Col>
          <Col xs={12} md={12} lg={4} xl={4}  className="showMap">
            <Favorites/>
          </Col>
        </Row>
      </Container-fluid>
    </div>
  );

}

export default YourComponent;


