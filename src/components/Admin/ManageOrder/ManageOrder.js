import React, { useEffect, useState } from 'react';
import { Container, Placeholder, Table } from 'react-bootstrap';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [updateStatus, setUpdateStatus] = useState(false);
    useEffect(() =>{
        fetch('https://fathomless-eyrie-01187.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[]);

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

    const handleUpdate = id =>{
        const doc = {status:'approved'}
        const url = `https://fathomless-eyrie-01187.herokuapp.com/orders/${id}`
            fetch(url,{
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(doc)
            })
            .then(res=>res.json())
            .then(result=>{
                if(result.modifiedCount>0){
                    setUpdateStatus(true)
                }
            })
    }
    if(!orders.length){
        return <div>
            <Placeholder animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder animation="glow">
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
        <Placeholder xs={6} /> <Placeholder xs={8} />
      </Placeholder>
      <Placeholder.Button variant="primary" xs={6} />
        </div>
    }
    return (
        <Container className="text-light">
            <Table striped bordered hover variant="dark" responsive="lg">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order=>
                            <tr key={order._id} order={order}>
                                    <td>{orders.indexOf(order)+1}</td>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.service}</td>
                                    <td>{order.date}</td>
                                    <td>{updateStatus?'approved':order.status}</td>
                                    <td>
                                        <button onClick={()=>handleDelete(order?._id)}>Delete</button>
                                        <button onClick={()=>handleUpdate(order?._id)}>Approve</button>
                                    </td>
                            </tr>)
                    }
                
                </tbody>
            </Table>
        </Container>
    );
};

export default ManageOrder;