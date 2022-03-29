import React from 'react';
import '../../App.css';
import ProfileForm from './01ProfileForm';
import SocialForm from './02SocialForm';
import Review from './03Review';
import StepLinks from '../StepLinks';
import { Routes, Route } from 'react-router-dom';
import { SignupFormProvider } from './SignupFormContext';

function SignupForm() {
    return (
    <SignupFormProvider>
    <div className='signup-form'>
        {/* Show the steps and Links */}
        <StepLinks />
        {/* Show the respective forms */}
        <Routes>
            <Route exact path="/" element={<ProfileForm />} />
            <Route path="/social" element={<SocialForm />} />
            <Route path="/review" element={<Review />} />
        </Routes>
    </div>
    </SignupFormProvider>
    )
}

export default SignupForm;