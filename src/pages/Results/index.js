import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { _ResultsPage } from './Results';
import { getResultsAsync, addResultsAsync, sortResultsAsync } from '../../sagas/results/saga';
import { getTagResultsAsync, getUserResultsAsync } from '../../sagas/sideResults/saga';

const mapStateToProps = state => ({
    results: state.results,
    sideResults: state.sideResults,
    title: state.title
});

const mapDispatchToProps = dispatch => ({
    getResultsAsync: bindActionCreators(getResultsAsync, dispatch),
    addResultsAsync: bindActionCreators(addResultsAsync, dispatch),
    sortResultsAsync: bindActionCreators(sortResultsAsync, dispatch),
    getTagResultsAsync: bindActionCreators(getTagResultsAsync, dispatch),
    getUserResultsAsync: bindActionCreators(getUserResultsAsync, dispatch)
});

export const ResultsPage = connect(mapStateToProps, mapDispatchToProps)(_ResultsPage);