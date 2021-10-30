import React from 'react';
import Banner from '../Banner/Banner';
import we from '../../images/we.png'
import { Col, Container, Row } from 'react-bootstrap';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <div>
                <h1 className="text-muted">Our Story</h1>
                <div>
                    <img src={we} alt="" width="100%" />
                </div>
                <p className="text-light">eCourier is Bangladesh’s most trusted on-demand last mile logistics network offering tech-enabled one stop delivery solutions. Since its inception in 2014, our vision has been to become the operating system for e-commerce in Bangladesh, through a combination of world-class infrastructure, logistics operations of the highest quality and cutting-edge technology capabilities.We take care of order fulfillment, collection, transport, tracking and delivery of parcels. We are the first in Bangladesh to have created a unique network with home delivery and Store Pickup & Return services which enhances customer experience and rationalizes costs.</p>
            </div>
            <Container>
                <h1 className="text-light">Our Acheivements</h1>
                <Row  className="text-center">
                    <Col md={6} sm={6} xs={12}> 
                        <h1 className="text-light bg-secondary m-2">branchs</h1>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                        <h1 className="text-light bg-secondary m-2">branchs</h1>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                        <h1 className="text-light bg-secondary m-2 ">branchs</h1>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                     <h1 className="text-light bg-secondary m-2">branchs</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;