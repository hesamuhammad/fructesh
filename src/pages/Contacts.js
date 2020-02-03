import React, { Component } from 'react';
import Copyright from '../components/Copyright';
import Footer from '../components/Footer'
import BannerContacts from '../components/BannerContacts';
export default class Gallery extends Component {
  render() {
      return (
          <div>
              <BannerContacts/>
              <Footer/>
              <Copyright/>
          </div>
      )
  }
}
