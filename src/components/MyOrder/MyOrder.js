import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const [orders,setOrders] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[]);

    return (
        <div>
            <h1 className='text-light'>{orders[0]?.status}</h1>
            
        </div>
    );
};

export default MyOrder;