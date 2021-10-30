import React, { useEffect, useState } from 'react';
import Order from '../../Order/Order';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    console.log(orders)
    useEffect(() =>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    return (
        <div className="text-light">
            {
                orders.map(order=><Order key={order._id} order={order}></Order>)
            }
        </div>
    );
};

export default ManageOrder;