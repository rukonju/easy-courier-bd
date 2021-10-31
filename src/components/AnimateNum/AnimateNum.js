import React from 'react';
import AnimatedNumber from 'react-animated-number/build/AnimatedNumber';
import { Container, Col, Row } from 'react-bootstrap';

const AnimateNum = () => {
    const numbers = [64, 200, 25000, 350000];
    return (
        <Container>
            <Row className="text-center">
                {
                    numbers.map(number=><Col key={number} md={6} sm={6} xs={12}>
                        <div className=" bg-secondary rounded-3 m-2 text-warning">
                            <AnimatedNumber component="span" value={number}
                                style={{
                                transition: '0.8s ease-out',
                                fontSize: 48,
                                transitionProperty:'background-color, color, opacity'}}
                                frameStyle={perc => (
                                perc === 100 ? {} : {backgroundColor: 'gray'})}
                                duration={3000}
                                formatValue={n => parseInt(n)}
                            />
                            <h1 className=" m-2">Districts Coverage</h1>
                        </div> 
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default AnimateNum;