import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Loader from '../../components/Loader';
import ServiceMessage from '../../components/ServiceMessage';
import Answer from '../../components/Answer';

import '../../assets/styles/explore.css';

import { IGetQuestionAsync } from '../../types/saga';
import { IQuestion } from '../../types/response';

interface RouteParams {
    id: string
}

interface IExplorePage extends RouteComponentProps<RouteParams> {
    question: IQuestion;
    getQuestionAsync: (questionId: number) => IGetQuestionAsync;
}

class _ExplorePage extends React.Component<IExplorePage> {
  componentDidMount() {
    this.getData();
  }

  getData() {
    const { getQuestionAsync, match } = this.props;

    const questionId = match.params.id;
    getQuestionAsync(+questionId);
  }

  render() {
    const {
      question: {
        info, answers, error, loading,
      },
    } = this.props;

    if (loading) { return <Loader />; }

    if (error) { return <ServiceMessage title="Unexpected error" type="error" />; }

    if (!info) { return null; }

    if (!info.body) { return <ServiceMessage title="Body property does not exist" type="error" />; }

    return (
      <div className="explore-container">
        <h2 className="explore-title">{ info.title }</h2>
        <div className="explore-info-container">
          <div className="explore-info">
            <div dangerouslySetInnerHTML={{ __html: info.body as string }} />
          </div>
          <div className="answers-container">
            <h3 className="answers-title">
              { answers.length }
              {' '}
              Answers
            </h3>
            {
                answers.map((answer) => <Answer key={answer.answer_id} answer={answer} />)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default _ExplorePage;
