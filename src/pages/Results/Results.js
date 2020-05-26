import React from 'react';

import { PAGE } from '../../common/constants';
import { getResults, getUserPosts, getTagPosts } from '../../services/client';

import { Question } from '../../components/Question';
import { Loader } from '../../components/Loader';
import { SideBar } from '../../components/SideBar';

import '../../assets/styles/results.css';
import '../../assets/styles/questionList.css';

export class _ResultsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            lastItem: false
        }

        this.handleScroll = this.handleScroll.bind(this);
        this.getPosts = this.getPosts.bind(this);
        this.handleUserPosts = this.handleUserPosts.bind(this);
        this.handleTagPosts = this.handleTagPosts.bind(this);
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

    async handleUserPosts(userId) {
        const response = await getUserPosts(userId);
        console.log(response);
    }

    async handleTagPosts(tag) {
        const response = await getTagPosts(tag);
        console.log(response);
    }

    async getPosts() {
        const results = this.props.results;
        const title = this.props.title;

        this.setState({ loading: true });

        try {
            const page = results.page + 1;
            const response = await getResults(title, page);
            const items = response.items;
            
            if (!response.hasMore)
                this.setState({ lastItem: true });
            
            this.props.addResults(items, page);
        } catch(err) {
            this.setState({ lastItem: true });
            console.error(err);
        }

        this.setState({ loading: false });
    }

    handleScroll() {
        if (
            !this.state.loading &&
            !this.state.lastItem &&
            (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500
        ) {
            this.getPosts();
        }
    }

    render() {
        const results = this.props.results;
        const title = this.props.title;

        if (results.items.length == 0)
            return null;

        return (
            <div className='results-container'>
                <h1 className='results-title'>Results for &quot;{title}&quot;</h1>
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
                { <SideBar /> }
                { this.state.loading && <Loader /> }
            </div>
        );
    }
}