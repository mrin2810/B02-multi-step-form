import React from 'react';
import '../../App.css';
import ProfileForm from './01ProfileForm';
import SocialForm from './02SocialForm';
import Review from './03Review';
import { Routes, Route } from 'react-router-dom';

function SignupForm() {
    return <div className='signup-form'>
        {/* Show the steps and Links */}

        {/* Show the respective forms */}
        <Routes>
            <Route exact path="/" element={<ProfileForm />} />
            <Route path="/social" element={<SocialForm />} />
            <Route path="/review" element={<Review />} />
        </Routes>
    </div>
}

export default SignupForm;