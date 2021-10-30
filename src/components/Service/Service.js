import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    return (
        <div>
            <img src={service?.photoUrl} alt="" width="100%" />
            <h1 className="text-light">{service?.title}</h1>
            <Link to={`service/booking/${service?._id}`}>
                <Button variant="secondary">Book Now</Button>
            </Link>
        </div>
    );
};

export default Service;