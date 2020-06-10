import React from 'react';

import { PAGE, SORT } from '../../common/constants';

import { Question } from '../../components/Question';
import { Loader } from '../../components/Loader';
import { SideBar } from '../../components/SideBar';
import { ServiceMessage } from '../../components/ServiceMessage';
import { SortComponent } from '../../components/Sort';

import '../../assets/styles/results.css';
import '../../assets/styles/questionList.css';

export class _ResultsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showSideBar: false,
        }

        this.handleScroll = this.handleScroll.bind(this);
        this.getNextPosts = this.getNextPosts.bind(this);
        this.handleUserPosts = this.handleUserPosts.bind(this);
        this.handleTagPosts = this.handleTagPosts.bind(this);
        this.closeSideBar = this.closeSideBar.bind(this);
        this.sortResults = this.sortResults.bind(this);
        this.sortSideResults = this.sortSideResults.bind(this);
    }

    componentDidMount() {
        const results = this.props.results;
        if (results.items.length == 0) {
            this.props.history.push(PAGE.SEARCH);
            return;
        }

        document.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    }

    closeSideBar() {
        this.setState({ showSideBar: false });
    }

    handleUserPosts(userId) {
        this.setState({
            showSideBar: true,
        });
        this.props.getUserResultsAsync(userId);
    }

    handleTagPosts(tag) {
        this.setState({
            showSideBar: true,
        });
        this.props.getTagResultsAsync(tag);
    }

    sortSideResults(sort = SORT.ACTIVITY) {
        this.props.sortSideResultsAsync(sort);
    }

    sortResults(sort = SORT.ACTIVITY) {
        this.props.sortResultsAsync(sort);
    }

    getNextPosts() {
        this.props.addResultsAsync();
    }

    handleScroll() {
        const results = this.props.results;

        if (
            !results.loading &&
            results.has_more &&
            (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500
        ) {
            this.getNextPosts();
        }
    }

    render() {
        const results = this.props.results;
        const sideResults = this.props.sideResults;
        const title = this.props.title;

        return (
            <div className='results-container'>
                <h1 className='results-title'>Results for &quot;{title}&quot;</h1>
                <SortComponent sortResults={this.sortResults} sort={results.sort} />
                <div className='questionList-container'>
                    {
                        results.items.map(result =>
                            <Question
                                key={result.question_id}
                                getUserPosts={this.handleUserPosts}
                                getTagPosts={this.handleTagPosts}
                                question={result} />
                            )
                    }
                </div>
                <SideBar
                    closeSideBar={this.closeSideBar}
                    display={this.state.showSideBar}
                    loading={sideResults.loading}
                    sort={sideResults.sort}
                    sortSideResults={this.sortSideResults}
                    items={sideResults.items} />
                { results.loading && <Loader /> }
                { (results.error || sideResults.error) && <ServiceMessage title='Unexpected error' type='error' /> }
            </div>
        );
    }
}