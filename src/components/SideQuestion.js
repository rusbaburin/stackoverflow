import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/sideQuestion.css';
import { PAGE } from '../common/constants';

export function SideQuestion({ question }) {
    return (
        <div className='sideQuestion-container'>
            <div className='sideQuestion-info-container'>
                <Link to={ `${PAGE.EXPLORE }/${ question.question_id }` } >
                    <h2 className='sideQuestion-title'>{ question.title }</h2>
                </Link>
                <div className='sideQuestion-author'>{ question.owner.display_name }</div>
            </div>
        </div>
    );
}