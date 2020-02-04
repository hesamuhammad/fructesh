import React, { Component} from 'react'
import { Container, Row, Col } from 'reactstrap';

export default class AboutCount extends Component {
    render() {
        return (
            <div>
            <div className="jumbotronHistory jumbotron-fluid" style={{height: "350px"}}>
                <Container>
                    <Row xs="4">
                        <Col 
                        style={{textAlign: "center", paddingTop: "5%", color: "white", width: "20%"}}
                        >
                            <h1
                            style={{fontWeight: "bold", fontSize: "55px"}}
                            >245</h1>
                            <p
                            style={{fontWeight: "bold", fontSize: "21px"}}
                            >Vegetables<br/>and fruits</p>
                        </Col>
                        <Col 
                        style={{textAlign: "center", paddingTop: "5%", color: "white"}}
                        >
                            <h1
                            style={{fontWeight: "bold", fontSize: "55px"}}
                            >382</h1>
                            <p
                            style={{fontWeight: "bold", fontSize: "21px"}}
                            >Reliable<br/>partners</p>
                        </Col>
                        <Col 
                        style={{textAlign: "center", paddingTop: "5%", color: "white"}}
                        >
                            <h1
                            style={{fontWeight: "bold", fontSize: "55px"}}
                            >1,267</h1>
                            <p
                            style={{fontWeight: "bold", fontSize: "21px"}}
                            >Satisfied<br/>customers</p>    
                        </Col>
                        <Col 
                        style={{textAlign: "center", paddingTop: "5%", color: "white"}}
                        >
                            <h1
                            style={{fontWeight: "bold", fontSize: "55px"}}
                            >474</h1>
                            <p
                            style={{fontWeight: "bold", fontSize: "21px"}}
                            >New blog<br/>articles</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            </div>
        )
    }
}

