import React from 'react';

import { PAGE, SORT, SIDEBAR_TYPE } from '../../common/constants';
import { getUserPosts, getTagPosts } from '../../services/client';

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
            loading: false,
            sideLoading: false,
            showSideBar: false,
            sideBarType: undefined,
            serviceError: false,
            lastItem: false
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

    async sortSideResults(sort = SORT.ACTIVITY) {
        // if (this.state.sideBarType == SIDEBAR_TYPE.TAG) {
        //     this.props.replaceSideResults(this.props.sideResults.items, sort);
        //     return;
        // }

        // this.setState({
        //     sideLoading: true,
        //     serviceError: false
        // });

        // try {
        //     const userId = this.props.sideResults.items[0].owner.user_id;
        //     const response = await getUserPosts(userId, sort);
        //     const questions = response.items;
        //     this.props.replaceSideResults(questions, sort);
        // } catch (err) {
        //     this.setState({ serviceError: true });
        //     console.error(err);
        // }

        // this.setState({ sideLoading: false });
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
                { results.error || sideResults.error && <ServiceMessage title='Unexpected error' type='error' /> }
            </div>
        );
    }
}