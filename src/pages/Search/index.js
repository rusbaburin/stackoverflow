import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { _SearchPage } from './Search';
import { replaceResults } from '../../store/results/actions';

const mapStateToProps = state => ({
    results: state.results
});

const mapDispatchToProps = dispatch => ({
    replaceResults: bindActionCreators(replaceResults, dispatch)
});

export const SearchPage = connect(mapStateToProps, mapDispatchToProps)(_SearchPage);