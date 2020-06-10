import React from 'react';

export function Loader() {
    return (
        <div className='loader-container'>
            <img className='loader' src={require('../assets/images/loader.gif')} alt='loader' />
        </div>
    );
}