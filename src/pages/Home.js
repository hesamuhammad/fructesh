import React, { Component } from 'react'
import HomeCarousel1 from '../components/HomeCarousel1'
import HomeJumbotron1 from '../components/HomeJumbotron1'
import HomeJumbotron2 from '../components/HomeJumbotron2'
import HomeBanner from '../components/HomeBanner'
import TeamComp from '../components/TeamComp';
import BannerFood from '../components/BannerFood'
import FooterHome from '../components/FooterHome'
import CopyrightHome from '../components/CopyrightHome'
import AboutFarm from '../components/AboutFarm'
import Testimonial from '../components/Testimonial';
import BlogHome from '../components/BlogHome';
export default class Home extends Component {
    render() {
        return (
            <div>
                <HomeCarousel1></HomeCarousel1>
                <HomeJumbotron1></HomeJumbotron1>
                <AboutFarm></AboutFarm>
                <HomeJumbotron2></HomeJumbotron2>
                <TeamComp></TeamComp>
                <HomeBanner></HomeBanner>
                <Testimonial></Testimonial>
                <BlogHome></BlogHome>
                <BannerFood></BannerFood>
                <FooterHome></FooterHome>
                <CopyrightHome></CopyrightHome>
            </div>
        )
    }
}
