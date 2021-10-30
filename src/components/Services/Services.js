import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <Container>
            <h1 className="text-light text-center">Our Services</h1>
                <Row>
                    {
                        services.map(service=><Service key={service._id} service={service}></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;