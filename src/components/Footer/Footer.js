import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Youtube, Twitter } from 'react-bootstrap-icons';
import { Link as Navlink } from "react-router-dom";

const Footer = () => {
  const style={
    color:"gainsboro",
    textDecoration:"none",
    display:"block"
  };
    return (
        <footer className="p-5 bg-dark">
          <Container>
            <Row>
              <Col sm={3}>
                <div className="my-4" >
                    <div className="mb-4">
                      <Facebook className="me-4" color="gainsboro" size={24}/> 
                      <Youtube className="me-4" color="gainsboro" size={24}/>
                      <Twitter className="me-4" color="gainsboro" size={24}/>
                    </div>
                    <p className="text-light">Contact: 34908834345</p>
                    <p className="text-light">Email: universityadcare@gmail.com</p>
                    <p className="text-light">Location: Sherpur Town,Sherpur,Mymensingh.</p>
                  </div>
              </Col>
              <Col sm={3}>
                    <div className="my-4" >
                      <h3 className="text-light">UAC</h3>
                      <div>
                          <Navlink style={style} to="/">Privecy policy</Navlink>
                          <Navlink style={style} to="/">Who We Are</Navlink>
                          <Navlink style={style} to="/">Terms of use</Navlink>
                      </div>
                    </div>
              </Col>
              <Col sm={3}>
                    <div className="my-4" >
                        <h3 className="text-light">Most Popular</h3>
                        <Navlink style={style} to="/">Spoken English</Navlink>
                        <Navlink style={style} to="/">DU A Unit Preperation</Navlink>
                        <Navlink style={style} to="/">Engineering Preperation</Navlink>
                        <Navlink style={style} to="/">Web Development</Navlink>
                    </div>
              </Col>
              <Col sm={3}>
                    <div className="my-4" >
                      <h3 className="text-light">Others</h3>
                      <Navlink style={style} to="/">Study</Navlink>
                      <Navlink style={style} to="/">Skills</Navlink>
                      <Navlink style={style} to="/">Books Store</Navlink>
                    </div>
              </Col>
            </Row>
            <p className="text-center text-light">Copyright © 2020-2021 UAC All Right Reserved.</p>
          </Container>
        </footer>
    );
};

export default Footer;