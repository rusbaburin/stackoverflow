import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { _ResultsPage } from './Results';
import { addResults } from '../../store/results/actions';
import { replaceSideResults } from '../../store/sideResults/actions';

const mapStateToProps = state => ({
    results: state.results,
    sideResults: state.sideResults,
    title: state.title
});

const mapDispatchToProps = dispatch => ({
    addResults: bindActionCreators(addResults, dispatch),
    replaceSideResults: bindActionCreators(replaceSideResults, dispatch)
});

export const ResultsPage = connect(mapStateToProps, mapDispatchToProps)(_ResultsPage);