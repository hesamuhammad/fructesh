import React, { Component} from 'react'
import { Container } from 'reactstrap';

export default class BannerGallery extends Component {
    render() {
        return (
            <div className="BannerTeam">
                <Container>
                    <h1 
                    style={{textAlign: "center", verticalAlign: "center", color : "white", fontSize: "55px", fontWeight: "bold", fontFamily: "Poppins, sans-serif", textShadow: "6px 5px 10px rgba(0, 0, 0, 0.3)"}}
                    >GRID GALLERY</h1>
                </Container>
            </div>
        )
    }
}

