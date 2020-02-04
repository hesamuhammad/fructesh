import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardImg
} from "reactstrap";
import axios from "axios";
// import { Tab } from 'semantic-ui-react'

export default function GalleryContent() {
  const [allData, setAllData] = useState([]);
  // const [name, setName] = useState("");
  const urlAll = "https://api.unsplash.com/photos/?client_id=ba99555f25f272105c90ff4a7aeccfeae9af7e9a27d22fa02b3f03644d9b0ca6";

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(urlAll)
      .then(response => {
        if (response.status === 200) {
          const newData = response.data;
          setAllData(newData);
          // console.log(data);
        } else {
          console.log("Something is wrong with that status data");
        }
        console.log(response.data);
      });
  };

  return (
      
    <Container style={{ marginTop: "70px" }}>
      <Col md="12" xs="12">
      
        <Row>
          {allData.map((item, index) => {
            return (
              <Col key={index} md="3" sm="6" xs="12" className="cardz">
                <Card style={{marginBottom: "15px"}}>
                  <CardImg top width="100%" src={item.urls.regular} alt="Card image cap" 
                  />
                </Card>

              </Col>
            );
          })}
        </Row>
      </Col>
    </Container>
  );
}