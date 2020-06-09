import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { _ResultsPage } from './Results';
import { replaceResults } from '../../store/results/actions';
import { replaceSideResults } from '../../store/sideResults/actions';
import { getResultsAsync, addResultsAsync, sortResultsAsync } from '../../sagas/results/saga';

const mapStateToProps = state => ({
    results: state.results,
    sideResults: state.sideResults,
    title: state.title
});

const mapDispatchToProps = dispatch => ({
    replaceResults: bindActionCreators(replaceResults, dispatch),
    getResultsAsync: bindActionCreators(getResultsAsync, dispatch),
    addResultsAsync: bindActionCreators(addResultsAsync, dispatch),
    sortResultsAsync: bindActionCreators(sortResultsAsync, dispatch),
    replaceSideResults: bindActionCreators(replaceSideResults, dispatch)
});

export const ResultsPage = connect(mapStateToProps, mapDispatchToProps)(_ResultsPage);