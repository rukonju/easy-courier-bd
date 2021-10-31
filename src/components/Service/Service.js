import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    return (
        
        <Col md={4}>
            <div style={{boxShadow:'2px 3px 30px gray'}} className="my-2 rounded-3 text-info bg-dark">
                <img className='rounded-3 ' src={service?.photoUrl} alt="" width="100%" />
                <div className="p-1">
                    <h2>{service?.title}</h2>
                    <h4>{service?.subtitle.slice(0,50)}</h4>
                    <p>{service?.description}</p>
                    <Link style={{textDecoration:'none'}} className="d-grid decoration-none" to={`service/booking/${service?._id}`}>
                        <Button variant="primary">Book Now</Button>
                    </Link>
                </div>
            </div>
            
        </Col>
            
        
    );
};

export default Service;