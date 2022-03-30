import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSignupForm } from '../SignupForm/SignupFormContext';

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

export default function StepLinks() {
    const { profile, social } = useSignupForm();

    // if profile is empty
    const isProfileDone = !isEmpty(profile);
    // if social is empty
    const isSocialDone = !isEmpty(social);

    return (
         <div className='step-links'>
             <NavLink to='/'>
                 {isProfileDone ? '❤' : '🤍'}Profile <span /></NavLink>
             {isProfileDone ? <NavLink to='/social'>
                 {isSocialDone ? '❤' : '🤍'}Social <span /></NavLink> : <a>{isSocialDone ? '❤' : '🤍'}Social <span /></a>}
             {isSocialDone && isProfileDone ? <NavLink to='/review' style={{ float: 'right' }}>Review <span /></NavLink> : <a  style={{ float: 'right' }}>Review <span /></a>}
         </div>
     )
}