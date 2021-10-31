import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInWithGoogle} = useAuth();
    const history=useHistory();
    const location=useLocation();
    const ridirect_url=location?.state?.from || "/home";

    const handleGoogleSignIn =() =>{
        signInWithGoogle()
        .then((result) => {
            if(result.user){
                history.push(ridirect_url);
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }

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
                <button onClick={handleGoogleSignIn}>Sign In With Google</button>
            </div>
        </div>
        
    );
};

export default Login;