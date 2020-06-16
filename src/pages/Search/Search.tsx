/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import SearchFrom from '../../components/SearchForm';
import { PAGE } from '../../common/constants';
import ServiceMessage from '../../components/ServiceMessage';

import { IResults } from '../../types/state';
import { IGetResultsAsync } from '../../types/saga';

interface ISearchPage extends RouteComponentProps {
    results: IResults,
    getResultsAsync: (title: string) => IGetResultsAsync
}

class _SearchPage extends React.Component<ISearchPage> {
  constructor(props: ISearchPage) {
    super(props);

    this.getPosts = this.getPosts.bind(this);
  }

  componentDidUpdate() {
    const { results, history } = this.props;
    if (results.items.length > 0) { history.push(PAGE.RESULTS); }
  }

  getPosts(title: string) {
    const { getResultsAsync } = this.props;

    title = title.trim();

    if (!title || title == '') { return; }

    getResultsAsync(title);
  }

  render() {
    const { results: { loading, has_more, error } } = this.props;

    return (
      <>
        { error && <ServiceMessage title="Unexpected error" type="error" /> }
        <SearchFrom
          getPosts={this.getPosts}
          noItems={has_more != null && !has_more}
          loading={loading}
        />
      </>
    );
  }
}

export default _SearchPage;
