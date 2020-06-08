import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { _ResultsPage } from './Results';
import { replaceResults } from '../../store/results/actions';
import { replaceSideResults } from '../../store/sideResults/actions';
import { replaceResultsAsync, addResultsAsync } from '../../sagas/results/saga';

const mapStateToProps = state => ({
    results: state.results,
    sideResults: state.sideResults,
    title: state.title
});

const mapDispatchToProps = dispatch => ({
    replaceResults: bindActionCreators(replaceResults, dispatch),
    replaceResultsAsync: bindActionCreators(replaceResultsAsync, dispatch),
    addResultsAsync: bindActionCreators(addResultsAsync, dispatch),
    replaceSideResults: bindActionCreators(replaceSideResults, dispatch)
});

export const ResultsPage = connect(mapStateToProps, mapDispatchToProps)(_ResultsPage);