import React, { Component } from 'react'
import Copyright from '../components/Copyright';
import Footer from '../components/Footer'
import Blog from '../components/Blog'

export default class Example extends Component {
    render() {
        return (
            <div>
                <Blog></Blog>
                <Footer/>
                <Copyright/>
            </div>
        )
    }
}
