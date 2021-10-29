import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const {signInWithGoogle} = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <div className="form">
            <h1 className="text-center text-light">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName")} placeholder="Email" />
                <input {...register("lastName")} placeholder="Password" />
                <input type="submit" value="REGISTER" disabled />
            </form>
            <div>
                <button onClick={() =>{signInWithGoogle()}}>Sign Up With Google</button>
            </div>
        </div>
    );
};

export default Register;
