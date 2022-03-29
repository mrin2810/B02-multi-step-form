import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSignupForm } from './SignupFormContext';

export default function ProfileForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { profile, setProfile } = useSignupForm();

    function onSubmit(data) {
        // do whatever we need
        setProfile(data);
        navigate("/social");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2>Tell us about yourself</h2>
            <input 
                type="text" 
                name="name" 
                placeholder="What's your name?" 
                {...register("name", {
                    required: true
                })} 
                defaultValue={profile.name}
            />
            <p>{errors.name && 'Name is Required'}</p>
            <input 
                type="email" 
                name="email" 
                placeholder="What's your email?" 
                {...register("email", {
                    required: true,
                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })} 
                defaultValue={profile.email}
            />
            <p>{errors.email && 'A valid Email is Required'}</p>

            <input type="submit" value="Next" />
        </form>
    )
}
