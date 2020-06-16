import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { PAGE, SORT } from '../../common/constants';

import Question from '../../components/Question';
import Loader from '../../components/Loader';
import SideBar from '../../components/SideBar';
import ServiceMessage from '../../components/ServiceMessage';
import SortComponent from '../../components/Sort';

import '../../assets/styles/results.css';
import '../../assets/styles/questionList.css';

import {
  IGetUserResultsAsync,
  IGetTagResultsAsync,
  ISortSideResultsAsync,
  ISortResultsAsync,
  IAddResultsAsync,
} from '../../types/saga';
import { IResults, ISideResults } from '../../types/state';
import { SortType } from '../../types/constants';

interface IResultsPageState {
    showSideBar: boolean
}

interface IResultsPage extends RouteComponentProps {
    results: IResults;
    sideResults: ISideResults;
    title: string;
    getUserResultsAsync: (userId: number) => IGetUserResultsAsync;
    getTagResultsAsync: (tag: string) => IGetTagResultsAsync;
    sortSideResultsAsync: (sort: SortType) => ISortSideResultsAsync;
    sortResultsAsync: (sort: SortType) => ISortResultsAsync;
    addResultsAsync: () => IAddResultsAsync;

}

class _ResultsPage extends React.Component<IResultsPage, IResultsPageState> {
  constructor(props: IResultsPage) {
    super(props);

    this.state = {
      showSideBar: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.getNextPosts = this.getNextPosts.bind(this);
    this.handleUserPosts = this.handleUserPosts.bind(this);
    this.handleTagPosts = this.handleTagPosts.bind(this);
    this.closeSideBar = this.closeSideBar.bind(this);
    this.sortResults = this.sortResults.bind(this);
    this.sortSideResults = this.sortSideResults.bind(this);
  }

  componentDidMount() {
    const { results, history } = this.props;
    if (results.items.length == 0) {
      history.push(PAGE.SEARCH);
      return;
    }

    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  getNextPosts() {
    const { addResultsAsync } = this.props;
    addResultsAsync();
  }

  closeSideBar() {
    this.setState({ showSideBar: false });
  }

  handleUserPosts(userId: number) {
    const { getUserResultsAsync } = this.props;
    this.setState({
      showSideBar: true,
    });
    getUserResultsAsync(userId);
  }

  handleTagPosts(tag: string) {
    const { getTagResultsAsync } = this.props;
    this.setState({
      showSideBar: true,
    });
    getTagResultsAsync(tag);
  }

  sortSideResults(sort: SortType = SORT.ACTIVITY) {
    const { sortSideResultsAsync } = this.props;
    sortSideResultsAsync(sort);
  }

  sortResults(sort: SortType = SORT.ACTIVITY) {
    const { sortResultsAsync } = this.props;
    sortResultsAsync(sort);
  }

  handleScroll() {
    const { results } = this.props;

    if (
      !results.loading
            && results.has_more
            && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500
    ) {
      this.getNextPosts();
    }
  }

  render() {
    const { results } = this.props;
    const { sideResults } = this.props;
    const { title } = this.props;
    const { showSideBar } = this.state;

    return (
      <div className="results-container">
        <h1 className="results-title">
          Results for &quot;
          {title}
          &quot;
        </h1>
        <SortComponent sortResults={this.sortResults} sort={results.sort} />
        <div className="questionList-container">
          {
              results.items.map((result) => (
                <Question
                  key={result.question_id}
                  getUserPosts={this.handleUserPosts}
                  getTagPosts={this.handleTagPosts}
                  question={result}
                />
              ))
          }
        </div>
        <SideBar
          closeSideBar={this.closeSideBar}
          display={showSideBar}
          loading={sideResults.loading}
          sort={sideResults.sort}
          sortSideResults={this.sortSideResults}
          items={sideResults.items}
        />
        { results.loading && <Loader /> }
        { (results.error || sideResults.error) && <ServiceMessage title="Unexpected error" type="error" /> }
      </div>
    );
  }
}

export default _ResultsPage;
