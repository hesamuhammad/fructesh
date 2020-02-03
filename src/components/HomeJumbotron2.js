import React from 'react';
import { Jumbotron, Container, Row, Col, ButtonToggle } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 style={{textAlign: "center"}}>FEATURED OFFERS</h1>
          <p className="lead" style={{textAlign: "center"}}>Take a look at organic fruits that we offer on a regular basis.</p>
            <Container style={{display: "flex", justifyContent: "center"}}>
                <Row xs="3">
                    <Col><img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/offers-1.jpg"></img>
                    </Col>
                    <Col><img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/offers-2.jpg"></img>
                    </Col>
                    <Col><img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/offers-3.jpg"></img>
                    </Col>
                    <Col><img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/offers-4.jpg"></img>
                    </Col>
                    <Col><img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/offers-5.jpg"></img>
                    </Col>
                    <Col><img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/offers-6.jpg"></img>
                    </Col>
                </Row>
            </Container>
            <Container>
            <ButtonToggle color="danger">Read More</ButtonToggle>
            </Container>
                
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;