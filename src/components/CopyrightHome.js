import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <div style={{backgroundColor: "#333333", paddingTop: "25px", paddingBottom: "20px"}}>
        <Container>
            <Row>
                <Col xs="6">
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-behance-square" aria-hidden="true"></i>
                </Col>
                <Col xs="6">
                  <h6 style={{textAlign: "center", color: "white"}}>© 2020 Fructesh. All rights reserved. Design by Zemez</h6>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Example;