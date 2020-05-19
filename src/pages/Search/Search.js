import React from 'react';

import SearchFrom from '../../components/searchForm';
import { getResults } from '../../services/request';
import { PAGE } from '../../common/constants';

export class _SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.getPosts = this.getPosts.bind(this);
    }

    componentDidMount() {
        this.props.replaceResults([]);
    }

    componentDidUpdate() {
        if (this.props.results.length > 0)
            this.props.history.push(PAGE.RESULTS);
    }

    async getPosts(title) {
        title = title.trim();

        if (!title || title == '')
            return;

        try {
            const response = await getResults(title);
            const results = response.items;
            
            this.props.replaceResults(results);
        } catch(err) {
            console.error(err);
        }
    }

    render() {
        return (
            <SearchFrom getPosts={this.getPosts} />
        );
    }
}