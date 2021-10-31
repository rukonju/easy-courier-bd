import React from 'react';
import page from '../../images/404.png'
import './Page404.css'

const Page404 = () => {
    return (
        <div className='page-404 text-light'>
            <div>
                <img src={page} alt="" />   
            </div>
            <h2>Page not found</h2>
            
        </div>
    );
};

export default Page404;