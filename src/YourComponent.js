import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Maps from './Maps';
let divStyle = {
  border: 'black',
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 20
};


function YourComponent(props) {
  
    return (
      <div id="divYourComponent" style={divStyle}>
          <Container>
            <h2>Bienvenido a Store Maps</h2>
            <Row>
            
              <Col xs={12} md={12} lg={6} xl={6}>
                 <Maps />
              </Col>
              <Col xs={12} md={12} lg={6} xl={6}>
                <div style={divStyle}>
                  aki iran los marcadores
                </div>
                <div style={divStyle}>
                  aki iran los marcadores
                </div>
                <div style={divStyle}>
                  aki iran los marcadores
                </div>
                <div style={divStyle}>
                  aki iran los marcadores
                </div>
                <div style={divStyle}>
                  aki iran los marcadores
                </div>
              </Col>
            </Row>
          </Container>
      </div>
    );
  
}

export default YourComponent;


