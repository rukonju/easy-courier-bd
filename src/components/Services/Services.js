import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('https://fathomless-eyrie-01187.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        services.length?
        <div>
            <Container>
            <h1 className="text-light text-center mt-4">Our Services</h1>
                <Row>
                    {
                        services.map(service=><Service key={service._id} service={service}></Service>)
                    }
                </Row>
            </Container>
        </div>: <div className="spinner"><Spinner animation="border" variant="danger" /></div>
        
    );
};

export default Services;