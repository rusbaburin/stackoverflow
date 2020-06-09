import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { _ExplorePage } from './Explore';
import { getQuestionAsync } from '../../sagas/question/saga';

const mapStateToProps = state => ({
    question: state.question,
});

const mapDispatchToProps = dispatch => ({
    getQuestionAsync: bindActionCreators(getQuestionAsync, dispatch),
});

export const ExplorePage = connect(mapStateToProps, mapDispatchToProps)(_ExplorePage);