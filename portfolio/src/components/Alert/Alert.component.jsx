import React from 'react';
import './Alert.scss'

export default function Alert({status, message}) {

    return(
        <div className="alert-container">
            <h3 className='alert-message'>{message}</h3>
            <div className={status === 'pending' ? 'progress pending': status === 'error'? 'progress error' : 'progress'} id='progress'></div>
        </div>
    )
}