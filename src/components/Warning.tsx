import React from 'react';

interface IWarning {
    title: string
}

export const Warning: React.FC<IWarning> = (props) => {
    return (
        <div className='warning-container'>
            <p className='warning red-warning'>{ props.title }</p>
        </div>
    );
}