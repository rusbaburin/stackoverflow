import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/question.css';
import { Tag } from './Tag';
import { PAGE } from '../common/constants';

import { IResult } from '../types/state';

interface IQuestionComponent {
    question: IResult;
    getTagPosts: (tag: string) => void;
    getUserPosts: (userId: number) => void
}

export const Question: React.FC<IQuestionComponent> = (props) => {
    const question = props.question;

    function handleUserPosts() {
        props.getUserPosts(question.owner.user_id);
    }

    return (
        <div className='question-container'>
            <div className='question-info-container'>
                <Link to={ `${PAGE.EXPLORE }/${ question.question_id }` } >
                    <h2 className='question-title'>{ question.title }</h2>
                </Link>
                <div className='question-author' onClick={handleUserPosts}>{ question.owner.display_name }</div>
                <div className='question-tagList'>
                    { question.tags.map((tag: string, index: number) => <Tag key={index} title={tag} getTagPosts={props.getTagPosts} />) }
                </div>
            </div>
            <Link className='question-answers-container' to={ `${PAGE.EXPLORE }/${ question.question_id }` }>
                <div>Answers</div>
                <div>{ question.answer_count }</div>
            </Link>
        </div>
    );
}
