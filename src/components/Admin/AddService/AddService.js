import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data =>{
        fetch('https://fathomless-eyrie-01187.herokuapp.com/services',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId){
                alert('The service is added successfully');
                reset();
            }
        })
    };
    return (
        <div className="form">
            <h1>Add service</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Service title" {...register("title")} />
                    <input type="text" placeholder="Service subtitle" {...register("subtitle")} />
                    <textarea {...register("description")} placeholder="Descriction"/>
                    <input type="text" placeholder="Photo Url" {...register("photoUrl")} />
                    <input type="number" placeholder="Price" {...register("price")} />
                    <input type="submit" value="ADD SERVICE" />
                </form>
        </div>
    );
};

export default AddService;
