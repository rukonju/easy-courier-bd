import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="form">
            <h1>Add service</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Service title" {...register("title")} />
                    <input type="text" placeholder="Service subtitle" {...register("subtitle")} />
                    <textarea placeholder="Descriction"/>
                    <input type="text" placeholder="Photo Url" {...register("photoUrl")} />
                    <input type="number" placeholder="Price" {...register("price")} />
                    <input type="submit" value="ADD SERVICE" />
                </form>
        </div>
    );
};

export default AddService;
