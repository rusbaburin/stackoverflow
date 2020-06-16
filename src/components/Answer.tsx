/* eslint-disable react/no-danger */
import React from 'react';

import { IAnswer } from '../types/response';

interface IAnswerComponent {
    answer: IAnswer
}

const Answer: React.FC<IAnswerComponent> = ({ answer }: IAnswerComponent) => (
  <div className="answer-container">
    <div dangerouslySetInnerHTML={{ __html: answer.body }} />
  </div>
);

export default Answer;
