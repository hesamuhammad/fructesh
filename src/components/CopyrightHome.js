import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <div style={{backgroundColor: "#333333", paddingTop: "25px", paddingBottom: "20px"}}>
        <Container>
            <Row>
                <Col xs="6">.col-6</Col>
                <Col xs="6">
                  <h6 style={{textAlign: "center", color: "white"}}>© 2020 Fructesh. All rights reserved. Design by Zemez</h6>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Example;