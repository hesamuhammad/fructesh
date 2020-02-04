import React, { Component } from 'react'
import Copyright from '../components/Copyright';
import Footer from '../components/Footer'
import BannerFood from '../components/BannerFood'
import BannerAbout from '../components/BannerAbout';
import TeamComp from '../components/TeamComp'
import History from '../components/History'
import AboutCount from '../components/AboutCount';
import AboutFarm from '../components/AboutFarm';
import Map from '../components/Map'

export default class About extends Component {
    render() {
        return (
            <div>
                
                <BannerAbout/>
                <p style={{textAlign: "center", fontWeight: "600", paddingTop: "15px", fontSize: "12px", marginBottom: "70px"}}>HOME → ABOUT</p>
                <AboutFarm></AboutFarm>
                <History></History>
                <TeamComp></TeamComp>
                <AboutCount/>
                <BannerFood></BannerFood>
                <Map></Map>
                <Footer/>
                <Copyright/>
            </div>
        )
    }
}
