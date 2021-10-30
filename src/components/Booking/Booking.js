import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const {user}= useAuth()
    const [service, setService] = useState({})
    // console.log(service)
    const {id} = useParams();
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data =>{
        if(!data.status){
            data.status='pending'
            data.userEmail=user.email;
        }
       
        console.log(data)
        fetch('http://localhost:5000/orders',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>console.log(result))
    }
    return (
        <div>
            <div>
                <img src={service?.photoUrl} alt="" />
                <h1 className="text-light">{service?.title}</h1>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="name" {...register("name")} />
                    <input type="email" placeholder="email" {...register("email")} />
                    <textarea placeholder="Adress"/>
                    <input type="submit" value="Book now" />
                </form>
            </div>
        </div>
    );
};

export default Booking;