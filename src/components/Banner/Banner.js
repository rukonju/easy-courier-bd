import React from 'react';
import './Banner.css';
import banner from '../../images/banner.png'
import {Button} from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="banner">
            <div className="image">
                <img src={banner} alt="" width="100%" />
            </div>
            <div className="banner-title">
                <h1>Welcome to <br /> 
                    <span>Easy Courier Bangladesh</span>
                </h1>
                <Button variant="primary" size="lg">Contact Now</Button>
            </div>
                    
        </div>
    );
};

export default Banner;