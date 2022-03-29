import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import SignupForm from './components/SignupForm';

export default function App() {
  return <Router>
    <div className='app'>
      <SignupForm />
    </div>
  </Router>
}
