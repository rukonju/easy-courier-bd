import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    return (
        
        <Col md={6}>
            <div className="my-2 shadow border rounded-3 bg-info">
                <img src={service?.photoUrl} alt="" width="100%" />
                <h2>{service?.title}</h2>
                <h4>{service?.subtitle.slice(0,50)}</h4>
                <p>{service?.description}</p>
                <Link className="d-grid decoration-none" to={`service/booking/${service?._id}`}>
                    <Button variant="secondary">Book Now</Button>
                </Link>
            </div>
            
        </Col>
            
        
    );
};

export default Service;