import React from 'react'
import './Form.css';

const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">We have recieved your request !</div>
            <img className="img-4" src="img-4.svg" alt="" />
            <button id="log" className='form-input-btn' type='submit'>
               Login
            </button>
        </div>
    )
}

export default FormSuccess
