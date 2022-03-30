import React from 'react';
import '../../App.css';
import ProfileForm from './01ProfileForm';
import SocialForm from './02SocialForm';
import Review from './03Review';
import StepLinks from '../StepLinks';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SignupFormProvider } from './SignupFormContext';
import { AnimatePresence } from 'framer-motion';

function SignupForm() {
    const location = useLocation();

    return (
    <SignupFormProvider>
    <div className='signup-form'>
        {/* Show the steps and Links */}
        <StepLinks />
        {/* Show the respective forms */}
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<ProfileForm />} />
                <Route path="/social" element={<SocialForm />} />
                <Route path="/review" element={<Review />} />
            </Routes>
        </AnimatePresence>
    </div>
    </SignupFormProvider>
    )
}

export default SignupForm;