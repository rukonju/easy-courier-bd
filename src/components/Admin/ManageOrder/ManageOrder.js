import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [updateStatus, setUpdateStatus] = useState(false);
    useEffect(() =>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[]);

    const handleDelete = id =>{
        const prossed = window.confirm('are you sure')
        if(prossed){
            const url = `http://localhost:5000/orders/${id}`
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
        const url = `http://localhost:5000/orders/${id}`
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
    return (
        <div className="text-light">
            {
                orders.map(order=>
                <div key={order._id} order={order}>
                    <div>
                        <h1>{order.name}</h1>
                        <h3>{order.email}</h3>
                        <h3>{updateStatus?'approved': order.status}</h3>
                        <button onClick={()=>handleDelete(order?._id)}>Delete</button>
                        <button onClick={()=>handleUpdate(order?._id)}>Approve</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageOrder;