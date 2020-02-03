import React, { Component } from 'react'
import TeamComp from '../components/TeamComp'
import Copyright from '../components/Copyright';
import Footer from '../components/Footer'
export default class Team extends Component {
    render() {
        return (
            <div>
                <TeamComp/>
                <Footer/>
                <Copyright/>
            </div>
        )
    }
}
