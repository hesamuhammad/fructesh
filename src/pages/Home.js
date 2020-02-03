import React, { Component } from 'react'
import HomeCarousel1 from '../components/HomeCarousel1'
import HomeJumbotron1 from '../components/HomeJumbotron1'
import HomeJumbotron2 from '../components/HomeJumbotron2'
import HomeBanner from '../components/HomeBanner'
import TeamComp from '../components/TeamComp';
import BannerFood from '../components/BannerFood'
export default class Home extends Component {
    render() {
        return (
            <div>
                <HomeCarousel1></HomeCarousel1>
                <HomeJumbotron1></HomeJumbotron1>
                <HomeJumbotron2></HomeJumbotron2>
                <TeamComp></TeamComp>
                <HomeBanner></HomeBanner>
                <BannerFood></BannerFood>
            </div>
        )
    }
}
