import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { _ResultsPage } from './Results';
import { addResults } from '../../store/results/actions';

const mapStateToProps = state => ({
    results: state.results,
    title: state.title
});

const mapDispatchToProps = dispatch => ({
    addResults: bindActionCreators(addResults, dispatch),
});

export const ResultsPage = connect(mapStateToProps, mapDispatchToProps)(_ResultsPage);