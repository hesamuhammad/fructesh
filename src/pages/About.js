import React, { Component } from 'react'
import Copyright from '../components/Copyright';
import Footer from '../components/Footer'

export default class About extends Component {
    render() {
        return (
            <div>
                
                <p style={{textAlign: "center", fontWeight: "600", paddingTop: "15px", fontSize: "12px", marginBottom: "70px"}}>HOME → ABOUT</p>
                <Footer/>
                <Copyright/>
            </div>
        )
    }
}
