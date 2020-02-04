import React from 'react';
import { Container, Row, Col, Input, ButtonToggle } from 'reactstrap';

const Example = (props) => {
  return (
    <Container style={{paddingTop: "50px", paddingBottom: "50px"}}>
      <Row>
        <Col xs="6" sm="4">
            <img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/11/retina-logo.png" alt='gambar logo' style={{width:"60%"}}/><br/>
            <div style={{display: "flex", paddingTop: "35px "}}>
                <span style={{fontWeight: "bold", paddingRight: "10px"}}>Weekdays: </span><p>08:00am - 08:00pm</p>
            </div>
            <div style={{display: "flex", paddingTop: "27px "}}>
                <span style={{fontWeight: "bold", paddingRight: "10px"}}>Weekday: </span><p>08:00am - 08:00pm</p>
            </div>
            <hr/>
            <div style={{display: "flex", justifyContent:"space-around", paddingLeft: "3%", paddingRight: "60%"}}>
            <i className='fa fa-facebook'></i>
            <i className='fa fa-twitter'></i>
            <i className='fa fa-instagram'></i>
            <i className='fa fa-behance'></i>
            </div>
            
        </Col>
        <Col xs="6" sm="4">
            <h2>CONTACTS</h2>
            <p style={{width: "65%"}}><i className='fa fa-map-marker' style={{marginRight: "3%"}}></i> 523 Sylvan Ave, 5th Floor
            Mountain View, CA 94041 USA</p>
            <p><i className='fa fa-map-marker' style={{marginRight: "3%"}}></i> +1 (844) 123 456 78</p>
            <p><i className='fa fa-envelope' style={{marginRight: "3%"}}></i> info@demolink.org</p>
        </Col>
        <Col sm="4">
            <h2 style={{width: "130%"}}>GET IN TOUCH</h2>
            <p>Subscribe to our newsletter to receive weekly news, updates, special offers, and exclusive discounts.</p>
            <div style={{display: "flex", paddingTop: "30px "}}>
                <Input style={{backgroundColor: "#ffffff", borderStyle: "none"}} type="email" name="email" id="exampleEmail" placeholder="Enter your email address" />
                <ButtonToggle color="danger" style ={{paddingLeft: "30px", paddingRight: "30px"}}> Subscribe</ButtonToggle>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Example;