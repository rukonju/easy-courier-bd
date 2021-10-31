import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const [orders,setOrders] = useState([]);
    const {user} = useAuth()
    
    useEffect(() =>{
        fetch('https://fathomless-eyrie-01187.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>{
            const myOrders = data.filter(order=>order.userEmail===user.email);
            setOrders(myOrders)
        })
    },[user.email]);
    if(!orders.length){
        return <h1 className="text-light text-center my-4">You have not book any service yet.</h1>
    }

    const handleDelete = id =>{
        const prossed = window.confirm('are you sure')
        if(prossed){
            const url = `https://fathomless-eyrie-01187.herokuapp.com/orders/${id}`
            fetch(url,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(result=>{
                if(result.deletedCount>0){
                    const remainingOrders = orders.filter(order=>order._id !==id);
                    setOrders(remainingOrders);   
                }
            })
        }
        
    };


    return (
        <Container>
            <h1 className="text-light text-center my-4">My Orders</h1>
            <Row>

            {
                orders.map(order=><Col  key={order._id} md={6} style={{justifyContent: 'space-around'}}>
                        <Row className="m-1">
                            <Col md={12} lg={6} className="p-0">
                                <img src={order?.service?.photoUrl} alt="" width="100%" />
                            </Col>
                            <Col style={{position:'relative'}} md={12} lg={6} className="text-light bg-info">
                                <div className="text-dark bg-info">
                                    <h2 style={{textOverflow: 'ellipsis', width:"100%"}}>{order?.service?.title}</h2>
                                    <p>{order?.date}</p>
                                    <p>{order?.status}</p>
                                    <Button onClick={() =>handleDelete(order._id)} style={{position:'absolute', bottom:'1%',right:'1%'}} className="text-right " variant="secondary">Cencel</Button>
                                </div>
                            </Col>
                        </Row>
            
                    </Col>)
            }
            </Row>
            
        </Container>
    );
};

export default MyOrder;