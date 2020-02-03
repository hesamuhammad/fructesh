import React from 'react';
import { Jumbotron, Container, Row, Col, Card, CardImg, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
        <Jumbotron>
            <Container >
                <Row>
                    <Col xs="6"><img src="https://www.nicepng.com/png/full/400-4004002_two-new-product-developments-we-also-offer-are.png" alt="womendrinking"/></Col>
                    <Col xs="6" style={{paddingTop: "40px"}}><h1>WHY ORGANIC ?</h1>
                        <CardGroup style={{paddingTop: "50px"}}>
                            <Card style={{margin: "5px", borderRadius: "5%"}}>
                                <Container style={{borderRadius: "10%"}}>
                                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle style={{fontWeight: "bold"}}>ALWAYS FRESH</CardTitle>
                                <CardText>We deliver our products always fresh & organic so that you could enjoy your meal.</CardText>
                                </CardBody>
                                </Container>
                            </Card>
                            <Card style={{margin: "5px", borderRadius: "5%"}}>
                                <Container style={{borderRadius: "10%"}}>
                                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle style={{fontWeight: "bold"}}>MODERN FARM</CardTitle>
                                <CardText>Our farm combines modern technologies, innovations, and trusted farming traditions.</CardText>
                                </CardBody>
                                </Container>
                            </Card>
                        </CardGroup>
                        <CardGroup>
                            <Card style={{margin: "5px", borderRadius: "5%"}}>
                                <Container style={{borderRadius: "10%"}}>
                                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle style={{fontWeight: "bold"}}>100% ORGANIC</CardTitle>
                                <CardText>We adhere to our organic philosophy, which implies avoiding pesticides.</CardText>
                                </CardBody>
                                </Container>
                            </Card>
                            <Card style={{margin: "5px", borderRadius: "5%"}}>
                                <Container style={{borderRadius: "10%"}}>   
                                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle style={{fontWeight: "bold"}}>NO PESTICIDES</CardTitle>
                                <CardText>Our farming technologies are designed to avoid any pesticides in the fruits we offer.</CardText>
                                </CardBody>
                                </Container>
                            </Card>
                        </CardGroup>
                    </Col>   
                </Row>
            </Container>
        </Jumbotron>
    </div>
  );
};

export default Example;