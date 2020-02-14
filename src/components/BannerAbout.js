import React, { Component} from 'react'
import { Container } from 'reactstrap';

export default class BannerAbout extends Component {
    render() {
        return (
            <div>
            <div className="jumbotronHistory jumbotron-fluid" style={{height: "350px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                {/* <Container > */}
                    <h1 className="textBanner"
                    style={{textAlign: "center", verticalAlign: "center", color : "white", fontSize: "55px", fontWeight: "bold", fontFamily: "Poppins, sans-serif", textShadow: "6px 5px 10px rgba(0, 0, 0, 0.3)"}}
                    >ABOUT US</h1>
                    <p className="textBanner"
                    style={{textAlign: "center", verticalAlign: "center", color : "white", fontSize: "21px", paddingLeft: "22%", paddingRight: "22%"}}>We are industry-leading organic farm delivering the best products
                    that boost your daily life energy and potential.</p>
                {/* </Container> */}
            </div>
            </div>
        )
    }
}

