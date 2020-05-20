import React from 'react';
import '../assets/styles/question.css';
import { Tag } from './Tag';

export function Question(props) {
    const question = props.question;

    return (
        <div className='question-container'>
            <div className='question-info-container'>
                <h2 className='question-title'>{ question.title }</h2>
                <div className='question-author'>{ question.owner.display_name }</div>
                <div className='question-tagList'>
                    { question.tags.map((tag, index) => <Tag key={index} title={tag} />) }
                </div>
            </div>
            <div className='question-answers-container'>
                <div>Answers</div>
                <div>{ question.answer_count }</div>
            </div>
        </div>
    );
}
