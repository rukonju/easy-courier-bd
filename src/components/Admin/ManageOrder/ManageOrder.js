import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import deleteBtn from '../../../images/trash-2 9.png'

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
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
        const doc = {status:'Approved'}
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
                    alert('Order is approved')
                    const updateStatus = orders.find(order=>order._id ===id);
                    updateStatus.status='Approved';
                }
            })
    }
    if(!orders.length){
        return <h1 className=" text-center text-light my-4">No Order Found</h1>
                
    }
    return (
        <Container className="text-light">
            <h1 className=" text-center text-light my-4">Manage All Customer’s Order</h1>
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
                                    <td>{order.contactEmail}</td>
                                    <td>{order?.service?.title}</td>
                                    <td>{order.date}</td>
                                    <td>{order.status}</td>
                                    <td>
                                        <img style={{cursor:'pointer'}} onClick={()=>handleDelete(order?._id)} src={deleteBtn} alt="" width="30px" />
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