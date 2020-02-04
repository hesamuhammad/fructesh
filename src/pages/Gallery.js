import React, { Component } from 'react'
import Copyright from '../components/Copyright';
import Footer from '../components/Footer'
import BannerGallery from '../components/BannerGallery';
import GalleryContent from '../components/GalleryContent'

export default class Gallery extends Component {
    render() {
        return (
            <div>
                <BannerGallery/>
                <p style={{textAlign: "center", fontWeight: "600", paddingTop: "15px", fontSize: "12px", marginBottom: "70px"}}>HOME → TEAM</p>
                <GalleryContent></GalleryContent>
                <Footer/>
                <Copyright/>
            </div>
        )
    }
}
