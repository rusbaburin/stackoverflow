import React from 'react';

export function Warning(props) {
    return (
        <div className='warning-container'>
            <p className='warning red-warning'>{ props.title }</p>
        </div>
    );
}