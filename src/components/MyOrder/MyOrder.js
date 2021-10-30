import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const {user}=useAuth();
    console.log(user)
    const [orders,setOrders] = useState([]);
    console.log(orders)
    useEffect(() =>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[]);

    const myOrders = orders.filter(order=>order.userEmail === user.email);
    console.log(myOrders)

    return (
        <div>
            <h1 className='text-light'>{myOrders?.length}</h1>
            
        </div>
    );
};

export default MyOrder;