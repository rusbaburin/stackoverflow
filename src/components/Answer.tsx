import React from 'react';

import { IAnswer } from '../types/state';

interface IAnswerComponent {
    answer: IAnswer
}

export const Answer: React.FC<IAnswerComponent> = ({ answer }) => {
    return (
        <div className='answer-container'>
            <div dangerouslySetInnerHTML={{ __html: answer.body }} />
        </div>
    );
}