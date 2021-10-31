import React from 'react';
import Banner from '../Banner/Banner';
import { Col, Container, Row } from 'react-bootstrap';
import Services from '../Services/Services';
// import AnimatedNumber from 'react-animated-number'


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Container>
                <h1 className="text-center text-light mt-4">Why You Choose Us?</h1>
                <Row>
                    <Col md={6} sm={6} xs={12}> 
                    <div className="text-light bg-secondary p-2 m-2">
                        <h1>One Stop Solution</h1>
                        <p>We understand how to make logistics work for our merchant partners. Our job is to let our partners focus on their core business while we take care of the rest.</p>
                    </div>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                    <div className="text-light bg-secondary p-2 m-2">
                        <h1>Wide Coverage</h1>
                        <p>We have a dedicated delivery channel of 350+ delivery agents in Dhaka and Chattogram. We have partnered with 50+ franchises as well.</p>
                    </div>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                    <div className="text-light bg-secondary p-2 m-2">
                        <h1>Full Tracking</h1>
                        <p>Merchants have full access of tracking every step of the delivery. We provide end to end real time tracking facilities through email, sms and QR code.</p>
                    </div>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                        <div className="text-light bg-secondary p-2 m-2">
                            <h1>Fastest Service</h1>
                            <p>Our team works round the clock to ensure fastest delivery and minimize cancellation ratio so that we can ensure our customer’s growth.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            
            <Container>
                <h1 className="text-light">Our Acheivements</h1>
                <Row  className="text-center">
                    <Col md={6} sm={6} xs={12}> 
                        <h1 className="text-light bg-secondary m-2">64
                         <br /> Districts Coverage</h1>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                        <h1 className="text-light bg-secondary m-2">1,000 <br /> Delivery Agents</h1>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                        <h1 className="text-light bg-secondary m-2 ">25,000 <br /> Registered Merchants</h1>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                     <h1 className="text-light bg-secondary m-2">2.5 Milions <br /> Parcels Delivered</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;