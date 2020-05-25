import React from 'react';
import '../assets/styles/question.css';
import { Tag } from './Tag';
import { Link } from 'react-router-dom';
import { PAGE } from '../common/constants';

export function Question(props) {
    const question = props.question;

    return (
        <div className='question-container'>
            <div className='question-info-container'>
                <Link to={ `${PAGE.EXPLORE }/${ question.question_id }` } >
                    <h2 className='question-title'>{ question.title }</h2>
                </Link>
                <div className='question-author'>{ question.owner.display_name }</div>
                <div className='question-tagList'>
                    { question.tags.map((tag, index) => <Tag key={index} title={tag} />) }
                </div>
            </div>
            <Link className='question-answers-container' to={ `${PAGE.EXPLORE }/${ question.question_id }` }>
                <div>Answers</div>
                <div>{ question.answer_count }</div>
            </Link>
        </div>
    );
}
