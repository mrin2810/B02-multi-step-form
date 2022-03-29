import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSignupForm } from './SignupFormContext';

export default function SocialForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { social, setSocial } = useSignupForm();

    function onSubmit(data) {
        // do whatever we need
        setSocial(data);
        navigate("/review");
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2>How can we find you on social?</h2>
            <input 
                type="text" 
                name="twitter" 
                placeholder="What's your Twitter?" 
                {...register("twitter", {
                    required: true
                })} 
                defaultValue={social.twitter}
            />
            <p>{errors.twitter && 'Twitter is Required'}</p>
            <input 
                type="text" 
                name="facebook" 
                placeholder="What's your Facebook?" 
                {...register("facebook", {
                    required: true
                })} 
                defaultValue={social.facebook}
            />
            <p>{errors.facebook && 'Facebook is Required'}</p>

            <input type="submit" value="Next" />
        </form>
    )
}