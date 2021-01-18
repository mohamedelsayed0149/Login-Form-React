import React , { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }
    return (
        <>
        <div className="form-container">
        <span className="close-btn">x</span>
        <div className="form-content-left">
           <p className="welcome">Faculty of Science</p>
           <img className="img-2" src="logooo.jpeg"  alt="WELCOME LOGIN" />
           <p className="alexandria">Alexandria University</p>
        </div>
        {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
        </div>
        </>
    );
};

export default Form;
