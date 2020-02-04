import React, { Component } from 'react'
import TeamComp from '../components/TeamComp';
import Copyright from '../components/Copyright';
import Footer from '../components/Footer';
import BannerFood from '../components/BannerFood'
import BannerTeam from '../components/BannerTeam'
export default class Team extends Component {
    render() {
        return (
            <div>
                <BannerTeam></BannerTeam>
                <p style={{textAlign: "center", fontWeight: "600", paddingTop: "15px", fontSize: "12px", marginBottom: "70px"}}>HOME → TEAM</p>
                <TeamComp/>
                <BannerFood></BannerFood>
                <Footer/>
                <Copyright/>
            </div>
        )
    }
}
