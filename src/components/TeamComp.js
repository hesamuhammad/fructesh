import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  Container,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
// import { FaBeer } from 'react-icons/fa';

export default class TeamComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      item1: [],
      item2: [],
      item3: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const data1 = await axios.get("https://api.github.com/users/elindas")
    const data2 = await  axios.get("https://api.github.com/users/hesamuhammad")


    this.setState({item1: data1.data})
    this.setState({item2: data2.data})
  };

  render() {
    const { item1,item2,item3 } = this.state;console.log(item1, item2, item3)    

    return (
      <div style={{marginTop: "25px"}}>
        <h1 style={{textAlign: "center"}}>Our Team</h1>
        <Container
          fluid={true}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center", marginTop: "50px"
          }}
        >
          <Card style={{width: "320px", alignItems: "center", borderStyle: "none", marginRight: "15px"}}>
            <CardImg
              top
              width="100%"
              src={item1.avatar_url}
              alt="Card image cap"
              style={{borderRadius: "7%"}}
            />
            <CardBody>
              <h4 style={{ textAlign: "center" , fontWeight: "bold"}}>{item1.name}</h4>
              <CardTitle style={{ textAlign: "center" }}>
                {/* github.com/{item1.login} */}
                <br/>
              </CardTitle>
              <CardSubtitle style={{ textAlign: "center" }}>
              {item1.name} is our sales manager who likes to promote the benefits of organic food.
                <br/>
                {/* {item1.id} */}
                <br/>
                {/* {item1.url} */}
                <i class="fa fa-facebook-square" aria-hidden="true" style={{fontSize: "30px"}}></i>
                <i class="fa fa-twitter-square" aria-hidden="true" style={{fontSize: "30px"}}></i>
                <i class="fa fa-instagram" aria-hidden="true" style={{fontSize: "30px"}}></i>
                <i class="fa fa-behance-square" aria-hidden="true" style={{fontSize: "30px"}}></i>
              </CardSubtitle>
            </CardBody>
          </Card>
          <Card style={{width: "320px", alignItems: "center", borderStyle: "none", marginLeft: "15px"}}>
            <CardImg
              top
              width="100%"
              src={item2.avatar_url}
              alt="Card image cap"
              style={{borderRadius: "7%"}}
            />
            <CardBody>
              <h4 style={{ textAlign: "center" }}>{item2.name} Muhammad</h4>
              <CardTitle style={{ textAlign: "center", fontWeight: "bold" }}>
                {/* github.com/{item2.login} */}
                <br/>
              </CardTitle>
              <CardSubtitle style={{ textAlign: "center" }}>
              Mas {item2.name} is our leading fruit processing expert with over 20 years of experience.
                <br/>
                {/* {item2.id} */}
                <br/>
                {/* {item2.url} */}
                <i class="fa fa-facebook-square" aria-hidden="true" style={{fontSize: "30px"}}></i>
                <i class="fa fa-twitter-square" aria-hidden="true" style={{fontSize: "30px"}}></i>
                <i class="fa fa-instagram" aria-hidden="true" style={{fontSize: "30px"}}></i>
                <i class="fa fa-behance-square" aria-hidden="true" style={{fontSize: "30px"}}></i>
              </CardSubtitle>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}