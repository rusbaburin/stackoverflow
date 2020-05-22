import React from 'react';
import { getAnswers } from '../../services/request';

export class _ExplorePage extends React.Component {
    async componentDidMount() {
        const questionId = this.props.match.params.id;
        const response = await getAnswers(questionId);
        console.log(response);
    }

    render() {
        const questionId = this.props.match.params.id;  
        return <h2>Explore page for {questionId}</h2>
    }
}