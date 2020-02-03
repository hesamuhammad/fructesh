import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    //   <div style={{backgroundColor: "#ECECEC"}}>
        <Container fluid style={{backgroundColor: "#ECECEC", paddingTop: "60px", paddingBottom: "50px"}}>
        <Row style={{paddingLeft: "20%", paddingRight: "15%"}}>
            <Col><img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/clients-1-120x114.png" alt="1"/></Col>
            <Col><img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/clients-2-105x118.png" alt="2"/></Col>
            <Col><img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/clients-3-111x98.png" alt="3"/></Col>
            <Col><img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/clients-4-122x92.png" alt="4"/></Col>
            <Col><img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/clients-5-112x112.png" alt="5"/></Col>
        </Row>
        </Container>
    // </div>
  );
}

export default Example;