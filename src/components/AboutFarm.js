import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
//STYLE
import './aboutfarm.css'
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/grid-gallery-2-370x315.jpg',
        thumbnail: 'https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/grid-gallery-2-370x315.jpg',
    },
    {
        original: 'https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/12/offers-3.jpg',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mangoes-composition-royalty-free-image-463651383-1564092088.jpg?crop=0.668xw:1.00xh;0.322xw,0&resize=768:*',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

class MyGallery extends React.Component {

    render() {
        return <ImageGallery items={images} style={{ height: "100px" }} />;
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
            <div className="row banner-farmer">
                <div class="col">
                    <h1 className="farmer">
                        NEW GENERATION
                        OF FARMERS
                    </h1>
                    <Example />
                </div>
                <div class="col">
                    <MyGallery />
                </div>
            </div>
        </div>
    )
}
