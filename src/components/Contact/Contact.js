import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { EnvelopeFill, GeoAlt, TelephoneFill } from 'react-bootstrap-icons';

const Contact = () => {
    
    return (
        <Container>
            <div>
                <div>
                    <img src='https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/economie/avec-deliveroo-le-dialogue-social-a-toujours-ete-unilateral-deplore-un-ancien-livreur-3913324/53358528-1-fre-FR/Avec-Deliveroo-le-dialogue-social-a-toujours-ete-unilateral-deplore-un-ancien-livreur.jpg' alt="" width="100%" height="500px" />
                </div>
                <h1 className="text-light text-center">Our Story</h1>
                    <p className="text-info">Easy Courier is Bangladesh’s most trusted on-demand last mile logistics network offering tech-enabled one stop delivery solutions. Since its inception in 2014, our vision has been to become the operating system for e-commerce in Bangladesh, through a combination of world-class infrastructure, logistics operations of the highest quality and cutting-edge technology capabilities.We take care of order fulfillment, collection, transport, tracking and delivery of parcels. We are the first in Bangladesh to have created a unique network with home delivery and Store Pickup & Return services which enhances customer experience and rationalizes costs.</p>
                    import React from "react";
            </div>
            <div>
                <h2>Contact Us</h2>
                <Container className="p-2">
                    <Row xs={1} md={4} className="text-center text-light">
                    <Col md={4}>
                        <div>
                            <GeoAlt style={{color:"blueviolet"}} size="80px"></GeoAlt>
                        </div>
                        <h3>Address</h3>
                        <p>Sherpur-Shadar, sherpur,Mymensingh,Dhaka-2100.</p>
                    </Col>
                    <Col md={4}>
                        <div>
                            <TelephoneFill style={{color:"blueviolet"}} size="80px"></TelephoneFill>
                        </div>
                        <h3>Phone</h3>
                        <p>094758998145</p>
                    </Col>
                    <Col md={4}>
                        <div>
                            <EnvelopeFill style={{color:"blueviolet"}} size="80px"></EnvelopeFill>
                        </div>
                        <h3>Email</h3>
                        <p>easyqourier@gmail.com</p>
                    </Col>
                    </Row>
                </Container>
            </div>

        </Container>
    );
};

export default Contact;