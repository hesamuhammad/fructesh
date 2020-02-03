import React from 'react';
import { Container, Row, Col, Input, ButtonToggle } from 'reactstrap';

const Example = (props) => {
  return (
      <div style={{backgroundColor: "#4c4c4c"}}>
    <Container style={{paddingTop: "50px", paddingBottom: "50px"}}>
      <Row>
        <Col xs="6" sm="4">
            <h2 style={{color: "white"}}>VISIT OUR FARM</h2>
            <p style={{width: "65%", color: "white"}}><i className='fa fa-map-marker'></i> 523 Sylvan Ave, 5th Floor
            Mountain View, CA 94041 USA</p>
            <div style={{display: "flex", paddingTop: "5px ", color: "white"}}>
            <p>Weekdays:08:00am - 08:00pm<br/>
            Weekday:08:00am - 08:00pm</p>
            </div>
            <hr/>
        </Col>
        <Col xs="6" sm="4">
            <h2 style={{color: "white"}}>QUICK LINKS</h2>
            <p href= "/home" style={{color: "white"}}>Home</p>
            <p href= "/about" style={{color: "white"}}>About</p>
            <p href= "/team" style={{color: "white"}}>Team</p>
            <p href= "/gallery" style={{color: "white"}}>Gallery</p>
            <p href= "/blog" style={{color: "white"}}>Blog</p>
            <p href= "/contacts" style={{color: "white"}}>Contacts</p>
        </Col>
        <Col sm="4">
            <h2 style={{width: "130%", color: "white"}}>GET IN TOUCH</h2>
            <p style={{color: "white"}}>Subscribe to our newsletter to receive weekly news, updates, special offers, and exclusive discounts.</p>
            <div style={{display: "flex", paddingTop: "30px "}}>
                <Input style={{backgroundColor: "#4c4c4c", borderStyle: "none"}} type="email" name="email" id="exampleEmail" placeholder="Enter your email address" />
                <ButtonToggle color="danger" style ={{paddingLeft: "30px", paddingRight: "30px"}}> Subscribe</ButtonToggle>
            </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Example;