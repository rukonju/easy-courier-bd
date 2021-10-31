import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    return (
        
        <Col md={4}>
            <div style={{boxShadow:'2px 3px 30px gray'}} className=" service my-2 rounded-3 text-light bg-secondary">
                <div className='image'>
                    <img className='rounded-3' src={service?.photoUrl} alt="" width="100%" />
                </div>
                <div className="p-1">
                    <h3>{service?.title}</h3>
                    <h5>{service?.subtitle.slice(0,50)}</h5>
                    <p>{service?.description}</p>
                    <Link style={{textDecoration:'none'}} className="d-grid decoration-none" to={`service/booking/${service?._id}`}>
                        <Button variant="warning">Book Now</Button>
                    </Link>
                </div>
            </div>
            
        </Col>
            
        
    );
};

export default Service;