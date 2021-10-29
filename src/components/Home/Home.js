import React from 'react';
import Banner from '../Banner/Banner';
import we from '../../images/we.png'


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <h1>Our Story</h1>
                <div>
                    <img src={we} alt="" width="100%" />
                </div>
                <p>eCourier is Bangladesh’s most trusted on-demand last mile logistics network offering tech-enabled one stop delivery solutions. Since its inception in 2014, our vision has been to become the operating system for e-commerce in Bangladesh, through a combination of world-class infrastructure, logistics operations of the highest quality and cutting-edge technology capabilities.We take care of order fulfillment, collection, transport, tracking and delivery of parcels. We are the first in Bangladesh to have created a unique network with home delivery and Store Pickup & Return services which enhances customer experience and rationalizes costs.</p>
            </div>
        </div>
    );
};

export default Home;