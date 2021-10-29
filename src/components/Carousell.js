import React from "react";
import p1 from "../images/banner1.jpg";
import p7 from "../images/banner2.jpg";
import p8 from "../images/banner4.jpg";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardMedia } from "@material-ui/core";

export default function Carousell() {
	return (
		<div style={{ width: "100%", backgroundColor: "#d8f3ea", padding: 20 }}>
			<Carousel>
				<Carousel.Item interval={1500}>
					<CardMedia src={p8} height="400" component="img" />
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<CardMedia src={p1} height="400" component="img" />
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<CardMedia src={p7} height="400" component="img" />
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

/*
import React from 'react';
import p1 from '../images/banner1.jpg';
import p7 from '../images/banner2.jpg'
import p8 from '../images/banner4.jpg'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carousell(){
    return(
    <div style={{width:'100%',backgroundColor:'#d8f3ea'}} >
            <Carousel>
                <Carousel.Item interval={1500}>
                  <img
                    className="d-block w-100"
                    src={p8}
                    alt="First slide"
                    style={{width:'100%',height:'400px',paddingLeft:'20px',paddingRight:'20px',paddingBottom:'10px',paddingTop:'10px',borderBlock:'solid',borderBlockColor:'red'}}
                  />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                  <img
                    className="d-block w-100"
                    src={p1}
                    alt="Second slide"
                    style={{width:'100%',height:'400px',paddingLeft:'20px',paddingRight:'20px',paddingBottom:'10px',paddingTop:'10px',borderBlock:'solid',borderBlockColor:'red'}}
                  />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                  <img
                    className="d-block w-100"
                    src={p7}
                    alt="Third slide"
                    style={{width:'100%',height:'400px',paddingLeft:'20px',paddingRight:'20px',paddingBottom:'10px',paddingTop:'10px',borderBlock:'solid',borderBlockColor:'red'}}
                  />
                </Carousel.Item>
                
            </Carousel>
            </div>
    )
}
*/
