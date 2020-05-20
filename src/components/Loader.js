import React from 'react';
import * as loader from '../assets/images/loader.gif'

export function Loader() {
    return (
        <div className='loader-container'>
            <img className='loader' src={loader}  />
        </div>
    );
}