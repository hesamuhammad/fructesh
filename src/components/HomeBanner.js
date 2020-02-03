import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, ButtonToggle  } from 'reactstrap';

const Example = (props) => {
  return (
      <div style={{backgroundColor: "#dadada", paddingTop: "6%", paddingBottom: "10%"}} className="BannerTeam">
            <>
            <Container className="themed-container" fluid="lg">
                <Row xs="3">
                    <Col style={{paddingLeft: "15%"}}>
                        <h2 style={{color: "white"}}>
                            STAY
                        </h2>
                        <h2 style={{color: "white"}}>
                            CONNECTED
                        </h2>
                        <p style={{color: "white"}}>
                            Subscribe to our newsletter
                        </p>
                    </Col>
                    <Container>
                    <Col>
                        <Form>
                            <FormGroup>
                                <Input style={{backgroundColor:"none", borderStyle: "none"}} type="email" name="email" id="exampleEmail" placeholder="Enter your email address" />
                            </FormGroup>
                        </Form>
                    </Col>
                    </Container>
                    <Col>
                        <ButtonToggle color="danger">Subscribe</ButtonToggle>
                    </Col>
                </Row>
            </Container>
            </>
    </div>
  );
}

export default Example;