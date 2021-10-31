import React from 'react';
import Banner from '../Banner/Banner';
import { Col, Container, Row } from 'react-bootstrap';
import Services from '../Services/Services';
import AnimateNum from '../AnimateNum/AnimateNum';
import { ClipboardCheck, Lightning, Map, Subtract } from 'react-bootstrap-icons';
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
                    <div className="text-light text-center border border-2 p-2 m-2">
                        <div className="mb-4"><ClipboardCheck color='orange' size={100} /></div>
                        
                        <h1 className='text-warning'>One Stop Solution</h1>
                        <p>We understand how to make logistics work for our merchant partners. Our job is to let our partners focus on their core business while we take care of the rest.</p>
                    </div>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                    <div className="text-light text-center border border-2 p-2 m-2">
                        <div className="mb-4"><Map color='orange' size={100}/></div>
                        <h1 className='text-warning'>Wide Coverage</h1>
                        <p>We have a dedicated delivery channel of 350+ delivery agents in Dhaka and Chattogram. We have partnered with 50+ franchises as well.</p>
                    </div>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                    <div className="text-light text-center border border-2 p-2 m-2">
                        <div className="mb-4"><Subtract color='orange' size={100}/></div>
                        <h1 className='text-warning'>Full Tracking</h1>
                        <p>Merchants have full access of tracking every step of the delivery. We provide end to end real time tracking facilities through email, sms and QR code.</p>
                    </div>
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                        <div className="text-light text-center border border-2 p-2 m-2">
                            <div className="mb-4"><Lightning color='orange' size={100}/></div>
                            <h1 className='text-warning'>Fastest Service</h1>
                            <p>Our team works round the clock to ensure fastest delivery and minimize cancellation ratio so that we can ensure our customer’s growth.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            
            <Container>
                <h1 className="text-light text-center my-4">Our Acheivements</h1>
                <AnimateNum></AnimateNum>
            </Container>
        </div>
    );
};

export default Home;