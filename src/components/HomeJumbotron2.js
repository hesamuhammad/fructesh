import React from 'react';
import { Jumbotron, Container, Row, Col, ButtonToggle, Card, CardImg, } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 style={{textAlign: "center"}}>FEATURED OFFERS</h1>
          <p className="lead" style={{textAlign: "center"}}>Take a look at organic fruits that we offer on a regular basis.</p>
            <Container style={{display: "flex", justifyContent: "center"}}>
                <Row xs="3">
                    <Col>
                    {/* <img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/offers-1.jpg" alt="satu"></img> */}
                    <Card>
                      <CardImg top width="100%" src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/offers-1.jpg" alt="Card image cap" />
                    </Card>
                    </Col>
                    
                    <Col>
                    {/* <img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/offers-2.jpg" alt="dua"></img> */}
                    <Card>
                      <CardImg top width="100%" src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/offers-2.jpg" alt="Card image cap" />
                    </Card>
                    </Col>

                    <Col>
                    {/* <img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/offers-3.jpg" alt="tiga"></img> */}
                    <Card>
                      <CardImg top width="100%" src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/offers-3.jpg" alt="Card image cap" />
                    </Card>
                    </Col>

                    <Col>
                    {/* <img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/offers-4.jpg" alt="empat"></img> */}
                    <Card>
                      <CardImg top width="100%" src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/offers-4.jpg" alt="Card image cap" />
                    </Card>
                    </Col>

                    <Col>
                    {/* <img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/offers-5.jpg" alt="lima"></img> */}
                    <Card>
                      <CardImg top width="100%" src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/offers-5.jpg" alt="Card image cap" />
                    </Card>
                    </Col>

                    <Col>
                    {/* <img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/offers-6.jpg" alt="enam"></img> */}
                    <Card>
                      <CardImg top width="100%" src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/offers-6.jpg" alt="Card image cap" />
                    </Card>
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