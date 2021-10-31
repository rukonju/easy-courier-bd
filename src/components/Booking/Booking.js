import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const {user}= useAuth()
    const [service, setService] = useState({})
    const [isBook, setIsBook] = useState(false)
    const {id} = useParams();
    useEffect(()=>{
        const url =`https://fathomless-eyrie-01187.herokuapp.com/services/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[id])
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data =>{
        if(!data.status){
            data.status='pending';
            data.userEmail=user?.email;
            data.serviceId=service?._id;
            data.service=service;
            const date =new Date().toDateString();
            data.date=date.slice(4);
            if(!data?.name){
                data.name=user?.name;
            }
        }
       
        console.log(data)
        fetch('https://fathomless-eyrie-01187.herokuapp.com/orders',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId){
                alert('book succesfully')
                setIsBook(true);
                reset()
            }
        })
    }
    return (
        <Container className="bg-secondary">
            <Row className="px-0">
                <Col md={6}>
                    <div className="my-2 shadow border rounded-3 bg-info">
                        <img src={service?.photoUrl} alt="" width="100%" />
                        <h2>{service?.title}</h2>
                        <h4>{service?.subtitle}</h4>
                        <p>{service?.description}</p>
                    </div>
                </Col>
                <Col md={6} className="form bg-secondary">
                    <form  onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" defaultValue={isBook?'':user?.displayName} placeholder="name" {...register("name")} />
                        <input type="email" defaultValue={isBook?'':user?.email} placeholder="email" {...register("contactEmail")} />
                        <textarea {...register("address")} placeholder="Address"/>
                        <input type="text" defaultValue={isBook?'':service?.title}/>
                        <input type="submit" value="Book now" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Booking;