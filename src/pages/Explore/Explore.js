import React from 'react';

import { getAnswers, getQuestionInfo } from '../../services/client';
import { Loader } from '../../components/Loader';
import { ServiceMessage } from '../../components/ServiceMessage';
import { Answer } from '../../components/Answer';

import '../../assets/styles/explore.css';

export class _ExplorePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questionInfo: null,
            answers: null,
            serviceError: false
        }
    }

    async getData() {
        const questionId = this.props.match.params.id;

        try {
            const questionInfo = await getQuestionInfo(questionId);
            const answers = await getAnswers(questionId);

            this.setState({
                questionInfo,
                answers,
            });
        } catch (err) {
            this.setState({
                serviceError: true
            });
            console.error(err);
        }
    }

    componentDidMount() {
        this.getData();   
    }

    render() {
        const { questionInfo, answers, serviceError } = this.state;

        if ( (!questionInfo || !answers) && !serviceError)
            return <Loader />

        if (serviceError)
            return <ServiceMessage title='Unexpected error' type='error' />

        return (
            <div className='explore-container'>
                <h2 className='explore-title'>{ questionInfo.title }</h2>
                <div className='explore-info-container'>
                    <div className='explore-info'>
                        <div dangerouslySetInnerHTML={{ __html: questionInfo.body }} />
                    </div>
                    <div className='answers-container'>
                        <h3 className='answers-title'>{ answers.items.length } Answers</h3>
                        {
                            answers.items.map(answer => <Answer key={answer.answer_id} answer={answer} />)
                        }
                    </div>
                </div>
            </div>
        );
    }
}