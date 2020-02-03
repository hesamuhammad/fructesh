import React, { Component } from 'react'
import { Container } from 'reactstrap';

export default class Copyright extends Component {
    render() {
        return (
            <div style={{backgroundColor: "#f3f3f3", paddingTop: "25px", paddingBottom: "20px"}}>
                <Container>
                    {/* <div style={{backgroundColor: "gray"}}> */}
                        <h6 style={{textAlign: "center", color: "gray"}}>© 2020 Fructesh. All rights reserved. Design by Zemez</h6>
                    {/* </div> */}
                </Container>
            </div>
        )
    }
}
