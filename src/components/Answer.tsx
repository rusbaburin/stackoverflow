import React from 'react';

export function Answer({ answer }) {
    return (
        <div className='answer-container'>
            <div dangerouslySetInnerHTML={{ __html: answer.body }} />
        </div>
    );
}