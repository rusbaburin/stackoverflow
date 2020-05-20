import React from 'react';

import SearchFrom from '../../components/SearchForm';
import { getResults } from '../../services/request';
import { PAGE } from '../../common/constants';

export class _SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.getPosts = this.getPosts.bind(this);

        this.state = {
            loading: false
        }
    }

    //TODO UNCOMMENT!!!
    // componentDidMount() {
    //     this.props.replaceResults([], 0);
    //     this.props.setTitle('');
    // }

    componentDidUpdate() {
        if (this.props.results.items.length > 0)
            this.props.history.push(PAGE.RESULTS);
    }

    async getPosts(title) {
        title = title.trim();

        if (!title || title == '')
            return;

        this.setState({ loading: true });

        try {
            const page = 1;
            const response = await getResults(title, page);
            const items = response.items;
            this.setState({ loading: false });
            
            this.props.addResults(items, page);
            this.props.setTitle(title);
        } catch(err) {
            console.error(err);
        }

    }

    render() {
        return (
            <SearchFrom getPosts={this.getPosts} loading={this.state.loading} />
        );
    }
}