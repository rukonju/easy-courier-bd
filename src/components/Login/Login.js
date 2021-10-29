import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInWithGoogle,user} = useAuth()
    console.log(user)
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <div className="form">
            <h1 className="text-center text-light">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName")} placeholder="Email" />
                <input {...register("lastName")} placeholder="Password" />
                <input type="submit" value="LOGIN" disabled />
            </form>
            <div>
                <button onClick={() =>signInWithGoogle()}>Sign In With Google</button>
            </div>
        </div>
        
    );
};

export default Login;