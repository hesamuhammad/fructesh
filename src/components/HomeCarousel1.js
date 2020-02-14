import React, { Component } from "react";
import Slider from "react-slick";
import { Jumbotron, Container, Row, Col, Button} from 'reactstrap';
// import './jumbotron.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <Jumbotron>
            <Container >
                <Row>
                    <Col xs="6" style={{paddingTop: "40px"}}>
                      {/* <h3>PROVIDING QUALITY PRODUCTS</h3> */}
                    <Jumbotron fluid>
                        {/* <Container fluid> */}
                          <h4 style={{textAlign: "center"}}>PROVIDING QUALITY PRODUCTS</h4>
                          <h3 className="display-4" style={{fontWeight: "bold", textAlign: "center", paddingTop: "5%"}}>ORGANIC FRUITS</h3>
                          <h2 style ={{paddingLeft: "15%", fontSize: "35px", paddingTop: "5%"}} className="lead">100% HEALTHY &</h2>
                          <h2 style ={{paddingLeft: "15%", fontSize: "35px", paddingTop: "2%"}} className="lead">AFFORDABLE</h2>

                          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Button color="danger"style={{ paddingLeft: "8%", paddingRight: "8%", borderRadius: "9%"}}>
                              <h4 style={{fontSize: "14px", fontWeight: "bold", paddingTop: "17%", paddingBottom: "10%"}}>ABOUT US</h4>
                            </Button>
                          </div>
                        {/* </Container> */}
                      </Jumbotron>
                    </Col>   
                    <Col xs="6">
                      <Container>
                      <img src="https://www.nicepng.com/png/full/88-883212_emmett-blahnik-shows-you-how-to-transform-your.png" alt="womendrinking" style={{width: "157%"}}/>
                      </Container>
                      </Col>
                </Row>
            </Container>
        </Jumbotron>
          </div>
          <div>
          <Jumbotron>
            <Container >
                <Row>
                    <Col xs="6" style={{paddingTop: "40px"}}>
                      {/* <h3>PROVIDING QUALITY PRODUCTS</h3> */}
                    <Jumbotron fluid>
                        <Container fluid>
                          <h4 style={{textAlign: "center"}}>SUMMER DISCOUNT UP TO 40%</h4>
                          <h3 className="display-4" style={{fontWeight: "bold", textAlign: "center", paddingTop: "5%"}}>A WIDE VARIETY</h3>
                          <h2 style ={{paddingLeft: "15%", fontSize: "35px", paddingTop: "5%"}} className="lead">
                            OF DIFFERENT FRUITS
                            </h2>
                          <h2 style ={{paddingLeft: "15%", fontSize: "35px", paddingTop: "2%"}} className="lead">AFFORDABLE</h2>
                          <div style={{alignItems: "center", marginTop: "7%"}}>
                            <Button color="danger"style={{ paddingLeft: "8%", paddingRight: "8%", borderRadius: "9%"}}>
                              <h4 style={{fontSize: "14px", fontWeight: "bold", paddingTop: "17%", paddingBottom: "10%", textAlign: "center"}}>ABOUT US</h4>
                            </Button>
                          </div>
                        </Container>
                      </Jumbotron>
                    </Col>   
                    <Col xs="6">
                      <img src="https://www.nicepng.com/png/full/5-56132_fresh-fruits-png-fresh-fruits.png" alt="womendrinking" style={{width: "175%"}}/>
                      </Col>
                </Row>
            </Container>
        </Jumbotron>
          </div>
        </Slider>
      </div>
    );
  }
}