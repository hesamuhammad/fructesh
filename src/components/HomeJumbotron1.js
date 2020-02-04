import React from 'react';
import { Jumbotron, Container, Row, Col, Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';

const Example = (props) => {
  return (
    <div style={{height: "550"}}>
        <Jumbotron style={{marginBottom: "0", marginTop: "0"}}>
            <Container >
                <Row>
                    <Col xs="6"><img src="https://www.nicepng.com/png/full/400-4004002_two-new-product-developments-we-also-offer-are.png" alt="womendrinking" style={{width: "100%"}}/></Col>
                    <Col xs="6" style={{paddingTop: "40px"}}>
                        <h1>WHY ORGANIC ?</h1>
                        <CardGroup style={{paddingTop: "50px"}}>
                            <Card style={{margin: "5px", borderRadius: "5%"}}>
                                <Container style={{borderRadius: "10%"}}>
                                <img src="https://www.svgrepo.com/show/25023/banana.svg" alt="Card image cap" style={{width: "30%", paddingLeft: "8%", paddingTop: "13%", paddingBottom: "10%"}}/>
                                <CardBody>
                                <CardTitle style={{fontWeight: "bold"}}>ALWAYS FRESH</CardTitle>
                                <CardText>We deliver our products always fresh & organic so that you could enjoy your meal.</CardText>
                                </CardBody>
                                </Container>
                            </Card>
                            <Card style={{margin: "5px", borderRadius: "5%"}}>
                                <Container style={{borderRadius: "10%"}}>
                                <img src="https://www.brandeps.com/icon-download/H/Home-icon-vector-04.svg" alt="Card image cap" style={{width: "35%", paddingLeft: "6%", paddingTop: "8%"}}/>
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
                                <img src="https://www.brandeps.com/icon-download/L/Leaf-icon-vector-01.svg" alt="Card image cap" style={{width: "38%", paddingLeft: "2%", paddingTop: "2%"}}/>
                                <CardBody>
                                <CardTitle style={{fontWeight: "bold"}}>100% ORGANIC</CardTitle>
                                <CardText>We adhere to our organic philosophy, which implies avoiding pesticides.</CardText>
                                </CardBody>
                                </Container>
                            </Card>
                            <Card style={{margin: "5px", borderRadius: "5%"}}>
                                <Container style={{borderRadius: "10%"}}>   
                                <img src="https://www.brandeps.com/icon-download/B/Bug-icon-vector-01.svg" alt="Card image cap" style={{width: "38%", paddingLeft: "2%", paddingTop: "2%"}}/>
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