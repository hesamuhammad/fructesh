import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardText, Row, Col, Jumbotron, Container } from 'reactstrap';
import classnames from 'classnames';
//STYLE
import './aboutfarm.css'
import ImageGallery from 'react-image-gallery';

const images = [

    {
        original: 'https://images.unsplash.com/photo-1519544442-93857b48665e?ixlib=rb-1.2.1&auto=format&fit=crop&w=756&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1519544442-93857b48665e?ixlib=rb-1.2.1&auto=format&fit=crop&w=756&q=80',
    },
    {
        original: 'https://images.unsplash.com/photo-1578658760624-02f2558b5369?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1578658760624-02f2558b5369?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    },

    {
        original: 'https://images.unsplash.com/photo-1467825683276-01f37b99c328?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80:*',
        thumbnail: 'https://images.unsplash.com/photo-1467825683276-01f37b99c328?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    },
];

class MyGallery extends React.Component {

    render() {
        return (
            <div style={{ width: "500px", height: "400px" }}>

                <ImageGallery items={images} />
        </div>
        )
    }
}


const Example = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        About
            </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Our Mission
            </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        Our Vision
            </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="8">
                            <Card body>
                                <CardText>Since its foundation, Orange offers best organic fruits for local residents, fruit markets, and guests of our city. We are dedicated to improving your healthy food standards.</CardText>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="8">
                            <Card body>
                                <CardText>Since foundation, Orange offers best organic fruits for local residents, fruit markets, and guests of our city. We are dedicated to improving your healthy food standards.</CardText>
                            </Card>
                        </Col>

                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <Col sm="8">
                            <Card body>
                                <CardText>Since orange offers best organic fruits for local residents, fruit markets, and guests of our city. We are dedicated to improving your healthy food standards.</CardText>
                            </Card>
                        </Col>

                    </Row>
                </TabPane>

            </TabContent>
            <Button color="danger">READ MORE </Button>

        </div>
    );
}

export default function AboutFarm() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs="6">
                        <h1 className="farmer">
                            <i class="fa fa-quote-left" aria-hidden="true"></i>NEW GENERATION
                            OF FARMERS
                        </h1>
                        <Example />
                    </Col>
                    <Col xs="6">
                        <MyGallery />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
