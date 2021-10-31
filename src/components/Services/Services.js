import React, { useEffect, useState } from 'react';
import { Container, Placeholder, Row } from 'react-bootstrap';
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
        </div>:
        <div>
            <Placeholder bg="secondary" animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder animation="glow">
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
        <Placeholder xs={6} /> <Placeholder xs={8} />
      </Placeholder>
      <Placeholder.Button variant="secondary" xs={6} />
        </div>
    );
};

export default Services;