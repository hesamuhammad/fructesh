import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions/Blog';
import { Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, } from 'reactstrap'

class Blog extends Component {

    componentDidMount = () => {
        this.props.fetchData();
    }

    render() {
       const  {data} = this.props;
    //    console.log(data);
        return (
            <div>
                <h1 style ={{textAlign: "center", paddingTop: "70px", paddingBottom: "20px"}}>OUR BLOG</h1>
                <Row >
                    {data.map(item => {
                       return (
                           <Col key={item.id} md="3" sm="6" xs="12" className="cardz">
                            <Card>
                                <CardImg top width="100%" src={item.image} alt="Card image cap" />
                                <CardBody>
                                <CardTitle>{item.title}</CardTitle>
                                <CardText>{item.phrase}</CardText>
                                </CardBody>
                            </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        data: state.blog.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Blog)