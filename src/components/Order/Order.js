import React from 'react';

const Order = ({order}) => {
    const handleDelete = id =>{
        const url = `http://localhost:5000/orders/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(result=>console.log(result))
    }
    return (
        <div>
            <h1>{order.name}</h1>
            <h3>{order.email}</h3>
            <h3>{order.status}</h3>
            <button onClick={handleDelete}>Delete</button>
            <button>Approve</button>
        </div>
    );
};

export default Order;