import React from 'react'
import './contactmap.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import { Row, Col } from 'reactstrap';

export default function Contact() {
    return (
        <div>

            <Row >
                <Col xs="12" md="7">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.051378767639!2d106.81254574992995!3d-6.256962362978541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f156003e69f5%3A0x21c34487e71fa617!2sGoWork%20Kemang%20X%20-%20Coworking%20and%20Office%20Space!5e0!3m2!1sen!2sid!4v1580793021150!5m2!1sen!2sid"
                        title="GoworkMaps"
                        width="100%"
                        height="550" frameborder="0"
                        style={{ border: 0 }}
                        allowfullscreen="">

                    </iframe>
                </Col>
                <Col xs="12" md="5">

                    <div>
                        <h2 className="contactmap">Contacts</h2>
                        <LocationOnIcon fontSize="small" />
                        <span className="adress"> 523 Sylvan Ave, 5th Floor Mountain View, CA 940 USA</span>
                        <div className="phonecard">
                            <PhoneIcon fontSize="small" />
                            <span> +1 (844) 123 456 78</span>

                        </div>
                    </div>


                    <form className="shake" id="contactForm" name="contact-form" data-toggle="validator" method="post">
                        <div className="form-group label-floating">

                            <input className="form-control" id="name" type="text" name="name" placeholder="Your name"></input>
                        </div>
                        <div className="form-group label-floating">
                            <input className="form-control" id="email" type="email" name="email" placeholder="Your email"></input>
                        </div>
                        <div className="form-group label-floating">
                            <input className="form-control" id="msg_subject" type="text" name="subject" placeholder="Your subject"></input>

                        </div>
                        <div className="form-group label-floating">
                            <textarea className="form-control" id="message" rows="4" name="message" placeholder="Your Message"></textarea>
                        </div>

                        <button type="submit" className="btn btn-danger send" >SEND</button>

                    </form>
                </Col>

            </Row>

        </div>
    )
}
