import React from 'react';

import SearchFrom from '../../components/SearchForm';
import { PAGE } from '../../common/constants';
import { ServiceMessage } from '../../components/ServiceMessage';

export class _SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.getPosts = this.getPosts.bind(this);
    }

    componentDidUpdate() {
        if (this.props.results.items.length > 0)
            this.props.history.push(PAGE.RESULTS);
    }

    getPosts(title) {
        title = title.trim();

        if (!title || title == '')
            return;

        this.props.getResultsAsync(title);
    }

    render() {
        const { loading, has_more, error } = this.props.results;

        return (
            <>
                { error && <ServiceMessage title='Unexpected error' type='error' /> }
                <SearchFrom
                    getPosts={this.getPosts}
                    noItems={has_more != null && !has_more}
                    loading={loading} />
            </>
        );
    }
}