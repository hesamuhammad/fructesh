import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions/Blog';
import { Row, Col, Button, Container } from 'reactstrap'

class Blog extends Component {

    componentDidMount = () => {
        this.props.fetchData();
    }

    render() {
       const  {data} = this.props;
    //    console.log(data);
        return (
            <div>
                <Row >
                    {data.map(item => {
                       return (
                       <Container className="themed-container" fluid="lg" key={item.id} style={{width: "60%"}}>
                        {/* <Fragment key={item.id}> */}
                        <Col>
                            <h1 style={{textAlign:"center"}}>{item.title}</h1>
                            <p>By {item.name} in News Posted {item.date}</p>
                            <img style={{width:"100%"}} src={item.image}/>
                            <p>{item.phrase}</p>
                            <Row>
                            <Col>
                                <Button type="dashed" size='large'><i className='fa fa-comment'></i></Button>
                            </Col>
                            <Col>
                                <Button type="danger" size='large'>Read More</Button>
                            </Col>
                            </Row>
                        </Col>
                        {/* </Fragment> */}
                        </Container>
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