import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const [orders,setOrders] = useState([]);
    
    useEffect(() =>{
        fetch('https://fathomless-eyrie-01187.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[]);

    useEffect(()=>{
    orders.forEach(order => {
            const url =`https://fathomless-eyrie-01187.herokuapp.com/services/${order?.serviceId}`
            fetch(url)
            .then(res=>res.json())
            .then(data=> console.log(data))
        });
    },[orders])

    return (
        <div>
            {
                orders.map(order=><div className="text-light" key={order._id}>
                    <h1 >{order?.name}</h1>
                    <span>{order?.status}</span>
                </div>)
            }
            
        </div>
    );
};

export default MyOrder;