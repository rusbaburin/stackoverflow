import { connect } from 'react-redux';

import { _ResultsPage } from './Results';

const mapStateToProps = state => ({
    results: state.results
});

const mapDispatchToProps = dispatch => ({

});

export const ResultsPage = connect(mapStateToProps, null)(_ResultsPage);