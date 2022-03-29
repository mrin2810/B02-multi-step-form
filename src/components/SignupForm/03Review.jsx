import React from 'react';
import { useSignupForm } from './SignupFormContext';

export default function Review() {
     const { profile, social } = useSignupForm();

     function handleSubmit(e) {
          e.preventDefault();
          alert('You are submitting the data!');
     }

     return <form onSubmit={handleSubmit}>
          <p><strong>name:</strong> {profile.name} </p>
          <p><strong>email:</strong> {profile.email} </p>
          <p><strong>twitter:</strong> {social.twitter} </p>
          <p><strong>facebook:</strong> {social.facebook} </p>
     <input type="submit" value="Submit All Info"/></form>
}