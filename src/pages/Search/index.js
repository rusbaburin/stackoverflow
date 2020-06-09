import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { _SearchPage } from './Search';
import { replaceResults } from '../../store/results/actions';
import { getResultsAsync } from '../../sagas/results/saga';

const mapStateToProps = state => ({
    results: state.results
});

const mapDispatchToProps = dispatch => ({
    getResultsAsync: bindActionCreators(getResultsAsync, dispatch),
    replaceResults: bindActionCreators(replaceResults, dispatch),
});

export const SearchPage = connect(mapStateToProps, mapDispatchToProps)(_SearchPage);