import React from 'react';

import SearchFrom from '../../components/SearchForm';
import { getResults } from '../../services/client';
import { PAGE } from '../../common/constants';
import { ServiceMessage } from '../../components/ServiceMessage';

export class _SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.getPosts = this.getPosts.bind(this);

        this.state = {
            loading: false,
            noItems: false,
            serviceError: false
        }
    }

    componentDidUpdate() {
        if (this.props.results.items.length > 0)
            this.props.history.push(PAGE.RESULTS);
    }

    async getPosts(title) {
        title = title.trim();

        if (!title || title == '')
            return;

        this.setState({
            loading: true,
            noItems: false,
            serviceError: false
        });

        try {
            const page = 1;
            const response = await getResults(title, page);
            const items = response.items;

            if (items.length == 0)
                this.setState({ noItems: true });

            this.setState({ loading: false });
            
            this.props.replaceResults(items, page);
            this.props.setTitle(title);
        } catch(err) {
            this.setState({
                noItems: true,
                loading: false,
                serviceError: true
            });
            console.error(err);
        }

    }

    render() {
        const { noItems, loading, serviceError } = this.state;

        return (
            <>
                { serviceError && <ServiceMessage title='Unexpected error' type='error' /> }
                <SearchFrom
                    getPosts={this.getPosts}
                    noItems={this.state.noItems}
                    loading={this.state.loading} />
            </>
        );
    }
}